/**
 * exam-engine.js — المحرك المشترك للاختبارات الثلاثة (عربي / إنجليزي / حاسوب)
 * جزء من منصة مكتبة الإنجاز الإلكترونية.
 *
 * يعمل بلا خطوات بناء (vanilla JS). أي اختبار يُعرَّف في data/manifest.json
 * يعمل تلقائياً بنفس المحرك — بيانات كل مادة بملفها الخاص في السيرفر.
 *
 * نموذج الحماية:
 *  - لا يوجد أي ملف ثابت يحتوي أسئلة: المتصفح يستلم 20 سؤالاً فقط (صفحته
 *    الحالية) من /api/questions، والحمولة مشفرة AES-GCM بمفتاح مشتق من توكن
 *    الجلسة — تبويب Network لا يعرض أي نص سؤال.
 *  - الأسئلة المفكوكة تعيش في ذاكرة JavaScript فقط — لا تُكتب في localStorage
 *    أو sessionStorage إطلاقاً، فتبويب Application فارغ منها.
 *  - التصحيح والإجابات الصحيحة في السيرفر حصراً.
 *  - إعادة الاختبار = أسئلة مختلفة: معرّفات الأسئلة (وليس نصوصها) التي ظهرت
 *    للطالب تُحفَظ محلياً وتُرسَل عند بدء أي جلسة جديدة فيستبعدها السيرفر،
 *    حتى تكتمل دورة البنك كله فتبدأ دورة جديدة.
 *  - أثناء الاختبار: كاشف فتحٍ لأدوات المطوّر يحجب الأسئلة بطبقة تغطية
 *    (رادع، وليس حماية مطلقة — فلا وجود لها في أي أداة تعمل بالمتصفح).
 */
