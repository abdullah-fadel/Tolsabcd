#!/usr/bin/env node
/**
 * build-data.mjs — يولّد ملفات بيانات الاختبارات من بنوك الأسئلة المصدرية.
 *
 * المدخلات:  exams-tool/question-banks/*.js   (تحتوي correctIndex — لا تُنشر أبداً)
 * المخرجات:
 *   exams-tool/data/manifest.json        ← قائمة الاختبارات وبياناتها الوصفية فقط
 *   exams-tool/server/questions-data.js  ← نصوص الأسئلة والخيارات (داخل الـ Worker فقط —
 *                                          لا يوجد أي ملف أسئلة يُقدَّم للمتصفح)
 *   exams-tool/server/answer-keys.js     ← id → correctIndex (داخل الـ Worker فقط)
 *   exams-tool/server/bank-index.js      ← قوائم المعرّفات لكل اختبار (للـ Worker)
 *
 * التشغيل:  node exams-tool/tools/build-data.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANKS = join(ROOT, "question-banks");

/** تحميل ملف بنك أسئلة يعرّف `const questions = [...]` */
function loadBank(file) {
  const code = readFileSync(join(BANKS, file), "utf8");
  const fn = new Function("module", code + "\n;return questions;");
  const questions = fn({ exports: {} });
  if (!Array.isArray(questions)) throw new Error(`${file}: لم يتم العثور على مصفوفة questions`);
  return questions;
}

const EXAMS = [
  {
    examId: "arabic",
    title: "اختبار اللغة العربية",
    description: "النحو والصرف والإملاء والأدب — لطلبة الدراسات العليا",
    idPrefix: "ar_",
    sources: ["arabic-bank.js"],
  },
  {
    examId: "english",
    title: "اختبار اللغة الإنجليزية",
    description: "القواعد والأزمنة وحروف الجر والأدب والاستيعاب القرائي",
    idPrefix: "en_",
    sources: [
      "english-grammar.js",
      "english-tenses.js",
      "english-prepositions.js",
      "english-dialogue-completion.js",
      "english-reading-comprehension.js",
      "english-literature-bank.js",
      "english-literature-exam.js",
    ],
  },
  {
    examId: "computer",
    title: "اختبار الحاسوب",
    description: "أساسيات الحاسوب، وورد، إكسل، باوربوينت، الإنترنت وأمن المعلومات",
    idPrefix: "cs_",
    sources: ["computer-bank.js"],
  },
];

const QUESTIONS_PER_EXAM = 60;
const DURATION_MINUTES = 60;
const TOTAL_SCORE = 100;

const manifest = { version: "1.0", exams: [] };
const answerKeys = {};    // examId → { qid: correctIndex }
const bankIndex = {};     // examId → [qid, ...]
const questionsData = {}; // examId → { qid: {t: نص, o: [خيارات] } } — سيرفر فقط

for (const exam of EXAMS) {
  const seen = new Set();
  const keys = {};
  const content = {};
  const ids = [];

  for (const src of exam.sources) {
    for (const q of loadBank(src)) {
      const id = exam.idPrefix + q.id;
      if (seen.has(id)) throw new Error(`${exam.examId}: معرّف مكرر ${id}`);
      if (!q.question || typeof q.question !== "string") throw new Error(`${id}: نص سؤال غير صالح`);
      if (!Array.isArray(q.options) || q.options.length !== 4)
        throw new Error(`${id}: يجب أن يحتوي على 4 خيارات`);
      if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3)
        throw new Error(`${id}: correctIndex غير صالح (${q.correctIndex})`);
      seen.add(id);
      ids.push(id);
      content[id] = { t: q.question, o: q.options };
      keys[id] = q.correctIndex;
    }
  }

  if (ids.length < QUESTIONS_PER_EXAM)
    throw new Error(`${exam.examId}: البنك يحتوي ${ids.length} فقط (< ${QUESTIONS_PER_EXAM})`);

  answerKeys[exam.examId] = keys;
  bankIndex[exam.examId] = ids;
  questionsData[exam.examId] = content;

  manifest.exams.push({
    examId: exam.examId,
    title: exam.title,
    description: exam.description,
    duration_minutes: DURATION_MINUTES,
    total_score: TOTAL_SCORE,
    question_count: QUESTIONS_PER_EXAM,
    bank_size: ids.length,
  });

  console.log(`✔ ${exam.examId}: ${ids.length} سؤالاً في البنك`);
}

writeFileSync(join(ROOT, "data", "manifest.json"), JSON.stringify(manifest, null, 2));

const HEADER =
  "// ملف مولَّد تلقائياً بواسطة tools/build-data.mjs — لا تعدّله يدوياً.\n" +
  "// سري: يُحزم داخل الـ Worker فقط ولا يُقدَّم كملف ثابت للمتصفح أبداً.\n";

writeFileSync(
  join(ROOT, "server", "answer-keys.js"),
  HEADER + "export default " + JSON.stringify(answerKeys) + ";\n"
);
writeFileSync(
  join(ROOT, "server", "bank-index.js"),
  "// ملف مولَّد تلقائياً بواسطة tools/build-data.mjs — لا تعدّله يدوياً.\n" +
    "export default " + JSON.stringify(bankIndex) + ";\n"
);
writeFileSync(
  join(ROOT, "server", "questions-data.js"),
  HEADER + "export default " + JSON.stringify(questionsData) + ";\n"
);

console.log("✔ تم توليد data/manifest.json و server/{questions-data,answer-keys,bank-index}.js");
