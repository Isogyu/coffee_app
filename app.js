/* ===== ブラックエプロン試験クイズ アプリロジック =====
 *
 * 設計原則:
 * - ビルド不要・依存なし。index.htmlをfile://で開くだけで動作
 * - classic script。ロジックは core.js (window.Core) に分離
 * - イベントはインラインonclickではなくイベント委譲(data-action)
 * - ユーザー/外部データをHTMLへ埋め込む箇所は必ず esc() を通す
 * - ハッシュルーティング(#/home #/quiz #/beans #/glossary #/timeline #/exam #/srs #/flash #/stats #/sim)
 */
(function () {
"use strict";

var RANDOM_COUNT = 10;
var EXAM_COUNT = 30;
var EXAM_PASS_RATE = 80;
var store = Core.createStore(window.localStorage);
store.migrate();

/* ---------- ユーティリティ ---------- */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/`/g, "&#96;");
}
function srcLinks(sources) {
  return (sources || []).map(function (s) {
    return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title || s.url) + '</a>';
  }).join(" / ");
}
function categories() {
  var seen = [], map = {};
  QUESTION_DATA.forEach(function (q) {
    if (!map[q.category]) { map[q.category] = 1; seen.push(q.category); }
  });
  return seen;
}
function countOf(cat) {
  return QUESTION_DATA.filter(function (q) { return q.category === cat; }).length;
}
var ROAST_NAME = { BLONDE: "ブロンド", MEDIUM: "ミディアム", DARK: "ダーク" };
var COFFEE_CAT = { CORE: "コア", SEASONAL: "シーズナル", RESERVE: "リザーブ", VIA: "ヴィア", ARCHIVE: "アーカイブ(終売)" };
function scaleLabel(scale, v) {
  var m = (window.REFERENCE_DATA && REFERENCE_DATA[scale]) || {};
  return m[v] || String(v);
}
function findCoffee(id) {
  return (window.COFFEE_DATA || []).filter(function (c) { return c.id === id; })[0];
}
function findQuestion(id) {
  return QUESTION_DATA.filter(function (q) { return q.id === id; })[0];
}

/* ---------- 状態 ---------- */
var state = {
  items: [], index: 0, score: 0, wrongs: [],
  answered: false, selected: [],
  modeLabel: "", mode: "", questionStartAt: 0,
  exam: null,
  beanFilter: "ALL",
  termQuery: "",
  flash: null // {deck:[term], index, flipped}
};

/* ---------- 画面描画 ---------- */
var screen = document.getElementById("screen");
var currentView = "home";
function render(html, view) {
  currentView = view || currentView;
  screen.innerHTML = html;
  screen.classList.remove("screen");
  void screen.offsetWidth;
  screen.classList.add("screen");
  window.scrollTo({ top: 0 });
}
function navHtml() {
  return '<nav class="subnav" aria-label="機能メニュー">' +
    '<a href="#/home">ホーム</a>' +
    '<a href="#/beans">豆図鑑</a>' +
    '<a href="#/glossary">用語集</a>' +
    '<a href="#/timeline">年表</a>' +
    '<a href="#/stats">分析</a>' +
    '<a href="#/exam">模擬試験</a>' +
  '</nav>';
}

/* ===== ホーム画面 ===== */
function showHome() {
  var wrongIds = store.wrongIds();
  var stats = store.getStats();
  var due = store.dueIds();
  var rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;

  var catButtons = categories().map(function (cat) {
    return '<a class="btn cat-btn" href="#/quiz?cat=' + encodeURIComponent(cat) + '" data-action="start-category" data-cat="' + esc(cat) + '" role="button">' +
      '<span class="cat-name">' + esc(cat) + '</span>' +
      '<span class="cat-count">' + countOf(cat) + '問</span></a>';
  }).join("");

  render(
    '<div class="card hero">' +
      '<div class="hero-count">' + QUESTION_DATA.length + '<span> 問収録</span></div>' +
      '<div class="hero-desc">4択クイズ + 解説で、試験対策を効率よく</div>' +
      '<div class="stats-row">' +
        '<div class="stat-chip"><div class="stat-num">' + stats.answered + '</div><div class="stat-label">累計回答</div></div>' +
        '<div class="stat-chip"><div class="stat-num">' + rate + '%</div><div class="stat-label">累計正解率</div></div>' +
        '<div class="stat-chip"><div class="stat-num">' + wrongIds.length + '</div><div class="stat-label">復習対象</div></div>' +
        '<div class="stat-chip"><div class="stat-num">' + due.length + '</div><div class="stat-label">SRS期限切れ</div></div>' +
      '</div>' +
    '</div>' +

    '<div class="section-label">学習モード</div>' +
    '<div class="mode-grid">' +
      '<button class="btn btn-main" data-action="start-random">' +
        '<span><span class="btn-title">ランダム ' + RANDOM_COUNT + '問</span>' +
        '<div class="btn-sub">全カテゴリからランダム出題</div></span>' +
        '<span class="btn-badge">おすすめ</span>' +
      '</button>' +
      '<button class="btn btn-main" data-action="start-all">' +
        '<span><span class="btn-title">全問チャレンジ</span>' +
        '<div class="btn-sub">全' + QUESTION_DATA.length + '問をシャッフル出題</div></span>' +
      '</button>' +
      '<button class="btn btn-main" data-action="start-review"' + (wrongIds.length === 0 ? " disabled" : "") + '>' +
        '<span><span class="btn-title">復習モード</span>' +
        '<div class="btn-sub">' + (wrongIds.length === 0
          ? "間違えた問題がここに蓄積されます(連続" + Core.REVIEW_CLEAR_STREAK + "回正解で解除)"
          : "間違えた問題を再出題") + '</div></span>' +
        (wrongIds.length > 0 ? '<span class="btn-badge alert">' + wrongIds.length + '問</span>' : "") +
      '</button>' +
      '<button class="btn btn-main" data-action="start-srs"' + (due.length === 0 ? " disabled" : "") + '>' +
        '<span><span class="btn-title">間隔反復(SRS)</span>' +
        '<div class="btn-sub">' + (due.length === 0 ? "復習タイミングの問題はありません" : "期限が来た問題を復習") + '</div></span>' +
        (due.length > 0 ? '<span class="btn-badge alert">' + due.length + '問</span>' : "") +
      '</button>' +
      '<button class="btn btn-main" data-action="start-sim">' +
        '<span><span class="btn-title">接客シミュレーション</span>' +
        '<div class="btn-sub">お客様の好みに応じた豆の提案を練習</div></span>' +
      '</button>' +
      '<a class="btn btn-main" href="#/exam">' +
        '<span><span class="btn-title">模擬試験</span>' +
        '<div class="btn-sub">' + EXAM_COUNT + '問・' + EXAM_PASS_RATE + '%以上で合格判定</div></span>' +
      '</a>' +
      '<a class="btn btn-main" href="#/flash">' +
        '<span><span class="btn-title">フラッシュカード</span>' +
        '<div class="btn-sub">用語カードで暗記トレーニング</div></span>' +
      '</a>' +
    '</div>' +

    '<div class="section-label">カテゴリ別出題</div>' +
    '<div class="cat-grid">' + catButtons + '</div>',
    "home"
  );
}

/* ===== クイズ開始 ===== */
function startQuiz(questions, modeLabel, mode, exam) {
  state.items = Core.shuffle(questions).map(function (q) {
    return Core.prepareQuestion(q);
  });
  state.index = 0; state.score = 0; state.wrongs = [];
  state.answered = false; state.selected = [];
  state.modeLabel = modeLabel; state.mode = mode || "practice";
  state.exam = exam || null;
  if (location.hash !== "#/quiz") location.hash = "#/quiz";
  showQuestion();
}

/* カテゴリを按分して模擬試験の問題を抽出 */
function buildExamQuestions() {
  var cats = categories();
  var per = Math.max(2, Math.floor(EXAM_COUNT / cats.length));
  var picked = [];
  cats.forEach(function (cat) {
    var pool = QUESTION_DATA.filter(function (q) { return q.category === cat; });
    picked = picked.concat(Core.shuffle(pool).slice(0, per));
  });
  var rest = Core.shuffle(QUESTION_DATA.filter(function (q) {
    return picked.indexOf(q) < 0;
  }));
  return picked.concat(rest).slice(0, EXAM_COUNT);
}

var ACTIONS = {
  "start-random": function () {
    startQuiz(Core.shuffle(QUESTION_DATA).slice(0, RANDOM_COUNT), "ランダム" + RANDOM_COUNT + "問", "practice");
  },
  "start-all": function () {
    startQuiz(QUESTION_DATA, "全問チャレンジ", "practice");
  },
  "start-category": function (ds) {
    startQuiz(QUESTION_DATA.filter(function (q) { return q.category === ds.cat; }), ds.cat, "practice");
  },
  "start-review": function () {
    var ids = store.wrongIds();
    var qs = QUESTION_DATA.filter(function (q) { return ids.indexOf(q.id) >= 0; });
    if (!qs.length) { showHome(); return; }
    startQuiz(qs, "復習モード", "review");
  },
  "start-srs": function () {
    var ids = store.dueIds();
    var qs = QUESTION_DATA.filter(function (q) { return ids.indexOf(q.id) >= 0; });
    if (!qs.length) { showHome(); return; }
    startQuiz(qs, "間隔反復(" + qs.length + "問)", "srs");
  },
  "start-sim": function () {
    var qs = QUESTION_DATA.filter(function (q) { return q.category === "接客・提案"; });
    startQuiz(Core.shuffle(qs).slice(0, 10), "接客シミュレーション", "sim");
  },
  "start-exam": function () {
    startQuiz(buildExamQuestions(), "模擬試験(" + EXAM_COUNT + "問)", "exam", { passRate: EXAM_PASS_RATE });
  },
  "home": function () { location.hash = "#/home"; },
  "retry": function () {
    var qs = state.items.slice();
    startQuiz(qs, state.modeLabel, state.mode, state.exam);
  },
  "review-wrong": function () {
    var qs = state.wrongs.map(function (w) { return w.question; });
    if (qs.length) startQuiz(qs, "間違えた問題", "review");
  }
};

/* ===== クイズ画面 ===== */
function showQuestion() {
  var q = state.items[state.index];
  var n = state.index + 1;
  var total = state.items.length;
  var pct = Math.round((state.index / total) * 100);
  var isMulti = q.type === "multi" || q.answerIds.length > 1;
  state.questionStartAt = Date.now();

  var choices = q.choices.map(function (c, i) {
    return '<button class="choice" data-action="' + (isMulti ? "toggle" : "pick") +
      '" data-cid="' + esc(c.id) + '" aria-label="選択肢' + (i + 1) + ' ' + esc(c.text) + '">' +
      '<span class="choice-mark">' + "ABCDEFGH"[i] + '</span>' +
      '<span>' + esc(c.text) + '</span></button>';
  }).join("");

  render(
    '<div class="quiz-meta">' +
      '<span class="quiz-count">' + esc(state.modeLabel) + ' ・ ' + n + ' / ' + total + '問</span>' +
      '<span class="quiz-cat">' + esc(q.category) + '</span>' +
    '</div>' +
    '<div class="progress" role="progressbar" aria-valuenow="' + n + '" aria-valuemax="' + total + '"><div class="progress-bar" style="width:' + pct + '%"></div></div>' +

    '<div class="card">' +
      '<div class="question-text">' + esc(q.question) +
        (isMulti ? '<div class="multi-hint">※ 複数選択(正しいものをすべて選んで決定)</div>' : "") +
      '</div>' +
      '<div class="choices" id="choices">' + choices + '</div>' +
      '<div id="judge-area" aria-live="polite"></div>' +
      '<div class="quiz-actions" id="quiz-actions" style="display:none">' +
        '<button class="btn btn-primary" data-action="next">' +
          (n === total ? "結果を見る" : "次の問題へ") +
        '</button>' +
      '</div>' +
      '<div class="quiz-actions" id="multi-actions"' + (isMulti ? "" : ' style="display:none"') + '>' +
        '<button class="btn btn-primary" data-action="confirm-multi" disabled id="multi-confirm">決定</button>' +
      '</div>' +
    '</div>' +

    '<div style="text-align:center; margin-top:14px">' +
      '<button class="text-btn" data-action="home">中断してホームへ戻る</button>' +
    '</div>',
    "quiz"
  );
}

/* ===== 回答処理 ===== */
function applyAnswer(pickedIds) {
  if (state.answered) return;
  state.answered = true;

  var q = state.items[state.index];
  var isCorrect = Core.judge(q, pickedIds);
  var pickedTexts = pickedIds.map(function (id) {
    var c = q.choices.filter(function (x) { return x.id === id; })[0];
    return c ? c.text : "";
  });
  var answerTexts = q.answerIds.map(function (id) {
    var c = q.choices.filter(function (x) { return x.id === id; })[0];
    return c ? c.text : "";
  });

  Array.prototype.forEach.call(document.querySelectorAll("#choices .choice"), function (el) {
    el.disabled = true;
    var cid = el.getAttribute("data-cid");
    if (q.answerIds.indexOf(cid) >= 0) el.classList.add("correct");
    else if (pickedIds.indexOf(cid) >= 0) el.classList.add("wrong");
    else el.classList.add("dimmed");
  });

  if (isCorrect) state.score++;
  store.bumpStats(isCorrect);
  store.recordOutcome(q.id, isCorrect);
  store.logAttempt({
    questionId: q.id, category: q.category,
    isCorrect: isCorrect, answeredAt: Date.now(),
    durationMs: Date.now() - state.questionStartAt,
    mode: state.mode
  });
  store.updateSrs(q.id, isCorrect ? 4 : 1);
  if (!isCorrect) state.wrongs.push({ question: q, picked: pickedIds, pickedTexts: pickedTexts, answerTexts: answerTexts });

  document.getElementById("judge-area").innerHTML =
    '<div class="judge ' + (isCorrect ? "ok" : "ng") + '">' + (isCorrect ? "⭕ 正解!" : "❌ 不正解") + '</div>' +
    (!isCorrect ? '<div class="review-a" style="margin-top:6px">正解: ' + esc(answerTexts.join("、")) + '</div>' : "") +
    '<div class="explanation"><div class="explanation-title">解説</div>' + esc(q.explanation) +
    (q.sources && q.sources.length ? '<div class="explanation-src">出典: ' + srcLinks(q.sources) + '</div>' : "") +
    '</div>';
  document.getElementById("quiz-actions").style.display = "block";
  var ma = document.getElementById("multi-actions");
  if (ma) ma.style.display = "none";

  var ja = document.getElementById("judge-area");
  if (ja.scrollIntoView) ja.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

ACTIONS["pick"] = function (ds) { applyAnswer([ds.cid]); };
ACTIONS["toggle"] = function (ds, el) {
  if (state.answered) return;
  var i = state.selected.indexOf(ds.cid);
  if (i >= 0) { state.selected.splice(i, 1); el.classList.remove("selected"); }
  else { state.selected.push(ds.cid); el.classList.add("selected"); }
  var btn = document.getElementById("multi-confirm");
  if (btn) btn.disabled = state.selected.length === 0;
};
ACTIONS["confirm-multi"] = function () {
  if (!state.selected.length) return;
  applyAnswer(state.selected.slice());
  state.selected = [];
};
ACTIONS["next"] = function () {
  state.index++;
  state.answered = false;
  state.selected = [];
  if (state.index < state.items.length) showQuestion();
  else showResult();
};

/* ===== 結果画面 ===== */
function showResult() {
  var total = state.items.length;
  var rate = Math.round((state.score / total) * 100);
  var isExam = state.mode === "exam" && state.exam;
  var passed = isExam && rate >= state.exam.passRate;

  if (isExam) {
    store.logExam({
      at: Date.now(), total: total, score: state.score,
      rate: rate, passed: passed
    });
  }

  var msg = isExam
    ? (passed ? "合格! ブラックエプロン相当の実力です。" : "不合格… 苦手分野を分析で確認しましょう。")
    : rate === 100 ? "パーフェクト!ブラックエプロンの知識は完璧です。" :
      rate >= 80 ? "合格ライン!あと一歩でパーフェクトです。" :
      rate >= 60 ? "良い調子です。間違えた分野を復習しましょう。" :
      "基礎から復習して、もう一度チャレンジしましょう。";

  var reviewList = state.wrongs.length === 0 ? "" :
    '<div class="section-label">間違えた問題(' + state.wrongs.length + '問)</div>' +
    '<div class="review-list">' +
      state.wrongs.map(function (w) {
        var q = w.question;
        return '<div class="review-item">' +
          '<div class="review-q">' + esc(q.question) + '</div>' +
          '<div class="review-a">正解: ' + esc(w.answerTexts.join("、")) +
            '　<span class="your-answer">あなたの回答: ' + esc(w.pickedTexts.join("、")) + '</span></div>' +
          '<div class="review-e">' + esc(q.explanation) +
            (q.sources && q.sources.length ? ' <span class="explanation-src">出典: ' + srcLinks(q.sources) + '</span>' : "") + '</div>' +
        '</div>';
      }).join("") +
    '</div>';

  render(
    '<div class="card">' +
      '<div class="result-hero">' +
        (isExam ? '<div class="exam-verdict ' + (passed ? "pass" : "fail") + '">' + (passed ? "合格" : "不合格") + '</div>' : "") +
        '<div class="result-score">' + state.score + '<small> / ' + total + '</small></div>' +
        '<div class="result-rate">正解率 ' + rate + '%' + (isExam ? '(合格ライン ' + state.exam.passRate + '%)' : "") + '</div>' +
        '<div class="result-msg">' + msg + '</div>' +
      '</div>' +
      '<div class="result-actions">' +
        (state.wrongs.length > 0 ? '<button class="btn btn-primary" data-action="review-wrong">間違えた問題を復習する</button>' : "") +
        '<button class="btn" data-action="retry" style="text-align:center">同じ問題をもう一度</button>' +
        (isExam ? '<a class="btn" href="#/exam" style="text-align:center">模擬試験メニューへ</a>' : "") +
        '<a class="btn" href="#/stats" style="text-align:center">苦手を分析する</a>' +
        '<button class="btn" data-action="home" style="text-align:center">ホームに戻る</button>' +
      '</div>' +
    '</div>' +
    reviewList,
    "result"
  );
}

/* ===== 模擬試験メニュー ===== */
function showExam() {
  var log = store.getExamLog().slice().reverse();
  var hist = log.length === 0
    ? '<div class="card"><p class="muted">まだ受験履歴がありません。</p></div>'
    : '<div class="card"><div class="section-label" style="margin-top:0">受験履歴(最新' + Math.min(log.length, 10) + '件)</div>' +
      log.slice(0, 10).map(function (e) {
        var d = new Date(e.at);
        var ds = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        return '<div class="exam-row">' +
          '<span>' + ds + '</span>' +
          '<span>' + e.score + '/' + e.total + ' (' + e.rate + '%)</span>' +
          '<span class="exam-badge ' + (e.passed ? "pass" : "fail") + '">' + (e.passed ? "合格" : "不合格") + '</span>' +
        '</div>';
      }).join("") + '</div>';

  render(navHtml() +
    '<div class="card">' +
      '<h2 class="page-title">模擬試験</h2>' +
      '<p class="muted">' + EXAM_COUNT + '問を全カテゴリから按分出題。正解率' + EXAM_PASS_RATE + '%以上で合格判定です。</p>' +
      '<button class="btn btn-primary btn-block" data-action="start-exam">模擬試験を開始</button>' +
    '</div>' + hist,
    "exam"
  );
}

/* ===== 苦手分析 ===== */
function showStats() {
  var attempts = store.getAttempts();
  var wrongMap = store.getWrongMap();
  var srs = store.getSrs();
  var byCat = {};
  attempts.forEach(function (a) {
    var cat = a.category || (findQuestion(a.questionId) || {}).category || "不明";
    var e = byCat[cat] || (byCat[cat] = { n: 0, ok: 0 });
    e.n++; if (a.isCorrect) e.ok++;
  });

  var rows = categories().map(function (cat) {
    var e = byCat[cat] || { n: 0, ok: 0 };
    var wrong = Object.keys(wrongMap).filter(function (id) {
      var q = findQuestion(id); return q && q.category === cat;
    }).length;
    var rate = e.n ? Math.round((e.ok / e.n) * 100) : null;
    return { cat: cat, n: e.n, rate: rate, wrong: wrong };
  });
  var answered = rows.filter(function (r) { return r.n > 0; });
  var weak = answered.slice().sort(function (a, b) { return a.rate - b.rate; }).slice(0, 3);

  var bars = rows.map(function (r) {
    var pct = r.rate == null ? 0 : r.rate;
    var cls = r.rate == null ? "none" : pct >= 80 ? "good" : pct >= 60 ? "mid" : "bad";
    return '<div class="stat-row">' +
      '<div class="stat-row-head"><span>' + esc(r.cat) + '</span>' +
      '<span class="muted">' + (r.rate == null ? "未回答" : r.rate + "% (" + r.n + "問)") +
        (r.wrong ? ' ・復習' + r.wrong + '問' : "") + '</span></div>' +
      '<div class="bar"><div class="bar-fill ' + cls + '" style="width:' + pct + '%"></div></div>' +
    '</div>';
  }).join("");

  var weakHtml = weak.length
    ? '<div class="card"><div class="section-label" style="margin-top:0">苦手カテゴリ TOP3</div>' +
      weak.map(function (r) {
        return '<div class="weak-row"><span>' + esc(r.cat) + '</span><span class="weak-rate">' + r.rate + '%</span>' +
          '<button class="btn btn-small" data-action="start-category" data-cat="' + esc(r.cat) + '">練習</button></div>';
      }).join("") + '</div>'
    : '<div class="card"><p class="muted">まだ回答履歴がありません。クイズに回答すると分析が表示されます。</p></div>';

  var due = store.dueIds().length;
  render(navHtml() +
    '<div class="card"><h2 class="page-title">苦手分析</h2>' +
      '<p class="muted">回答履歴 ' + attempts.length + '件 / SRS登録 ' + Object.keys(srs).length + '件 / 期限切れ ' + due + '件</p>' +
    '</div>' +
    weakHtml +
    '<div class="card"><div class="section-label" style="margin-top:0">カテゴリ別正解率</div>' + bars + '</div>',
    "stats"
  );
}

/* ===== 豆図鑑 ===== */
function showBeans() {
  var data = window.COFFEE_DATA || [];
  var f = state.beanFilter;
  var filters = ["ALL", "CORE", "SEASONAL", "RESERVE", "VIA", "ARCHIVE"];
  var pills = filters.map(function (k) {
    return '<button class="pill' + (f === k ? " on" : "") + '" data-action="bean-filter" data-filter="' + k + '">' +
      (k === "ALL" ? "すべて" : esc(COFFEE_CAT[k] || k)) + '</button>';
  }).join("");
  var list = data.filter(function (c) { return f === "ALL" || c.category === f; });

  render(navHtml() +
    '<div class="card"><h2 class="page-title">コーヒー豆図鑑</h2>' +
      '<div class="pill-row">' + pills + '</div>' +
    '</div>' +
    '<div class="bean-grid">' +
      list.map(function (c) {
        return '<a class="bean-card" href="#/beans/' + encodeURIComponent(c.id) + '">' +
          '<div class="bean-head"><span class="bean-name">' + esc(c.name) + '</span>' +
            '<span class="roast-badge roast-' + c.roastLevel + '">' + esc(ROAST_NAME[c.roastLevel] || c.roastLevel) + '</span></div>' +
          '<div class="bean-kw">' + esc(c.keywordEn || "") + '</div>' +
          '<div class="bean-kw-ja">' + esc(c.keywordJa || "") + '</div>' +
          '<div class="bean-meta">酸味 ' + esc(scaleLabel("SCALE_ACIDITY", c.acidity)) + ' / コク ' + esc(scaleLabel("SCALE_BODY", c.body)) + '</div>' +
          (c.isActive === false ? '<div class="bean-inactive">現在は販売終了</div>' : "") +
        '</a>';
      }).join("") +
    '</div>',
    "beans"
  );
}
ACTIONS["bean-filter"] = function (ds) { state.beanFilter = ds.filter; showBeans(); };

function showBeanDetail(id) {
  var c = findCoffee(id);
  if (!c) { showBeans(); return; }
  var row = function (k, v) {
    return v ? '<div class="def-row"><span class="def-k">' + k + '</span><span>' + esc(v) + '</span></div>' : "";
  };
  var rel = QUESTION_DATA.filter(function (q) {
    return (q.tags || []).indexOf(c.name) >= 0 || (q.tags || []).indexOf(c.id) >= 0;
  });
  render(navHtml() +
    '<div class="card">' +
      '<a class="text-btn" href="#/beans">← 豆図鑑に戻る</a>' +
      '<h2 class="page-title">' + esc(c.name) + '</h2>' +
      '<div class="bean-kw">' + esc(c.keywordEn || "") + '</div>' +
      '<div class="bean-kw-ja" style="font-size:1rem">' + esc(c.keywordJa || "") + '</div>' +
      (c.description ? '<p>' + esc(c.description) + '</p>' : "") +
      row("区分", COFFEE_CAT[c.category] || c.category) +
      row("ロースト", ROAST_NAME[c.roastLevel]) +
      row("酸味", scaleLabel("SCALE_ACIDITY", c.acidity)) +
      row("コク", scaleLabel("SCALE_BODY", c.body)) +
      row("生産地", (c.regions || []).join("・")) +
      row("生産国", (c.countries || []).join("・")) +
      row("精製方法", (c.processes || []).join("・")) +
      row("ブレンド", c.blendType === "SINGLE_ORIGIN" ? "シングルオリジン" : "ブレンド") +
      (c.blendComponents ? row("ブレンド構成", c.blendComponents.join("・")) : "") +
      (c.agingYears ? row("エイジング", c.agingYears + "年") : "") +
      row("ペアリングフレーバー", (c.pairingFlavors || []).join("、")) +
      (c.pairingFoods ? row("相性のよいフード", c.pairingFoods.join("、")) : "") +
      (c.packageMotif ? row("パッケージのモチーフ", c.packageMotif) : "") +
      (c.story ? '<div class="explanation"><div class="explanation-title">ストーリー</div>' + esc(c.story) + '</div>' : "") +
      (c.sourceUrl ? '<div class="explanation-src"><a href="' + esc(c.sourceUrl) + '" target="_blank" rel="noopener">公式商品ページ</a></div>' : "") +
      (rel.length ? '<div class="section-label">関連する問題(' + rel.length + '問)</div>' +
        '<button class="btn btn-main" data-action="quiz-bean" data-id="' + esc(c.id) + '"><span class="btn-title">この豆の問題を解く</span></button>' : "") +
    '</div>',
    "beans"
  );
}
ACTIONS["quiz-bean"] = function (ds) {
  var qs = QUESTION_DATA.filter(function (q) {
    return (q.tags || []).indexOf(ds.id) >= 0;
  });
  var c = findCoffee(ds.id);
  if (c) qs = qs.concat(QUESTION_DATA.filter(function (q) {
    return (q.tags || []).indexOf(c.name) >= 0 && qs.indexOf(q) < 0;
  }));
  if (qs.length) startQuiz(qs, (c ? c.name : "豆") + "の問題", "practice");
};

/* ===== 用語集 ===== */
function showGlossary() {
  var terms = window.TERMS_DATA || [];
  var q = state.termQuery;
  var list = q ? terms.filter(function (t) {
    return Core.normText(t.term + t.def).indexOf(Core.normText(q)) >= 0;
  }) : terms;
  render(navHtml() +
    '<div class="card"><h2 class="page-title">コーヒー用語集</h2>' +
      '<input id="term-search" class="text-input" type="search" placeholder="用語・意味で検索" value="' + esc(q) + '" aria-label="用語検索">' +
      '<p class="muted">' + list.length + '件</p>' +
    '</div>' +
    '<div class="term-list">' +
      list.map(function (t) {
        return '<div class="term-item">' +
          '<div class="term-name">' + esc(t.term) + '</div>' +
          '<div class="term-def">' + esc(t.def) + '</div>' +
          (t.source ? '<div class="explanation-src"><a href="' + esc(t.source.url) + '" target="_blank" rel="noopener">出典</a></div>' : "") +
        '</div>';
      }).join("") +
    '</div>',
    "glossary"
  );
  var inp = document.getElementById("term-search");
  if (inp) inp.addEventListener("input", function () {
    state.termQuery = inp.value;
    showGlossary();
    var el2 = document.getElementById("term-search");
    if (el2) { el2.focus(); el2.setSelectionRange && el2.setSelectionRange(el2.value.length, el2.value.length); }
  });
}

/* ===== 年表 ===== */
function showTimeline() {
  var tl = (window.REFERENCE_DATA && REFERENCE_DATA.TIMELINE) || [];
  render(navHtml() +
    '<div class="card"><h2 class="page-title">スターバックス年表</h2></div>' +
    '<div class="timeline">' +
      tl.map(function (t) {
        return '<div class="tl-item"><div class="tl-year">' + esc(t.year) + '</div>' +
          '<div class="tl-body">' + esc(t.event) + '</div></div>';
      }).join("") +
    '</div>',
    "timeline"
  );
}

/* ===== フラッシュカード ===== */
function startFlash() {
  var deck = Core.shuffle((window.TERMS_DATA || []).slice());
  state.flash = { deck: deck, index: 0, flipped: false };
  showFlash();
}
function showFlash() {
  var f = state.flash;
  if (!f || !f.deck.length) { location.hash = "#/home"; return; }
  var t = f.deck[f.index];
  render(navHtml() +
    '<div class="quiz-meta"><span class="quiz-count">フラッシュカード ・ ' + (f.index + 1) + ' / ' + f.deck.length + '</span></div>' +
    '<div class="progress"><div class="progress-bar" style="width:' + Math.round((f.index / f.deck.length) * 100) + '%"></div></div>' +
    '<div class="card flashcard' + (f.flipped ? " flipped" : "") + '" data-action="flip" role="button" tabindex="0" aria-label="カードをめくる">' +
      '<div class="flash-face">' + (f.flipped ? esc(t.def) : esc(t.term)) + '</div>' +
      '<div class="flash-hint">' + (f.flipped ? "意味(タップで用語に戻る)" : "用語(タップで意味を表示)") + '</div>' +
    '</div>' +
    '<div class="quiz-actions" style="display:flex;gap:8px">' +
      '<button class="btn" data-action="flash-unknown">まだ覚えてない</button>' +
      '<button class="btn btn-primary" data-action="flash-known">覚えた</button>' +
    '</div>',
    "flash"
  );
}
ACTIONS["flip"] = function () {
  if (state.flash) { state.flash.flipped = !state.flash.flipped; showFlash(); }
};
ACTIONS["flash-known"] = function () {
  var f = state.flash, t = f.deck[f.index];
  store.updateSrs("term:" + t.id, 4);
  f.index++; f.flipped = false;
  if (f.index >= f.deck.length) { location.hash = "#/home"; return; }
  showFlash();
};
ACTIONS["flash-unknown"] = function () {
  var f = state.flash, t = f.deck[f.index];
  store.updateSrs("term:" + t.id, 1);
  f.index++; f.flipped = false;
  if (f.index >= f.deck.length) { location.hash = "#/home"; return; }
  showFlash();
};

/* ===== テーマ(ダークモード) ===== */
var THEME_KEY = "blackApronQuiz.theme";
function applyTheme() {
  var t = "auto";
  try { t = localStorage.getItem(THEME_KEY) || "auto"; } catch (e) {}
  document.documentElement.setAttribute("data-theme", t);
}
function cycleTheme() {
  var cur = document.documentElement.getAttribute("data-theme") || "auto";
  var next = cur === "auto" ? "light" : cur === "light" ? "dark" : "auto";
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  applyTheme();
  route();
}
ACTIONS["theme"] = function () { cycleTheme(); };

/* ===== ルーター ===== */
function route() {
  var h = (location.hash || "#/home").replace(/^#\/?/, "");
  var path = h.split("?")[0];
  var parts = path.split("/").filter(Boolean);
  var name = parts[0] || "home";
  switch (name) {
    case "home": showHome(); break;
    case "beans":
      if (parts[1]) showBeanDetail(decodeURIComponent(parts[1]));
      else showBeans();
      break;
    case "glossary": showGlossary(); break;
    case "timeline": showTimeline(); break;
    case "stats": showStats(); break;
    case "exam": showExam(); break;
    case "flash": startFlash(); break;
    case "quiz":
      // 進行中のクイズがあればそのまま、なければホーム
      if (!state.items.length || state.index >= state.items.length) showHome();
      break;
    default: showHome();
  }
}

/* ===== イベント委譲 ===== */
screen.addEventListener("click", function (e) {
  var el = e.target.closest("[data-action]");
  if (!el || !screen.contains(el)) return;
  // カテゴリリンク等、href付き要素はデフォルト遷移を抑止してアクション実行
  if (el.tagName === "A") e.preventDefault();
  var fn = ACTIONS[el.getAttribute("data-action")];
  if (fn) fn(el.dataset, el, e);
});
document.addEventListener("click", function (e) {
  var el = e.target.closest("[data-action-global]");
  if (!el) return;
  var fn = ACTIONS[el.getAttribute("data-action-global")];
  if (fn) fn(el.dataset || {}, el, e);
});

/* ===== キーボード操作 ===== */
document.addEventListener("keydown", function (e) {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
  if (currentView === "flash" && state.flash) {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); ACTIONS["flip"](); }
    else if (e.key === "ArrowRight") { ACTIONS["flash-known"](); }
    else if (e.key === "ArrowLeft") { ACTIONS["flash-unknown"](); }
    return;
  }
  if (currentView !== "quiz" || !state.items.length || state.index >= state.items.length) return;
  var q = state.items[state.index];
  if (!q) return;
  if (/^[1-9]$/.test(e.key)) {
    var i = +e.key - 1;
    var c = q.choices[i];
    if (!c || state.answered) return;
    if (q.type === "multi" || q.answerIds.length > 1) {
      var btn = document.querySelector('#choices .choice[data-cid="' + c.id + '"]');
      if (btn) ACTIONS["toggle"]({ cid: c.id }, btn, e);
    } else {
      ACTIONS["pick"]({ cid: c.id });
    }
  } else if (e.key === "Enter") {
    if (state.answered) ACTIONS["next"]();
    else if (state.selected.length) ACTIONS["confirm-multi"]();
  }
});

window.addEventListener("hashchange", route);

/* ===== 初期表示 ===== */
applyTheme();
route();
})();
