/**
 * exam-api.js — المنطق المشترك لإنشاء جلسات الاختبار وتصحيحها.
 * يعمل في Cloudflare Workers وفي Node.js (18+) — يعتمد Web Crypto فقط.
 *
 * المبدأ الأمني:
 *  - الإجابات الصحيحة (answer-keys.js) لا تغادر السيرفر أبداً.
 *  - نصوص الأسئلة نفسها (questions-data.js) تعيش في السيرفر فقط — لا يوجد أي
 *    ملف ثابت بالمتصفح يحتوي أسئلة. الطالب يستلم 20 سؤالاً فقط (صفحته الحالية)
 *    عبر /api/questions، والحمولة مشفرة AES-GCM بمفتاح مشتق من توكن جلسته،
 *    فلا يظهر في تبويب Network أي نص سؤال.
 *  - الجلسة توكن موقّع HMAC يحدد: الاختبار، الأسئلة المختارة، الدرجات،
 *    ووقت البداية/الانتهاء — فلا يستطيع الطالب تعديل أي منها.
 */
import ANSWER_KEYS from "./answer-keys.js";
import BANK_INDEX from "./bank-index.js";
import QUESTIONS from "./questions-data.js";

export const EXAM_RULES = {
  questionCount: 60,
  durationMinutes: 60,
  totalScore: 100,
  pageSize: 20,           // الأسئلة تُسلَّم صفحةً صفحة، لا دفعة واحدة
  submitGraceSeconds: 30, // سماحية بسيطة لتأخر الشبكة عند التسليم التلقائي
  minPoints: 0.8,         // أقل درجة ممكنة لسؤال (التوزيع عشوائي)
  maxPoints: 2.6,         // أعلى درجة ممكنة لسؤال
};

const enc = new TextEncoder();

/* ---------- أدوات مساعدة ---------- */

function b64url(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(str) {
  const pad = "=".repeat((4 - (str.length % 4)) % 4);
  const s = atob(str.replace(/-/g, "+").replace(/_/g, "/") + pad);
  const bytes = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function sign(payloadB64, secret) {
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payloadB64));
  return b64url(new Uint8Array(sig));
}

/** التحقق من توكن الجلسة وفك حمولته — يُستخدم في تسليم الأسئلة والتصحيح */
async function verifyToken(token, secret) {
  if (typeof token !== "string" || !token.includes(".")) return null;
  const [payloadB64, sig] = token.split(".");
  if (sig !== (await sign(payloadB64, secret))) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(payloadB64)));
    if (payload.v !== 1 || !ANSWER_KEYS[payload.examId] || !Array.isArray(payload.qs)) return null;
    return payload;
  } catch {
    return null;
  }
}

/**
 * تشفير AES-GCM لحمولة الأسئلة بمفتاح مشتق من توكن الجلسة.
 * الهدف: ألا يظهر أي نص سؤال في تبويب Network بأدوات المطوّر — الحمولة
 * المنقولة نص مشفر، والمتصفح يفكّها في الذاكرة لحظة العرض فقط.
 * (ملاحظة صريحة: المفتاح مشتق من التوكن الذي يملكه صاحب الجلسة نفسه،
 * فهذه حماية عرضٍ وتعميةٌ للنقل، أما السرية الحقيقية فمصدرها أن البنك
 * الكامل لا يغادر السيرفر أصلاً.)
 */
async function deriveAesKey(token) {
  const digest = await crypto.subtle.digest("SHA-256", enc.encode("enjaz-exam-q1|" + token));
  return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}

async function encryptForSession(token, data) {
  const key = await deriveAesKey(token);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipher = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(JSON.stringify(data))
  );
  return { iv: b64url(iv), data: b64url(new Uint8Array(cipher)) };
}

