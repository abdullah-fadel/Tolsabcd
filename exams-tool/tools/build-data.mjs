#!/usr/bin/env node
/**
 * build-data.mjs — يولّد ملفات بيانات الاختبارات من بنوك الأسئلة المصدرية.
 *
 * المدخلات:  exams-tool/question-banks/*.js   (تحتوي correctIndex — لا تُنشر أبداً)
 * المخرجات:
 *   exams-tool/data/<examId>.json    ← أسئلة بدون إجابات (تُحمَّل بالمتصفح)
 *   exams-tool/data/manifest.json    ← قائمة الاختبارات وبياناتها
 *   exams-tool/server/answer-keys.js ← id → correctIndex (يُحزم داخل الـ Worker فقط)
 *   exams-tool/server/bank-index.js  ← id lists per exam (للـ Worker)
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
const answerKeys = {}; // examId → { qid: correctIndex }
const bankIndex = {};  // examId → [qid, ...]

for (const exam of EXAMS) {
  const seen = new Set();
  const publicQuestions = [];
  const keys = {};

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
      publicQuestions.push({ id, text: q.question, options: q.options });
      keys[id] = q.correctIndex;
    }
  }

  if (publicQuestions.length < QUESTIONS_PER_EXAM)
    throw new Error(`${exam.examId}: البنك يحتوي ${publicQuestions.length} فقط (< ${QUESTIONS_PER_EXAM})`);

  // ملف عام — بدون correctIndex إطلاقاً
  writeFileSync(
    join(ROOT, "data", `${exam.examId}.json`),
    JSON.stringify(
      {
        examId: exam.examId,
        title: exam.title,
        version: manifest.version,
        questions: publicQuestions,
      },
      null,
      1
    )
  );

  answerKeys[exam.examId] = keys;
  bankIndex[exam.examId] = publicQuestions.map((q) => q.id);

  manifest.exams.push({
    examId: exam.examId,
    title: exam.title,
    description: exam.description,
    duration_minutes: DURATION_MINUTES,
    total_score: TOTAL_SCORE,
    question_count: QUESTIONS_PER_EXAM,
    bank_size: publicQuestions.length,
    data_file: `data/${exam.examId}.json`,
  });

  console.log(`✔ ${exam.examId}: ${publicQuestions.length} سؤالاً في البنك`);
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

console.log("✔ تم توليد data/*.json و server/answer-keys.js و server/bank-index.js");
