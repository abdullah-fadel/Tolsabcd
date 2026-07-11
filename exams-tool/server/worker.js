/**
 * worker.js — Cloudflare Worker لأداة الاختبارات.
 * المسارات:
 *   POST /api/session   → إنشاء جلسة اختبار (اختيار 60 سؤالاً عشوائياً + توقيت)
 *   POST /api/questions → تسليم أسئلة صفحة واحدة (20 سؤالاً) مشفرة AES-GCM —
 *                         نصوص الأسئلة لا توجد في أي ملف يصل للمتصفح
 *   POST /api/grade     → تصحيح الإجابات (الإجابات الصحيحة سرية هنا فقط)
 * الملفات الثابتة (index.html, exam.html, ...) تُقدَّم عبر Workers Assets
 * حسب wrangler.toml — مجلدات server/ و question-banks/ و tools/ مستبعدة
 * عبر .assetsignore فلا تصل للمتصفح أبداً.
 *
 * الإعداد المطلوب: wrangler secret put EXAM_SECRET
 * اختياري: متغير ALLOWED_ORIGINS (قائمة أصول مفصولة بفواصل) لتقييد الوصول.
 */
import { createSession, getQuestions, gradeSession } from "./exam-api.js";

// حد بسيط للطلبات لكل IP (لكل isolate — رادع أولي، والأفضل إضافة
// قاعدة Rate Limiting من لوحة Cloudflare للحماية الكاملة)
const RATE_LIMIT = { windowMs: 60_000, maxRequests: 30 };
const rateMap = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT.windowMs) {
    rateMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  if (rateMap.size > 10_000) rateMap.clear(); // منع تضخم الذاكرة
  return entry.count > RATE_LIMIT.maxRequests;
}

function corsHeaders(origin, allowed) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  };
  if (allowed.length === 0) {
    // نفس الأصل (الـ Worker يقدّم الواجهة بنفسه) — لا حاجة لـ CORS مفتوح
    if (origin) headers["Access-Control-Allow-Origin"] = origin;
  } else if (origin && allowed.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
  headers["Access-Control-Allow-Headers"] = "Content-Type";
  headers["Vary"] = "Origin";
  return headers;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith("/api/")) {
      // ملفات الواجهة الثابتة
      return env.ASSETS ? env.ASSETS.fetch(request) : new Response("Not found", { status: 404 });
    }

    const allowed = (env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin, allowed);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

    if (request.method !== "POST")
      return new Response(JSON.stringify({ error: "method_not_allowed" }), { status: 405, headers });

    // التحقق من الأصل عند تفعيل ALLOWED_ORIGINS — يمنع استخدام الـ API من مواقع أخرى
    if (allowed.length > 0 && origin && !allowed.includes(origin))
      return new Response(JSON.stringify({ error: "forbidden_origin" }), { status: 403, headers });

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (rateLimited(ip))
      return new Response(
        JSON.stringify({ error: "rate_limited", message: "طلبات كثيرة — حاول بعد قليل" }),
        { status: 429, headers }
      );

    const secret = env.EXAM_SECRET;
    if (!secret)
      return new Response(
        JSON.stringify({ error: "server_misconfigured", message: "EXAM_SECRET غير مضبوط" }),
        { status: 500, headers }
      );

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "bad_json" }), { status: 400, headers });
    }

    let result;
    if (url.pathname === "/api/session") result = await createSession(body, secret);
    else if (url.pathname === "/api/questions") result = await getQuestions(body, secret);
    else if (url.pathname === "/api/grade") result = await gradeSession(body, secret);
    else return new Response(JSON.stringify({ error: "not_found" }), { status: 404, headers });

    const payload = result.status === 200 ? result.data : { error: result.error, message: result.message };
    return new Response(JSON.stringify(payload), { status: result.status, headers });
  },
};
