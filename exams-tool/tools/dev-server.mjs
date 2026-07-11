#!/usr/bin/env node
/**
 * dev-server.mjs — سيرفر تطوير محلي لتجربة الأداة بدون نشر Cloudflare.
 * يقدّم الملفات الثابتة + نفس الـ API (session/grade) بنفس منطق الـ Worker.
 *
 * التشغيل:  node exams-tool/tools/dev-server.mjs   ثم افتح http://localhost:8788
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize, extname } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createSession, gradeSession } from "../server/exam-api.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = process.env.PORT || 8788;
const SECRET = process.env.EXAM_SECRET || "dev-secret-" + Math.random().toString(36).slice(2);

// كما في .assetsignore — لا تُقدَّم للمتصفح أبداً
const BLOCKED = ["/server/", "/question-banks/", "/tools/", "/.assetsignore"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function json(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(data));
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const path = url.pathname;

  if (path.startsWith("/api/")) {
    if (req.method !== "POST") return json(res, 405, { error: "method_not_allowed" });
    let body = "";
    for await (const chunk of req) body += chunk;
    let parsed;
    try {
      parsed = JSON.parse(body || "{}");
    } catch {
      return json(res, 400, { error: "bad_json" });
    }
    const handler = path === "/api/session" ? createSession : path === "/api/grade" ? gradeSession : null;
    if (!handler) return json(res, 404, { error: "not_found" });
    const result = await handler(parsed, SECRET);
    return json(res, result.status, result.status === 200 ? result.data : { error: result.error, message: result.message });
  }

  // ملفات ثابتة
  let filePath = path === "/" ? "/index.html" : path;
  if (BLOCKED.some((b) => filePath.startsWith(b) || filePath === b.replace(/\/$/, ""))) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  const full = normalize(join(ROOT, filePath));
  if (!full.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  try {
    const data = await readFile(full);
    res.writeHead(200, { "Content-Type": MIME[extname(full)] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(PORT, () => {
  console.log(`✔ أداة الاختبارات تعمل محلياً: http://localhost:${PORT}`);
});