/** خلط آمن (Fisher–Yates) بأرقام عشوائية من crypto */
function secureShuffle(arr) {
  const a = arr.slice();
  const rand = new Uint32Array(a.length);
  crypto.getRandomValues(rand);
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand[i] % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * توزيع الدرجة الكلية (100) عشوائياً على الأسئلة بحيث يكون المجموع 100 بالضبط.
 * كل سؤال يأخذ وزناً عشوائياً ثم تُطبَّع الأوزان وتُقرَّب لمنزلتين عشريتين.
 */
function randomPoints(count, total) {
  const rand = new Uint32Array(count);
  crypto.getRandomValues(rand);
  const span = EXAM_RULES.maxPoints - EXAM_RULES.minPoints;
  const weights = Array.from(rand, (r) => EXAM_RULES.minPoints + (r / 0xffffffff) * span);
  const sum = weights.reduce((a, b) => a + b, 0);
  const points = weights.map((w) => Math.round((w / sum) * total * 100) / 100);
  // تصحيح فرق التقريب على آخر سؤال ليكون المجموع 100 بالضبط
  const diff = Math.round((total - points.reduce((a, b) => a + b, 0)) * 100) / 100;
  points[points.length - 1] = Math.round((points[points.length - 1] + diff) * 100) / 100;
  return points;
}

/* ---------- إنشاء جلسة اختبار ---------- */

/**
 * ينشئ جلسة اختبار جديدة.
 * @param {object} body    { examId, excludeIds?: string[] }
 *   excludeIds: معرّفات الأسئلة التي ظهرت للطالب في محاولات سابقة —
 *   تُستبعد من الاختيار حتى تظهر له أسئلة مختلفة عند إعادة الاختبار.
 * @param {string} secret  سر التوقيع (EXAM_SECRET)
 */
export async function createSession(body, secret) {
  const examId = body && body.examId;
  const bank = BANK_INDEX[examId];
  if (!bank) return { status: 400, error: "exam_not_found", message: "الاختبار المطلوب غير موجود" };

  let excludeIds = Array.isArray(body.excludeIds) ? body.excludeIds : [];
  // حماية من مدخلات ضخمة
  if (excludeIds.length > 5000) excludeIds = [];

  const excluded = new Set(excludeIds);
  let pool = bank.filter((id) => !excluded.has(id));
  let exclusionsReset = false;

  // لو الأسئلة المتبقية غير المستبعدة لا تكفي لاختبار كامل، نعيد الدورة من كامل البنك
  if (pool.length < EXAM_RULES.questionCount) {
    pool = bank.slice();
    exclusionsReset = true;
  }

  const chosen = secureShuffle(pool).slice(0, EXAM_RULES.questionCount);
  const points = randomPoints(chosen.length, EXAM_RULES.totalScore);

  const iat = Date.now();
  const exp = iat + EXAM_RULES.durationMinutes * 60 * 1000;
  const payload = {
    v: 1,
    examId,
    iat,
    exp,
    qs: chosen.map((id, i) => [id, points[i]]),
  };
  const payloadB64 = b64url(enc.encode(JSON.stringify(payload)));
  const token = payloadB64 + "." + (await sign(payloadB64, secret));

  return {
    status: 200,
    data: {
      token,
      examId,
      serverNow: iat,
      expiresAt: exp,
      durationMinutes: EXAM_RULES.durationMinutes,
      totalScore: EXAM_RULES.totalScore,
      exclusionsReset, // ليعرف المتصفح أن دورة الأسئلة بدأت من جديد
      questions: payload.qs.map(([id, pts]) => ({ id, points: pts })),
    },
  };
}

/* ---------- تسليم أسئلة صفحة واحدة (مشفرة) ---------- */

/**
 * يسلّم أسئلة صفحة واحدة (20 سؤالاً) من جلسة قائمة — نصوص الأسئلة لا توجد
 * في أي ملف ثابت، وتصل للمتصفح مشفرة AES-GCM بمفتاح مشتق من توكن الجلسة.
 * @param {object} body { token, page: 0..2 }
 */
export async function getQuestions(body, secret) {
  const payload = await verifyToken(body && body.token, secret);
  if (!payload) return { status: 401, error: "bad_token", message: "جلسة غير موثوقة" };

  const now = Date.now();
  if (now > payload.exp + EXAM_RULES.submitGraceSeconds * 1000)
    return { status: 403, error: "session_expired", message: "انتهت مدة الاختبار" };

  const pageCount = Math.ceil(payload.qs.length / EXAM_RULES.pageSize);
  const page = body.page;
  if (!Number.isInteger(page) || page < 0 || page >= pageCount)
    return { status: 400, error: "bad_page", message: "رقم صفحة غير صالح" };

  const content = QUESTIONS[payload.examId];
  const slice = payload.qs.slice(page * EXAM_RULES.pageSize, (page + 1) * EXAM_RULES.pageSize);
  const questions = slice.map(([id, pts]) => ({
    id,
    points: pts,
    text: content[id].t,
    options: content[id].o,
  }));

  const encrypted = await encryptForSession(body.token, { page, questions });
  return { status: 200, data: { page, enc: encrypted } };
}

/* ---------- تصحيح الإجابات ---------- */

/**
 * يصحّح إجابات جلسة اختبار.
 * @param {object} body { token, answers: { [questionId]: optionIndex } }
 * @param {string} secret
 */
export async function gradeSession(body, secret) {
  const payload = await verifyToken(body && body.token, secret);
  if (!payload) return { status: 401, error: "bad_token", message: "جلسة غير موثوقة" };

  const keys = ANSWER_KEYS[payload.examId];
  const content = QUESTIONS[payload.examId];

  const now = Date.now();
  if (now > payload.exp + EXAM_RULES.submitGraceSeconds * 1000)
    return {
      status: 403,
      error: "session_expired",
      message: "انتهت مدة الاختبار — السيرفر لا يقبل تسليماً متأخراً",
    };

  const answers = (body && body.answers) || {};
  let score = 0;
  let correctCount = 0;
  // الأسئلة الخاطئة/غير المجابة فقط، بنصّها وخياراتها وحلّها الصحيح —
  // كشفها هنا مقصود: صفحة النتيجة تعرضها للمراجعة بعد انتهاء الجلسة
  const review = [];

  for (const [id, pts] of payload.qs) {
    const correct = keys[id];
    const chosenRaw = answers[id];
    const chosen = Number.isInteger(chosenRaw) && chosenRaw >= 0 && chosenRaw <= 3 ? chosenRaw : null;
    if (chosen === correct) {
      score += pts;
      correctCount++;
    } else {
      review.push({
        id,
        points: pts,
        chosen,
        correct,
        text: content[id].t,
        options: content[id].o,
      });
    }
  }

  score = Math.round(score * 100) / 100;

  return {
    status: 200,
    data: {
      examId: payload.examId,
      score,
      total: EXAM_RULES.totalScore,
      percent: Math.round((score / EXAM_RULES.totalScore) * 100),
      questionCount: payload.qs.length,
      correctCount,
      wrongCount: review.filter((r) => r.chosen !== null).length,
      unansweredCount: review.filter((r) => r.chosen === null).length,
      gradedAt: now,
      review,
    },
  };
}
