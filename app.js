/* ===== ブラックエプロン試験クイズ アプリロジック =====
 *
 * 設計原則:
 * - ビルド不要・依存なし。index.htmlをfile://で開くだけで動作
 * - classic script。ロジックは core.js (window.Core) に分離
 * - イベントはインラインonclickではなくイベント委譲(data-action)
 * - ユーザー/外部データをHTMLへ埋め込む箇所は必ず esc() を通す
 */
(function () {
"use strict";

var RANDOM_COUNT = 10;
var store = Core.createStore(window.localStorage);
store.migrate();

/* ---------- ユーティリティ ---------- */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/`/g, "&#96;");
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

/* ---------- 状態 ---------- */
var state = {
  items: [],      // 出題用に正規化+選択肢シャッフル済み {q, choices}
  index: 0,
  score: 0,
  wrongs: [],     // {question, picked:[id,...]}
  answered: false,
  selected: [],   // 複数選択の選択中ID
  modeLabel: "",
  mode: "",
  questionStartAt: 0
};

/* ---------- 画面描画 ---------- */
var screen = document.getElementById("screen");

function render(html) {
  screen.innerHTML = html;
  screen.classList.remove("screen");
  void screen.offsetWidth; // アニメーション再トリガー
  screen.classList.add("screen");
  window.scrollTo({ top: 0 });
}

/* ===== ホーム画面 ===== */
function showHome() {
  var wrongIds = store.wrongIds();
  var stats = store.getStats();
  var rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;

  var catButtons = categories().map(function (cat) {
    return '<button class="btn cat-btn" data-action="start-category" data-cat="' + esc(cat) + '">' +
      '<span class="cat-name">' + esc(cat) + '</span>' +
      '<span class="cat-count">' + countOf(cat) + '問</span></button>';
  }).join("");

  render(
    '<div class="card hero">' +
      '<div class="hero-count">' + QUESTION_DATA.length + '<span> 問収録</span></div>' +
      '<div class="hero-desc">4択クイズ + 解説で、試験対策を効率よく</div>' +
      '<div class="stats-row">' +
        '<div class="stat-chip"><div class="stat-num">' + stats.answered + '</div><div class="stat-label">累計回答数</div></div>' +
        '<div class="stat-chip"><div class="stat-num">' + rate + '%</div><div class="stat-label">累計正解率</div></div>' +
        '<div class="stat-chip"><div class="stat-num">' + wrongIds.length + '</div><div class="stat-label">復習対象</div></div>' +
      '</div>' +
    '</div>' +

    '<div class="section-label">モード選択</div>' +
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
          ? "間違えた問題がここに蓄積されます(" + Core.REVIEW_CLEAR_STREAK + "回連続正解で解除)"
          : "間違えた問題を再出題(連続" + Core.REVIEW_CLEAR_STREAK + "回正解で解除)") + '</div></span>' +
        (wrongIds.length > 0 ? '<span class="btn-badge alert">' + wrongIds.length + '問</span>' : "") +
      '</button>' +
    '</div>' +

    '<div class="section-label">カテゴリ別出題</div>' +
    '<div class="cat-grid">' + catButtons + '</div>'
  );
}

/* ===== クイズ開始 ===== */
function startQuiz(questions, modeLabel, mode) {
  state.items = Core.shuffle(questions).map(function (q) {
    return Core.prepareQuestion(q); // 正規化+選択肢シャッフル
  });
  state.index = 0;
  state.score = 0;
  state.wrongs = [];
  state.answered = false;
  state.selected = [];
  state.modeLabel = modeLabel;
  state.mode = mode || "practice";
  showQuestion();
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
  "home": function () { showHome(); },
  "retry": function () {
    var qs = state.items.slice(); // 正規化済み問題(再prepare時に再シャッフルされる)
    startQuiz(qs, state.modeLabel, state.mode);
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
      '" data-cid="' + esc(c.id) + '" role="button" aria-label="選択肢' + (i + 1) + '">' +
      '<span class="choice-mark">' + "ABCDEFGH"[i] + '</span>' +
      '<span>' + esc(c.text) + '</span></button>';
  }).join("");

  render(
    '<div class="quiz-meta">' +
      '<span class="quiz-count">' + esc(state.modeLabel) + ' ・ ' + n + ' / ' + total + '問</span>' +
      '<span class="quiz-cat">' + esc(q.category) + '</span>' +
    '</div>' +
    '<div class="progress"><div class="progress-bar" style="width:' + pct + '%"></div></div>' +

    '<div class="card">' +
      '<div class="question-text">' + esc(q.question) +
        (isMulti ? '<div class="multi-hint">※ 複数選択(正しいものをすべて選んで決定)</div>' : "") +
      '</div>' +
      '<div class="choices" id="choices">' + choices + '</div>' +
      '<div id="judge-area"></div>' +
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
    '</div>'
  );
}

/* ===== 回答処理 ===== */
function applyAnswer(pickedIds) {
  if (state.answered) return;
  state.answered = true;

  var q = state.items[state.index];
  var isCorrect = Core.judge(q, pickedIds);
  var pickedTexts = pickedIds.map(function (id) {
    var c = q.choices.find(function (x) { return x.id === id; });
    return c ? c.text : "";
  });
  var answerTexts = q.answerIds.map(function (id) {
    var c = q.choices.find(function (x) { return x.id === id; });
    return c ? c.text : "";
  });

  // 選択肢の表示更新
  Array.prototype.forEach.call(document.querySelectorAll("#choices .choice"), function (el) {
    el.disabled = true;
    var cid = el.getAttribute("data-cid");
    if (q.answerIds.indexOf(cid) >= 0) el.classList.add("correct");
    else if (pickedIds.indexOf(cid) >= 0) el.classList.add("wrong");
    else el.classList.add("dimmed");
  });

  // 記録
  if (isCorrect) state.score++;
  store.bumpStats(isCorrect);
  store.recordOutcome(q.id, isCorrect);
  store.logAttempt({
    questionId: q.id,
    isCorrect: isCorrect,
    answeredAt: Date.now(),
    durationMs: Date.now() - state.questionStartAt,
    mode: state.mode
  });
  store.updateSrs(q.id, isCorrect ? 4 : 1);
  if (!isCorrect) state.wrongs.push({ question: q, picked: pickedIds, pickedTexts: pickedTexts, answerTexts: answerTexts });

  // 判定+解説
  var srcLinks = (q.sources || []).map(function (s) {
    return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title || s.url) + '</a>';
  }).join(" / ");
  document.getElementById("judge-area").innerHTML =
    '<div class="judge ' + (isCorrect ? "ok" : "ng") + '">' + (isCorrect ? "⭕ 正解!" : "❌ 不正解") + '</div>' +
    (!isCorrect ? '<div class="review-a" style="margin-top:6px">正解: ' + esc(answerTexts.join("、")) + '</div>' : "") +
    '<div class="explanation"><div class="explanation-title">解説</div>' + esc(q.explanation) +
    (srcLinks ? '<div class="explanation-src">出典: ' + srcLinks + '</div>' : "") +
    '</div>';
  document.getElementById("quiz-actions").style.display = "block";
  var ma = document.getElementById("multi-actions");
  if (ma) ma.style.display = "none";

  document.getElementById("judge-area").scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  var msg =
    rate === 100 ? "パーフェクト!ブラックエプロンの知識は完璧です。" :
    rate >= 80 ? "合格ライン!あと一歩でパーフェクトです。" :
    rate >= 60 ? "良い調子です。間違えた分野を復習しましょう。" :
    "基礎から復習して、もう一度チャレンジしましょう。";

  var reviewList = state.wrongs.length === 0 ? "" :
    '<div class="section-label">間違えた問題(' + state.wrongs.length + '問)</div>' +
    '<div class="review-list">' +
      state.wrongs.map(function (w) {
        var q = w.question;
        var srcLinks = (q.sources || []).map(function (s) {
          return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title || s.url) + '</a>';
        }).join(" / ");
        return '<div class="review-item">' +
          '<div class="review-q">' + esc(q.question) + '</div>' +
          '<div class="review-a">正解: ' + esc(w.answerTexts.join("、")) +
            '　<span class="your-answer">あなたの回答: ' + esc(w.pickedTexts.join("、")) + '</span></div>' +
          '<div class="review-e">' + esc(q.explanation) +
            (srcLinks ? ' <span class="explanation-src">出典: ' + srcLinks + '</span>' : "") + '</div>' +
        '</div>';
      }).join("") +
    '</div>';

  render(
    '<div class="card">' +
      '<div class="result-hero">' +
        '<div class="result-score">' + state.score + '<small> / ' + total + '</small></div>' +
        '<div class="result-rate">正解率 ' + rate + '%</div>' +
        '<div class="result-msg">' + msg + '</div>' +
      '</div>' +
      '<div class="result-actions">' +
        (state.wrongs.length > 0 ? '<button class="btn btn-primary" data-action="review-wrong">間違えた問題を復習する</button>' : "") +
        '<button class="btn" data-action="retry" style="text-align:center">同じ問題をもう一度</button>' +
        '<button class="btn" data-action="home" style="text-align:center">ホームに戻る</button>' +
      '</div>' +
    '</div>' +
    reviewList
  );
}

/* ===== イベント委譲 ===== */
screen.addEventListener("click", function (e) {
  var el = e.target.closest("[data-action]");
  if (!el || !screen.contains(el)) return;
  var fn = ACTIONS[el.getAttribute("data-action")];
  if (fn) fn(el.dataset, el, e);
});

/* ===== キーボード操作(1〜9:選択 / Enter:次へ・決定) ===== */
document.addEventListener("keydown", function (e) {
  if (!state.items.length || state.index >= state.items.length) return;
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

/* ===== 初期表示 ===== */
showHome();
})();
