/* core.js の単体テスト(採点/シャッフル/SRS/ストレージ移行/正規化) */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

// core.js をロード(IIFEがglobalThis.Coreへ代入)
eval(readFileSync(join(ROOT, "core.js"), "utf8"));
const Core = globalThis.Core;

// 全問題データをロード(data/questions/*.js が QUESTION_DATA に push)
globalThis.QUESTION_DATA = [];
for (const f of readdirSync(join(ROOT, "data", "questions")).sort()) {
  eval(readFileSync(join(ROOT, "data", "questions", f), "utf8"));
}
const ALL = globalThis.QUESTION_DATA;

/* ---------- 問題形式の正規化 ---------- */
test("旧形式(string[]+answer)が新形式へ正規化される", () => {
  const q = Core.normalizeQuestion({
    id: "t1", category: "c", question: "q",
    choices: ["x", "y", "z", "w"], answer: 2, explanation: "e"
  });
  assert.equal(q.answerIds[0], "c");
  assert.equal(q.choices[2].text, "z");
  assert.equal(q.type, "single");
});

test("新形式はそのまま通る / 複数正解はmultiになる", () => {
  const q = Core.normalizeQuestion({
    id: "t2", category: "c", question: "q",
    choices: [{ id: "a", text: "1" }, { id: "b", text: "2" }, { id: "c", text: "3" }],
    answerIds: ["a", "c"], explanation: "e"
  });
  assert.equal(q.type, "multi");
});

/* ---------- 採点 ---------- */
test("単一選択の採点", () => {
  const q = { answerIds: ["b"] };
  assert.equal(Core.judge(q, ["b"]), true);
  assert.equal(Core.judge(q, ["a"]), false);
  assert.equal(Core.judge(q, []), false);
});

test("複数選択は集合一致でのみ正解(部分一致は不正解)", () => {
  const q = { answerIds: ["a", "c"] };
  assert.equal(Core.judge(q, ["a", "c"]), true);
  assert.equal(Core.judge(q, ["c", "a"]), true);   // 順不同
  assert.equal(Core.judge(q, ["a"]), false);        // 過少
  assert.equal(Core.judge(q, ["a", "c", "d"]), false); // 過剰
});

/* ---------- シャッフル ---------- */
test("選択肢シャッフル後も正誤判定が正しい", () => {
  const raw = {
    id: "s1", category: "c", question: "q",
    choices: [{ id: "a", text: "正解" }, { id: "b", text: "x" }, { id: "c", text: "y" }, { id: "d", text: "z" }],
    answerIds: ["a"], explanation: "e"
  };
  // 100回シャッフルしても answerIds に対応するテキストが常に「正解」
  for (let i = 0; i < 100; i++) {
    const p = Core.prepareQuestion(raw);
    const correctChoice = p.choices.find(c => p.answerIds.includes(c.id));
    assert.equal(correctChoice.text, "正解");
    assert.equal(Core.judge(p, [correctChoice.id]), true);
  }
});

test("シャッフルは元配列を破壊しない・要素を保持する", () => {
  const arr = [1, 2, 3, 4, 5];
  const s = Core.shuffle(arr);
  assert.deepEqual(arr, [1, 2, 3, 4, 5]);
  assert.deepEqual(s.slice().sort(), arr);
});

/* ---------- SM-2 ---------- */
test("SRS: 正解で間隔が伸び、不正解でリセットされる", () => {
  const now = 1000000;
  let c = Core.sm2Next(null, 4, now);
  assert.equal(c.repetitions, 1);
  assert.equal(c.intervalDays, 1);
  c = Core.sm2Next(c, 4, now);
  assert.equal(c.intervalDays, 6);
  const before = c.intervalDays;
  c = Core.sm2Next(c, 4, now);
  assert.ok(c.intervalDays > before);
  const ef = c.easeFactor;
  c = Core.sm2Next(c, 1, now); // 不正解
  assert.equal(c.repetitions, 0);
  assert.ok(c.intervalDays < 1);
  assert.equal(c.lapses, 1);
  assert.ok(c.easeFactor <= ef);
});

test("SRS: easeFactorの下限は1.3", () => {
  let c = null;
  for (let i = 0; i < 10; i++) c = Core.sm2Next(c, 0, 0);
  assert.ok(c.easeFactor >= 1.3);
});

/* ---------- ストレージ/マイグレーション ---------- */
function memBackend(init = {}) {
  const m = new Map(Object.entries(init));
  return {
    getItem: k => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    _m: m
  };
}

test("v1のwrongIds配列をv2へ無損失マイグレーション", () => {
  const b = memBackend({ "blackApronQuiz.wrongIds": JSON.stringify(["q1", "q2"]) });
  const s = Core.createStore(b);
  s.migrate();
  assert.deepEqual(s.wrongIds().sort(), ["q1", "q2"]);
  assert.equal(JSON.parse(b._m.get("blackApronQuiz.schemaVersion")), 2);
});

test("復習解除は3回連続正解が必要(途中の不正解でストリークリセット)", () => {
  const s = Core.createStore(memBackend());
  s.migrate();
  s.recordOutcome("q1", false);
  assert.deepEqual(s.wrongIds(), ["q1"]);
  s.recordOutcome("q1", true); // streak 1
  s.recordOutcome("q1", true); // streak 2
  assert.deepEqual(s.wrongIds(), ["q1"]); // まだ残る
  s.recordOutcome("q1", false); // リセット
  s.recordOutcome("q1", true);
  s.recordOutcome("q1", true);
  assert.deepEqual(s.wrongIds(), ["q1"]);
  s.recordOutcome("q1", true); // streak 3 → 解除
  assert.deepEqual(s.wrongIds(), []);
});

