#!/usr/bin/env node
/**
 * validate-data.mjs — 問題データの品質検証(仕様 4-3)
 *
 * 使い方: cd tools && npm run validate
 * 違反があれば非0終了。
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
eval(readFileSync(join(ROOT, "core.js"), "utf8"));
const Core = globalThis.Core;

globalThis.QUESTION_DATA = [];
const files = readdirSync(join(ROOT, "data", "questions")).filter(f => f.endsWith(".js")).sort();
for (const f of files) eval(readFileSync(join(ROOT, "data", "questions", f), "utf8"));
const ALL = globalThis.QUESTION_DATA;

const errors = [];
const warn = [];

/* 1. ID一意・形式 */
const ids = new Set();
const posDist = {};
const catCount = {};
for (const raw of ALL) {
  const q = Core.normalizeQuestion(raw);
  if (!q.id) errors.push("IDなしの問題があります");
  else if (ids.has(q.id)) errors.push(`ID重複: ${q.id}`);
  ids.add(q.id);

  catCount[q.category] = (catCount[q.category] || 0) + 1;

  if (!q.question || !q.question.trim()) errors.push(`空の問題文: ${q.id}`);
  if (!q.explanation || !q.explanation.trim()) errors.push(`空の解説: ${q.id}`);
  if (!Array.isArray(q.choices) || q.choices.length < 4)
    errors.push(`選択肢が4つ未満: ${q.id} (${q.choices ? q.choices.length : 0})`);
  else {
    const cids = q.choices.map(c => c.id);
    if (new Set(cids).size !== cids.length) errors.push(`選択肢ID重複: ${q.id}`);
    const texts = q.choices.map(c => Core.normText(c.text));
    if (new Set(texts).size !== texts.length) errors.push(`選択肢テキスト重複(正規化後): ${q.id}`);
    for (const id of q.answerIds) {
      if (!cids.includes(id)) errors.push(`answerIdsに存在しない選択肢ID: ${q.id} -> ${id}`);
      posDist[id] = (posDist[id] || 0) + 1;
    }
  }
  if (!Array.isArray(q.answerIds) || !q.answerIds.length) errors.push(`answerIdsなし: ${q.id}`);
  if (!Array.isArray(q.sources) || q.sources.length === 0) errors.push(`出典なし: ${q.id}`);
  else q.sources.forEach(s => { if (!s.url) errors.push(`出典URLなし: ${q.id}`); });
  if (q.difficulty < 1 || q.difficulty > 5) warn.push(`difficulty範囲外: ${q.id}`);
}

/* 2. 正答位置の分散(a〜d。5択以上のe以降は分布判定対象外) */
{
  const counts = ["a", "b", "c", "d"].map(k => posDist[k] || 0);
  const max = Math.max(...counts), min = Math.min(...counts);
  if (max - min > Math.max(1, ALL.length * 0.08))
    errors.push(`正答位置が偏っています: ${JSON.stringify(posDist)}`);
}

/* 3. カテゴリ最低数 */
const REQUIRED_MIN = 30;
for (const [cat, n] of Object.entries(catCount)) {
  if (n < REQUIRED_MIN) warn.push(`カテゴリ「${cat}」が${n}問(最低${REQUIRED_MIN}に未達)`);
}

/* 4. 同一問題文の重複(正規化後) */
{
  const seen = new Map();
  for (const q of ALL) {
    const key = Core.normText(q.question);
    if (seen.has(key)) warn.push(`問題文が酷似: ${q.id} と ${seen.get(key)}`);
    seen.set(key, q.id);
  }
}

/* 結果出力 */
console.log(`検証対象: ${ALL.length}問 / ファイル: ${files.join(", ")}`);
console.log(`正答位置分布: ${JSON.stringify(posDist)}`);
console.log(`カテゴリ内訳:`);
Object.entries(catCount).sort().forEach(([c, n]) => console.log(`  ${c}: ${n}問`));

if (warn.length) {
  console.log("\n警告:");
  warn.forEach(w => console.log(`  ⚠ ${w}`));
}
if (errors.length) {
  console.log("\nエラー:");
  errors.forEach(e => console.log(`  ✗ ${e}`));
  process.exit(1);
}
console.log("\n✓ すべての検証を通過しました");
