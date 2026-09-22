/* ===== ブラックエプロン試験クイズ アプリロジック ===== */

const WRONG_KEY = "blackApronQuiz.wrongIds";
const STATS_KEY = "blackApronQuiz.stats";
const RANDOM_COUNT = 10;

/* ---------- ストレージ ---------- */
function loadWrongIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(WRONG_KEY) || "[]"));
  } catch {
    return new Set();
  }
}
function saveWrongIds(set) {
  localStorage.setItem(WRONG_KEY, JSON.stringify([...set]));
}
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) || { answered: 0, correct: 0 };
  } catch {
    return { answered: 0, correct: 0 };
  }
}
function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

/* ---------- ユーティリティ ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const categories = () => [...new Set(QUESTION_DATA.map(q => q.category))];

/* ---------- 状態 ---------- */
const state = {
  questions: [],
  index: 0,
  score: 0,
  wrongs: [],   // {question, picked} このセッションで間違えたもの
  answered: false,
  modeLabel: "",
};

/* ---------- 画面描画 ---------- */
const screen = document.getElementById("screen");

function render(html) {
  screen.innerHTML = html;
  screen.classList.remove("screen");
  void screen.offsetWidth; // アニメーション再トリガー
  screen.classList.add("screen");
  window.scrollTo({ top: 0 });
}

/* ===== ホーム画面 ===== */
function showHome() {
  const wrongIds = loadWrongIds();
  const stats = loadStats();
  const rate = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;

  const catButtons = categories().map(cat => {
    const n = QUESTION_DATA.filter(q => q.category === cat).length;
    return `
      <button class="btn cat-btn" onclick="startCategory('${esc(cat)}')">
        <span class="cat-name">${esc(cat)}</span>
        <span class="cat-count">${n}問</span>
      </button>`;
  }).join("");

  render(`
    <div class="card hero">
      <div class="hero-count">${QUESTION_DATA.length}<span> 問収録</span></div>
      <div class="hero-desc">4択クイズ + 解説で、試験対策を効率よく</div>
      <div class="stats-row">
        <div class="stat-chip">
          <div class="stat-num">${stats.answered}</div>
          <div class="stat-label">累計回答数</div>
        </div>
        <div class="stat-chip">
          <div class="stat-num">${rate}%</div>
          <div class="stat-label">累計正解率</div>
        </div>
        <div class="stat-chip">
          <div class="stat-num">${wrongIds.size}</div>
          <div class="stat-label">復習対象</div>
        </div>
      </div>
    </div>

    <div class="section-label">モード選択</div>
    <div class="mode-grid">
      <button class="btn btn-main" onclick="startRandom()">
        <span>
          <span class="btn-title">ランダム ${RANDOM_COUNT}問</span>
          <div class="btn-sub">全カテゴリからランダム出題</div>
        </span>
        <span class="btn-badge">おすすめ</span>
      </button>
      <button class="btn btn-main" onclick="startAll()">
        <span>
          <span class="btn-title">全問チャレンジ</span>
          <div class="btn-sub">全${QUESTION_DATA.length}問をシャッフル出題</div>
        </span>
      </button>
      <button class="btn btn-main" onclick="startReview()" ${wrongIds.size === 0 ? "disabled" : ""}>
        <span>
          <span class="btn-title">復習モード</span>
          <div class="btn-sub">${wrongIds.size === 0 ? "間違えた問題がここに蓄積されます" : "以前間違えた問題を再出題"}</div>
        </span>
        ${wrongIds.size > 0 ? `<span class="btn-badge alert">${wrongIds.size}問</span>` : ""}
      </button>
    </div>

    <div class="section-label">カテゴリ別出題</div>
    <div class="cat-grid">${catButtons}</div>
  `);
}

/* ===== クイズ開始 ===== */
function startQuiz(questions, modeLabel) {
  state.questions = shuffle(questions);
  state.index = 0;
  state.score = 0;
  state.wrongs = [];
  state.answered = false;
  state.modeLabel = modeLabel;
  showQuestion();
}
function startRandom() {
  startQuiz(shuffle(QUESTION_DATA).slice(0, RANDOM_COUNT), `ランダム${RANDOM_COUNT}問`);
}
function startAll() {
  startQuiz(QUESTION_DATA, "全問チャレンジ");
}
function startCategory(cat) {
  startQuiz(QUESTION_DATA.filter(q => q.category === cat), cat);
}
function startReview() {
  const wrongIds = loadWrongIds();
  const qs = QUESTION_DATA.filter(q => wrongIds.has(q.id));
  if (qs.length === 0) { showHome(); return; }
  startQuiz(qs, "復習モード");
}