(function () {
  "use strict";

  var API_BASE = (window.EXAM_CONFIG && window.EXAM_CONFIG.apiBase) || "";
  var PAGE_SIZE = 20;
  var PAGES = 3;

  /* ================= أدوات عامة ================= */

  function $(sel, root) { return (root || document).querySelector(sel); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function fetchJSON(url, options) {
    return fetch(url, options).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (!res.ok) {
          var err = new Error(data.message || "خطأ في الاتصال بالسيرفر");
          err.code = data.error || "http_" + res.status;
          throw err;
        }
        return data;
      });
    });
  }

  function api(path, body) {
    return fetchJSON(API_BASE + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  function getQueryParam(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function readStore(storage, key) {
    try { return JSON.parse(storage.getItem(key)); } catch (e) { return null; }
  }

  function writeStore(storage, key, value) {
    try { storage.setItem(key, JSON.stringify(value)); } catch (e) { /* مساحة ممتلئة */ }
  }

  /* ====== فك تشفير حمولة الأسئلة (AES-GCM بمفتاح مشتق من التوكن) ====== */

  function b64urlToBytes(str) {
    var pad = "=".repeat((4 - (str.length % 4)) % 4);
    var s = atob(str.replace(/-/g, "+").replace(/_/g, "/") + pad);
    var bytes = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
    return bytes;
  }

  function decryptQuestions(token, encPayload) {
    var encoder = new TextEncoder();
    return crypto.subtle.digest("SHA-256", encoder.encode("enjaz-exam-q1|" + token))
      .then(function (digest) {
        return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["decrypt"]);
      })
      .then(function (key) {
        return crypto.subtle.decrypt(
          { name: "AES-GCM", iv: b64urlToBytes(encPayload.iv) },
          key,
          b64urlToBytes(encPayload.data)
        );
      })
      .then(function (plain) {
        return JSON.parse(new TextDecoder().decode(plain));
      });
  }

  /* ====== سجل الأسئلة التي شاهدها الطالب (لإعادة الاختبار بأسئلة مختلفة) ====== */

  function seenKey(examId) { return "enjaz.exam.seen." + examId; }

  function getSeenIds(examId) {
    var list = readStore(localStorage, seenKey(examId));
    return Array.isArray(list) ? list : [];
  }

  function addSeenIds(examId, ids) {
    var seen = getSeenIds(examId);
    var set = {};
    seen.forEach(function (id) { set[id] = true; });
    ids.forEach(function (id) { if (!set[id]) { seen.push(id); set[id] = true; } });
    writeStore(localStorage, seenKey(examId), seen);
  }

  function clearSeenIds(examId) {
    try { localStorage.removeItem(seenKey(examId)); } catch (e) {}
  }

  /* ====== الجلسة النشطة (تنجو من تحديث الصفحة، وتنتهي بالتسليم) ======
     تحتوي التوكن ووقت الانتهاء والإجابات فقط — لا نصوص أسئلة أبداً */

  function activeKey(examId) { return "enjaz.exam.active." + examId; }

  function getActiveSession(examId) {
    var s = readStore(sessionStorage, activeKey(examId));
    if (!s || s.examId !== examId) return null;
    if (Date.now() >= s.endLocal) { clearActiveSession(examId); return null; }
    return s;
  }

  function saveActiveSession(session) {
    writeStore(sessionStorage, activeKey(session.examId), session);
  }

  function clearActiveSession(examId) {
    try { sessionStorage.removeItem(activeKey(examId)); } catch (e) {}
  }

  /* ====== خلط خيارات ثابت لكل (جلسة، سؤال) — يبقى كما هو بعد تحديث الصفحة ====== */

  function hashString(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function optionOrder(sessionToken, questionId, count) {
    var seed = hashString(sessionToken.slice(-24) + "|" + questionId);
    var order = [];
    for (var i = 0; i < count; i++) order.push(i);
    for (var j = count - 1; j > 0; j--) {
      seed = (Math.imul(seed, 1103515245) + 12345) >>> 0;
      var k = seed % (j + 1);
      var tmp = order[j]; order[j] = order[k]; order[k] = tmp;
    }
    return order; // order[displayIndex] = originalIndex
  }

  /* ================= الحماية من النسخ (رادعة، ليست مانعة كاملة) ================= */

  function enableAntiCopy() {
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("copy", function (e) { e.preventDefault(); });
    document.addEventListener("keydown", function (e) {
      var k = (e.key || "").toUpperCase();
      if (
        k === "F12" ||
        (e.ctrlKey && e.shiftKey && (k === "I" || k === "J" || k === "C")) ||
        (e.ctrlKey && (k === "U" || k === "S" || k === "P"))
      ) e.preventDefault();
    });
  }

  /* ====== كاشف أدوات المطوّر: يحجب الأسئلة بطبقة تغطية أثناء فتحها ======
     يعتمد فرق أبعاد النافذة (يكشف اللوحة الملتصقة). رادع إضافي فقط. */

  function startDevtoolsGuard() {
    if (Math.min(screen.width, screen.height) < 700) return null; // أجهزة الموبايل لا تملك DevTools
    var overlay = el("div", "devtools-guard hidden");
    var box = el("div", "devtools-guard-box");
    box.appendChild(el("h3", null, "⚠️ تم رصد فتح أدوات المطوّر"));
    box.appendChild(el("p", null, "أغلق أدوات المطوّر للمتابعة — الأسئلة محجوبة الآن، والمؤقّت مستمر بالعدّ."));
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    var THRESHOLD = 200;
    function check() {
      var open =
        window.outerWidth - window.innerWidth > THRESHOLD ||
        window.outerHeight - window.innerHeight > THRESHOLD + 100;
      overlay.classList.toggle("hidden", !open);
    }
    check();
    var handle = setInterval(check, 700);
    return function stop() {
      clearInterval(handle);
      overlay.remove();
    };
  }

  /* ================= تحميل بيانات الاختبارات (وصفية فقط — بلا أسئلة) ================= */

  function loadManifest() { return fetchJSON("data/manifest.json"); }

  /* ================= صفحة اختيار الاختبار ================= */

  function initIndex() {
    var container = $("#exam-cards");
    loadManifest().then(function (manifest) {
      container.innerHTML = "";
      var icons = { arabic: "📖", english: "🌍", computer: "💻" };
      manifest.exams.forEach(function (exam) {
        var card = el("div", "exam-card");
        card.appendChild(el("div", "icon", icons[exam.examId] || "📝"));
        card.appendChild(el("h2", null, exam.title));
        card.appendChild(el("p", null, exam.description));
        var meta = el("div", "meta");
        meta.appendChild(el("span", null, exam.question_count + " سؤالاً"));
        meta.appendChild(el("span", null, exam.duration_minutes + " دقيقة"));
        meta.appendChild(el("span", null, exam.total_score + " درجة"));
        card.appendChild(meta);
        card.appendChild(
          el("div", "bank-note",
            "يُختار عشوائياً من بنك يضم " + exam.bank_size + " سؤالاً — كل محاولة بأسئلة مختلفة")
        );
        var btn = el("a", "btn btn-gold", "ابدأ الاختبار");
        btn.href = "exam.html?exam=" + encodeURIComponent(exam.examId);
        card.appendChild(btn);
        container.appendChild(card);
      });
    }).catch(function () {
      container.innerHTML = "";
      var msg = el("div", "notice error", "تعذّر تحميل قائمة الاختبارات — تأكد من اتصالك بالإنترنت ثم حدّث الصفحة.");
      container.appendChild(msg);
    });
  }

  /* ================= صفحة أداء الاختبار ================= */

  function initExam() {
    var examId = getQueryParam("exam");
    var root = $("#exam-root");
    var state = {
      examId: examId,
      meta: null,        // من manifest
      session: null,     // {examId, token, endLocal, answers:{}} — بلا أسئلة
      pages: {},         // أسئلة مفكوكة التشفير — في الذاكرة فقط، لا تُخزَّن أبداً
      pageIndex: 0,
      timerHandle: null,
      guardStop: null,
      submitting: false,
    };

    if (!examId) { location.replace("index.html"); return; }

    enableAntiCopy();

    loadManifest()
      .then(function (manifest) {
        state.meta = manifest.exams.find(function (e) { return e.examId === examId; });
        if (!state.meta) throw new Error("اختبار غير معروف");
        $("#exam-name").textContent = state.meta.title;
        document.title = state.meta.title + " | مكتبة الإنجاز";
        var resumed = getActiveSession(examId);
        if (resumed) {
          state.session = resumed;
          startExamUI();
        } else {
          showIntro();
        }
      })
      .catch(function (err) {
        showFatal(err.message || "خطأ غير متوقع");
      });

    function showFatal(message) {
      root.innerHTML = "";
      var box = el("div", "notice error");
      box.appendChild(el("h3", null, "تعذّر تحميل الاختبار"));
      box.appendChild(el("p", null, message));
      var back = el("a", "btn btn-navy", "العودة للرئيسية");
      back.href = "index.html";
      box.appendChild(back);
      root.appendChild(box);
    }

    /* ----- شاشة الاستعداد (تأكيد قبل بدء العد التنازلي) ----- */
    function showIntro() {
      root.innerHTML = "";
      var card = el("div", "intro-card");
      card.appendChild(el("h1", null, state.meta.title));
      var list = el("ul");
      [
        state.meta.question_count + " سؤالاً موزعة على " + PAGES + " صفحات (" + PAGE_SIZE + " سؤالاً لكل صفحة)",
        "المدة " + state.meta.duration_minutes + " دقيقة — عدّاد تنازلي وتسليم تلقائي عند انتهاء الوقت",
        "الدرجة الكلية " + state.meta.total_score + " موزعة على الأسئلة",
        "تستطيع الرجوع بين الصفحات دون فقدان إجاباتك قبل التسليم النهائي",
        "عند إعادة الاختبار تظهر لك أسئلة مختلفة عن محاولاتك السابقة",
      ].forEach(function (t) { list.appendChild(el("li", null, t)); });
      card.appendChild(list);
      card.appendChild(el("p", null, "سيبدأ عدّ تنازلي مدته " + state.meta.duration_minutes + " دقيقة، هل أنت جاهز؟"));
      var start = el("button", "btn btn-gold", "أنا جاهز — ابدأ الاختبار الآن");
      start.addEventListener("click", function () {
        start.disabled = true;
        start.textContent = "جارٍ تجهيز أسئلتك…";
        createNewSession().catch(function (err) {
          start.disabled = false;
          start.textContent = "أنا جاهز — ابدأ الاختبار الآن";
          alert(err.message || "تعذّر بدء الاختبار — حاول مجدداً");
        });
      });
      card.appendChild(start);
      var back = el("p");
      var backLink = el("a", null, "العودة لاختيار اختبار آخر");
      backLink.href = "index.html";
      back.style.marginTop = "14px";
      back.appendChild(backLink);
      card.appendChild(back);
      root.appendChild(card);
    }

    /* ----- إنشاء جلسة جديدة من السيرفر (مع استبعاد الأسئلة السابقة) ----- */
    function createNewSession() {
      return api("/api/session", {
        examId: examId,
        excludeIds: getSeenIds(examId),
      }).then(function (data) {
        // السيرفر أعاد الدورة من كامل البنك (استُهلكت الأسئلة غير المشاهدة)
        if (data.exclusionsReset) clearSeenIds(examId);
        // سجّل معرّفات أسئلة هذه الجلسة فوراً حتى لا تتكرر في المحاولة القادمة
        addSeenIds(examId, data.questions.map(function (q) { return q.id; }));

        state.session = {
          examId: examId,
          token: data.token,
          endLocal: Date.now() + (data.expiresAt - data.serverNow),
          answers: {},
        };
        saveActiveSession(state.session);
        startExamUI();
      });
    }

    /* ----- جلب أسئلة صفحة (مشفرة) وفكّها في الذاكرة فقط ----- */
    function loadPage(pageIdx) {
      if (state.pages[pageIdx]) return Promise.resolve(state.pages[pageIdx]);
      return api("/api/questions", { token: state.session.token, page: pageIdx })
        .then(function (data) { return decryptQuestions(state.session.token, data.enc); })
        .then(function (payload) {
          state.pages[pageIdx] = payload.questions;
          return payload.questions;
        });
    }

    /* ----- واجهة الاختبار ----- */
    function startExamUI() {
      state.pageIndex = 0;
      $("#exam-topbar").classList.remove("hidden");
      state.guardStop = startDevtoolsGuard();
      renderPage();
      startTimer();
    }

    function answeredCount() {
      return Object.keys(state.session.answers).length;
    }

    function renderPage() {
      root.innerHTML = "";
      root.appendChild(el("div", "loading", "جارٍ تحميل أسئلة الصفحة " + (state.pageIndex + 1) + "…"));

      loadPage(state.pageIndex)
        .then(function (questions) { renderQuestions(questions); })
        .catch(function (err) {
          root.innerHTML = "";
          var box = el("div", "notice error");
          box.appendChild(el("h3", null, err.code === "session_expired" ? "انتهت مدة الاختبار" : "تعذّر تحميل الأسئلة"));
          box.appendChild(el("p", null, err.message || "خطأ في الاتصال"));
          if (err.code === "session_expired") {
            // انتهى الوقت أثناء التنقل — سلّم ما لديه (السيرفر يقبل ضمن السماحية)
            submitAnswers(true);
            return;
          }
          var again = el("button", "btn btn-gold", "إعادة المحاولة");
          again.addEventListener("click", renderPage);
          box.appendChild(again);
          root.appendChild(box);
        });
    }

    function renderQuestions(questions) {
      root.innerHTML = "";
      var startIdx = state.pageIndex * PAGE_SIZE;

      // مؤشر الصفحات
      var pager = el("div", "pager-info");
      for (var p = 0; p < PAGES; p++) {
        var dot = el("div", "pager-dot", String(p + 1));
        if (p === state.pageIndex) dot.classList.add("active");
        else if (p < state.pageIndex) dot.classList.add("done");
        pager.appendChild(dot);
      }
      root.appendChild(pager);

      var letters = ["أ", "ب", "ج", "د"];

      questions.forEach(function (q, i) {
        var globalIdx = startIdx + i;

        var card = el("div", "question-card");
        var head = el("div", "q-head");
        head.appendChild(el("div", "q-num", String(globalIdx + 1)));
        head.appendChild(el("div", "q-points", q.points + " درجة"));
        card.appendChild(head);

        var text = el("div", "q-text", q.text);
        text.setAttribute("dir", "auto");
        card.appendChild(text);

        var opts = el("div", "options");
        var order = optionOrder(state.session.token, q.id, q.options.length);
        var saved = state.session.answers[q.id];

        order.forEach(function (originalIdx, displayIdx) {
          var label = el("label", "option");
          var input = document.createElement("input");
          input.type = "radio";
          input.name = "q_" + q.id;
          input.value = String(originalIdx);
          if (saved === originalIdx) {
            input.checked = true;
            label.classList.add("selected");
          }
          input.addEventListener("change", function () {
            state.session.answers[q.id] = originalIdx;
            saveActiveSession(state.session);
            opts.querySelectorAll(".option").forEach(function (o) { o.classList.remove("selected"); });
            label.classList.add("selected");
            updateAnsweredCounter();
          });
          label.appendChild(input);
          label.appendChild(el("span", "opt-letter", letters[displayIdx] + "."));
          var optText = el("span", null, q.options[originalIdx]);
          optText.setAttribute("dir", "auto");
          label.appendChild(optText);
          opts.appendChild(label);
        });

        card.appendChild(opts);
        root.appendChild(card);
      });

      // أزرار التنقل
      var nav = el("div", "exam-nav");
      var prev = el("button", "btn btn-outline", "◀ الرجوع");
      prev.disabled = state.pageIndex === 0;
      prev.addEventListener("click", function () { gotoPage(state.pageIndex - 1); });
      nav.appendChild(prev);

      if (state.pageIndex < PAGES - 1) {
        var next = el("button", "btn btn-navy", "التالي ▶");
        next.addEventListener("click", function () { gotoPage(state.pageIndex + 1); });
        nav.appendChild(next);
      } else {
        var submit = el("button", "btn btn-gold", "تسليم نهائي");
        submit.addEventListener("click", confirmSubmit);
        nav.appendChild(submit);
      }
      root.appendChild(nav);

      updateAnsweredCounter();
      window.scrollTo(0, 0);
    }

    function gotoPage(idx) {
      state.pageIndex = Math.max(0, Math.min(PAGES - 1, idx));
      renderPage();
    }

    function updateAnsweredCounter() {
      $("#answered-count").textContent =
        "أجبت " + answeredCount() + " من " + state.meta.question_count;
    }

    /* ----- المؤقّت ----- */
    function startTimer() {
      var timerEl = $("#timer");
      function tick() {
        var remaining = state.session.endLocal - Date.now();
        if (remaining <= 0) {
          timerEl.textContent = "00:00";
          clearInterval(state.timerHandle);
          submitAnswers(true);
          return;
        }
        var totalSec = Math.floor(remaining / 1000);
        var mm = String(Math.floor(totalSec / 60)).padStart(2, "0");
        var ss = String(totalSec % 60).padStart(2, "0");
        timerEl.textContent = mm + ":" + ss;
        if (remaining < 5 * 60 * 1000) timerEl.classList.add("warn");
      }
      tick();
      state.timerHandle = setInterval(tick, 500);
    }

    /* ----- التسليم ----- */
    function confirmSubmit() {
      var unanswered = state.meta.question_count - answeredCount();
      var modal = $("#submit-modal");
      var msg = $("#submit-modal-msg");
      msg.innerHTML = "";
      if (unanswered > 0) {
        msg.appendChild(document.createTextNode("لديك "));
        msg.appendChild(el("span", "warn-count", unanswered + " أسئلة غير مُجابة"));
        msg.appendChild(document.createTextNode(" — ستُحسب صفراً. هل تريد التسليم النهائي؟"));
      } else {
        msg.textContent = "أجبت على جميع الأسئلة. هل تريد التسليم النهائي؟";
      }
      modal.classList.remove("hidden");
    }

    $("#submit-confirm").addEventListener("click", function () {
      $("#submit-modal").classList.add("hidden");
      submitAnswers(false);
    });
    $("#submit-cancel").addEventListener("click", function () {
      $("#submit-modal").classList.add("hidden");
    });

    function submitAnswers(auto) {
      if (state.submitting) return;
      state.submitting = true;
      if (state.timerHandle) clearInterval(state.timerHandle);
      if (state.guardStop) { state.guardStop(); state.guardStop = null; }

      root.innerHTML = "";
      root.appendChild(el("div", "loading", auto ? "انتهى الوقت — جارٍ التسليم والتصحيح…" : "جارٍ التصحيح…"));

      api("/api/grade", {
        token: state.session.token,
        answers: state.session.answers,
      })
        .then(function (result) {
          state.pages = {}; // تفريغ الأسئلة من الذاكرة
          writeStore(sessionStorage, "enjaz.exam.result", {
            examId: examId,
            result: result,
          });
          clearActiveSession(examId);
          location.replace("result.html");
        })
        .catch(function (err) {
          state.submitting = false;
          root.innerHTML = "";
          var box = el("div", "notice error");
          box.appendChild(el("h3", null, err.code === "session_expired" ? "انتهت مدة الاختبار" : "تعذّر التسليم"));
          box.appendChild(el("p", null, err.message || "خطأ في الاتصال"));
          if (err.code === "session_expired") {
            clearActiveSession(examId);
            var retry = el("a", "btn btn-gold", "إعادة الاختبار بأسئلة جديدة");
            retry.href = "exam.html?exam=" + encodeURIComponent(examId);
            box.appendChild(retry);
          } else {
            var again = el("button", "btn btn-gold", "إعادة محاولة التسليم");
            again.addEventListener("click", function () { submitAnswers(auto); });
            box.appendChild(again);
          }
          var home = el("a", "btn btn-outline", "الرئيسية");
          home.href = "index.html";
          home.style.marginInlineStart = "8px";
          box.appendChild(home);
          root.appendChild(box);
        });
    }
  }

  /* ================= صفحة النتيجة ================= */

  function ratingFor(percent) {
    if (percent >= 90) return { label: "ممتاز", color: "#1e7d4f" };
    if (percent >= 80) return { label: "جيد جداً", color: "#1e7d4f" };
    if (percent >= 70) return { label: "جيد", color: "#b8942a" };
    if (percent >= 60) return { label: "مقبول", color: "#b8942a" };
    return { label: "ضعيف — يحتاج مراجعة", color: "#b3372f" };
  }

  function initResult() {
    var stored = readStore(sessionStorage, "enjaz.exam.result");
    if (!stored || !stored.result) { location.replace("index.html"); return; }

    var result = stored.result;
    var examId = stored.examId;
    var root = $("#result-root");

    loadManifest()
      .then(function (manifest) {
        var meta = manifest.exams.find(function (e) { return e.examId === examId; });
        $("#result-exam-name").textContent = meta ? meta.title : "";

        root.innerHTML = "";

        // لوحة الدرجة
        var panel = el("div", "score-panel");
        var circle = el("div", "score-circle");
        circle.appendChild(el("div", "score", result.score + " / " + result.total));
        circle.appendChild(el("div", "of", result.percent + "%"));
        panel.appendChild(circle);

        var rating = ratingFor(result.percent);
        var ratingEl = el("div", "score-rating", rating.label);
        ratingEl.style.color = rating.color;
        panel.appendChild(ratingEl);

        var stats = el("div", "score-stats");
        [
          ["إجابات صحيحة", result.correctCount],
          ["إجابات خاطئة", result.wrongCount],
          ["بلا إجابة", result.unansweredCount],
        ].forEach(function (pair) {
          var s = el("span");
          s.appendChild(document.createTextNode(pair[0] + ": "));
          s.appendChild(el("b", null, String(pair[1])));
          stats.appendChild(s);
        });
        panel.appendChild(stats);

        var actions = el("div", "result-actions");
        var retake = el("a", "btn btn-gold", "إعادة الاختبار بأسئلة جديدة");
        retake.href = "exam.html?exam=" + encodeURIComponent(examId);
        actions.appendChild(retake);
        var home = el("a", "btn btn-outline", "اختبار آخر");
        home.href = "index.html";
        actions.appendChild(home);
        panel.appendChild(actions);
        root.appendChild(panel);

        // مراجعة الأسئلة الخاطئة (نصوصها تأتي من ردّ التصحيح — بعد انتهاء الجلسة)
        if (!result.review || result.review.length === 0) {
          root.appendChild(el("div", "all-correct", "🎉 أجبت على جميع الأسئلة إجابة صحيحة — أحسنت!"));
          return;
        }

        root.appendChild(el("h2", "review-title", "الأسئلة التي أخطأت فيها (" + result.review.length + ")"));
        root.appendChild(el("p", "review-note", "لكل سؤال: إجابتك ثم الإجابة الصحيحة — راجعها قبل إعادة الاختبار."));

        result.review.forEach(function (item) {
          var card = el("div", "review-card");
          var text = el("div", "q-text", item.text);
          text.setAttribute("dir", "auto");
          card.appendChild(text);

          var yours = el("div", "review-answer yours");
          if (item.chosen === null || item.chosen === undefined) {
            yours.classList.add("skipped");
            yours.textContent = "✖ لم تُجب على هذا السؤال";
          } else {
            yours.appendChild(document.createTextNode("✖ إجابتك:"));
            var yoursText = el("b", null, item.options[item.chosen]);
            yoursText.setAttribute("dir", "auto");
            yours.appendChild(yoursText);
          }
          card.appendChild(yours);

          var correct = el("div", "review-answer correct");
          correct.appendChild(document.createTextNode("✔ الإجابة الصحيحة:"));
          var correctText = el("b", null, item.options[item.correct]);
          correctText.setAttribute("dir", "auto");
          correct.appendChild(correctText);
          card.appendChild(correct);

          root.appendChild(card);
        });
      })
      .catch(function () {
        root.innerHTML = "";
        root.appendChild(el("div", "notice error", "تعذّر عرض النتيجة — عد للصفحة الرئيسية وحاول مجدداً."));
      });
  }

  /* ================= نقطة الدخول ================= */

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "index") initIndex();
    else if (page === "exam") initExam();
    else if (page === "result") initResult();
  });
})();