test("attemptsは直近3000件でローテーション", () => {
  const s = Core.createStore(memBackend());
  s.migrate();
  for (let i = 0; i < 3100; i++) s.logAttempt({ questionId: "q", isCorrect: true, answeredAt: i, durationMs: 1, mode: "x" });
  assert.equal(s.getAttempts().length, 3000);
  assert.equal(s.getAttempts()[2999].answeredAt, 3099);
});

test("SRS dueIds: dueAt<=now のみ抽出", () => {
  const s = Core.createStore(memBackend());
  s.migrate();
  s.updateSrs("a", 4, 0);   // dueAt = 1日後
  s.updateSrs("b", 1, 0);   // dueAt = ~30分後
  assert.deepEqual(s.dueIds(3600000), ["b"]); // 1時間後
});

/* ---------- データ回帰テスト ---------- */
test("全問題: 正答位置が均等に分散(answer:0偏重の回帰防止)", () => {
  const dist = {};
  for (const q of ALL) {
    const nq = Core.normalizeQuestion(q);
    nq.answerIds.forEach(id => dist[id] = (dist[id] || 0) + 1);
  }
  // a〜dのみ比較(5択以上のe以降は分布判定対象外)
  const counts = ["a", "b", "c", "d"].map(k => dist[k] || 0);
  const max = Math.max(...counts), min = Math.min(...counts);
  // 各位置の差が全体の10%以内
  assert.ok(max - min <= Math.max(1, ALL.length * 0.1),
    `正答位置が偏っています: ${JSON.stringify(dist)}`);
});

test("全問題: 一意ID・4択以上・選択肢重複なし・answerIdsが有効", () => {
  const ids = new Set();
  for (const q of ALL) {
    const nq = Core.normalizeQuestion(q);
    assert.ok(nq.id && !ids.has(nq.id), `ID重複/欠落: ${nq.id}`);
    ids.add(nq.id);
    assert.ok(nq.question && nq.explanation, `空の問題文/解説: ${nq.id}`);
    assert.ok(nq.choices.length >= 4, `選択肢不足: ${nq.id}`);
    const cids = nq.choices.map(c => c.id);
    assert.equal(new Set(cids).size, cids.length, `選択肢ID重複: ${nq.id}`);
    const texts = nq.choices.map(c => c.text);
    assert.equal(new Set(texts).size, texts.length, `選択肢テキスト重複: ${nq.id}`);
    nq.answerIds.forEach(id => assert.ok(cids.includes(id), `answerIdが不正: ${nq.id}`));
  }
});

test("normText: 表記ゆれ(®・中黒・全半角)を吸収", () => {
  assert.equal(Core.normText("カフェ ベロナ®"), Core.normText("カフェベロナ"));
  assert.equal(Core.normText("カフェ・ベロナ"), Core.normText("カフェベロナ"));
});

/* ---------- バックアップ(エクスポート/インポート) ---------- */
test("exportData: 全キーをJSON化して含む / importDataで往復復元できる", () => {
  const src = memBackend({
    "blackApronQuiz.stats": JSON.stringify({ answered: 42, correct: 30 }),
    "blackApronQuiz.wrongIds": JSON.stringify({ q1: { misses: 2, streak: 0 } }),
    "blackApronQuiz.srs": JSON.stringify({ q1: { dueAt: 1 } }),
    "blackApronQuiz.theme": JSON.stringify("dark")
  });
  const backup = Core.exportData(src);
  assert.equal(backup.app, "blackApronQuiz");
  assert.equal(backup.schemaVersion, Core.SCHEMA_VERSION);
  assert.deepEqual(backup.data["blackApronQuiz.stats"], { answered: 42, correct: 30 });
  assert.deepEqual(backup.data["blackApronQuiz.wrongIds"], { q1: { misses: 2, streak: 0 } });
  assert.equal(backup.data["blackApronQuiz.theme"], "dark");

  // 空のバックエンドへ復元 → 全データが一致
  const dst = memBackend();
  assert.equal(Core.importData(dst, backup), null);
  const s = Core.createStore(dst);
  assert.deepEqual(s.getStats(), { answered: 42, correct: 30 });
  assert.deepEqual(s.getWrongMap(), { q1: { misses: 2, streak: 0 } });
});

test("validateBackup: 壊れた・別アプリのファイルを拒否", () => {
  assert.ok(Core.validateBackup(null));
  assert.ok(Core.validateBackup("text"));
  assert.ok(Core.validateBackup({ app: "otherApp", data: {} }));
  assert.ok(Core.validateBackup({ app: "blackApronQuiz" }));                 // dataなし
  assert.ok(Core.validateBackup({ app: "blackApronQuiz", data: [] }));       // data配列
  assert.ok(Core.validateBackup({ app: "blackApronQuiz", data: {
    "blackApronQuiz.stats": { answered: "x" }                                // 型不正
  }}));
  assert.ok(Core.validateBackup({ app: "blackApronQuiz", data: {
    "blackApronQuiz.attempts": "not-array"
  }}));
  // 正常系
  assert.equal(Core.validateBackup(Core.exportData(memBackend())), null);
});

test("importData: 不正ファイルは書き込まない(既存データ保護)", () => {
  const dst = memBackend({
    "blackApronQuiz.stats": JSON.stringify({ answered: 5, correct: 5 })
  });
  const err = Core.importData(dst, { app: "evil", data: {} });
  assert.ok(err);
  const s = Core.createStore(dst);
  assert.deepEqual(s.getStats(), { answered: 5, correct: 5 }); // 無傷
});