/* ===== クイズ画面 ===== */
function showQuestion() {
  const q = state.questions[state.index];
  const n = state.index + 1;
  const total = state.questions.length;
  const pct = Math.round(((state.index) / total) * 100);

  const choices = q.choices.map((c, i) => `
    <button class="choice" data-i="${i}" onclick="pick(${i})">
      <span class="choice-mark">${"ABCD"[i]}</span>
      <span>${esc(c)}</span>
    </button>`).join("");

  render(`
    <div class="quiz-meta">
      <span class="quiz-count">${state.modeLabel} ・ ${n} / ${total}問</span>
      <span class="quiz-cat">${esc(q.category)}</span>
    </div>
    <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>

    <div class="card">
      <div class="question-text">${esc(q.question)}</div>
      <div class="choices" id="choices">${choices}</div>
      <div id="judge-area"></div>
      <div class="quiz-actions" id="quiz-actions" style="display:none">
        <button class="btn btn-primary" onclick="nextQuestion()">
          ${n === total ? "結果を見る" : "次の問題へ"}
        </button>
      </div>
    </div>

    <div style="text-align:center; margin-top:14px">
      <button class="text-btn" onclick="showHome()">中断してホームへ戻る</button>
    </div>
  `);
}

function pick(i) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.index];
  const isCorrect = i === q.answer;

  // 選択肢の表示を更新
  document.querySelectorAll("#choices .choice").forEach((el, idx) => {
    el.disabled = true;
    if (idx === q.answer) el.classList.add("correct");
    else if (idx === i) el.classList.add("wrong");
    else el.classList.add("dimmed");
  });

  // スコア・統計・復習リストの更新
  const stats = loadStats();
  const wrongIds = loadWrongIds();
  stats.answered++;
  if (isCorrect) {
    state.score++;
    stats.correct++;
    wrongIds.delete(q.id);       // 正解できたら復習対象から外す
  } else {
    state.wrongs.push({ question: q, picked: i });
    wrongIds.add(q.id);          // 間違えたら復習対象に追加
  }
  saveStats(stats);
  saveWrongIds(wrongIds);

  // 判定と解説
  document.getElementById("judge-area").innerHTML = `
    <div class="judge ${isCorrect ? "ok" : "ng"}">${isCorrect ? "⭕ 正解!" : "❌ 不正解"}</div>
    <div class="explanation">
      <div class="explanation-title">解説</div>
      ${esc(q.explanation)}
    </div>`;
  document.getElementById("quiz-actions").style.display = "block";

  // 解説が見えるようスクロール
  document.getElementById("judge-area").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  state.index++;
  state.answered = false;
  if (state.index < state.questions.length) showQuestion();
  else showResult();
}

/* ===== 結果画面 ===== */
function showResult() {
  const total = state.questions.length;
  const rate = Math.round((state.score / total) * 100);

  let msg;
  if (rate === 100) msg = "パーフェクト!ブラックエプロンの知識は完璧です。";
  else if (rate >= 80) msg = "合格ライン!あと一歩でパーフェクトです。";
  else if (rate >= 60) msg = "良い調子です。間違えた分野を復習しましょう。";
  else msg = "基礎から復習して、もう一度チャレンジしましょう。";

  const reviewList = state.wrongs.length === 0
    ? ""
    : `
      <div class="section-label">間違えた問題(${state.wrongs.length}問)</div>
      <div class="review-list">
        ${state.wrongs.map(({ question: q, picked }) => `
          <div class="review-item">
            <div class="review-q">${esc(q.question)}</div>
            <div class="review-a">正解: ${esc(q.choices[q.answer])}　<span class="your-answer">あなたの回答: ${esc(q.choices[picked])}</span></div>
            <div class="review-e">${esc(q.explanation)}</div>
          </div>`).join("")}
      </div>`;

  render(`
    <div class="card">
      <div class="result-hero">
        <div class="result-score">${state.score}<small> / ${total}</small></div>
        <div class="result-rate">正解率 ${rate}%</div>
        <div class="result-msg">${msg}</div>
      </div>
      <div class="result-actions">
        ${state.wrongs.length > 0 ? `<button class="btn btn-primary" onclick="startReview()">間違えた問題を復習する</button>` : ""}
        <button class="btn" onclick="startQuiz(state.questions, '${esc(state.modeLabel)}')" style="text-align:center">同じ問題をもう一度</button>
        <button class="btn" onclick="showHome()" style="text-align:center">ホームに戻る</button>
      </div>
    </div>
    ${reviewList}
  `);
}

/* ===== 初期表示 ===== */
showHome();
