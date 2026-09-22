#!/usr/bin/env node
/**
 * migrate-questions.mjs
 * 旧形式の questions.js (choices: string[] + answer: index) を
 * 新形式 (choices:[{id,text}] + answerIds) の data/questions/*.js に変換する。
 *
 * - 正答位置が全問「a」に偏っていたバグ対策として、
 *   保存データ内でも正解位置をローテーションさせて分散する。
 * - カテゴリ別の一次情報ソースURLを付与する。
 *
 * 使い方: cd tools && npm run migrate
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// 旧 questions.js を評価(classic script互換のためグローバル代入を付与)
const src = readFileSync(join(ROOT, "questions.js"), "utf8");
const sandbox = {};
new Function("window", src.replace("const QUESTION_DATA", "window.QUESTION_DATA"))(sandbox);
const OLD = sandbox.QUESTION_DATA;
if (!Array.isArray(OLD)) throw new Error("QUESTION_DATA の読み込みに失敗");

// カテゴリ → ファイル名・ソース・タグの対応
const CAT_MAP = {
  "コーヒーの基礎知識": {
    file: "basic.js",
    source: { title: "HELLO COFFEE | コーヒーの木から一杯のカップまで", url: "https://www.starbucks.co.jp/hellocoffee/know/" },
    tags: ["基礎"]
  },
  "生産地・原産国": {
    file: "origin.js",
    source: { title: "HELLO COFFEE | コーヒーの栽培", url: "https://www.starbucks.co.jp/hellocoffee/know/grow-and-harvest/" },
    tags: ["生産地"]
  },
  "精製方法と焙煎": {
    file: "process.js",
    source: { title: "HELLO COFFEE | ローストとブレンド", url: "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/" },
    tags: ["精製", "焙煎"]
  },
  "抽出方法と鮮度": {
    file: "brewing.js",
    source: { title: "HELLO COFFEE | おいしいコーヒーのいれ方", url: "https://www.starbucks.co.jp/hellocoffee/howto/brew/" },
    tags: ["抽出"]
  },
  "テイスティング": {
    file: "tasting.js",
    source: { title: "HELLO COFFEE | コーヒー用語集", url: "https://www.starbucks.co.jp/hellocoffee/words/" },
    tags: ["テイスティング"]
  },
  "コアコーヒー": {
    file: "core-coffee.js",
    source: { title: "CORE COFFEE | スターバックス", url: "https://product.starbucks.co.jp/beans/corecoffee/" },
    tags: ["コアコーヒー"]
  },
  "スターバックスの歴史・理念": {
    file: "history.js",
    source: { title: "HELLO COFFEE | コーヒー用語集", url: "https://www.starbucks.co.jp/hellocoffee/words/" },
    tags: ["歴史"]
  }
};

const letters = "abcdefgh";
const groups = new Map();

OLD.forEach((q, qi) => {
  const meta = CAT_MAP[q.category];
  if (!meta) throw new Error(`未知のカテゴリ: ${q.category}`);
  const texts = q.choices.slice();
  // 正解の選択肢をローテーション位置に回して正答位置を分散
  const pos = qi % texts.length; // 除去前の選択肢数で剰余を取る
  const correctText = texts.splice(q.answer, 1)[0];
  texts.splice(pos, 0, correctText);

  const nq = {
    id: q.id,
    category: q.category,
    type: "single",
    question: q.question,
    choices: texts.map((t, i) => ({ id: letters[i], text: t })),
    answerIds: [letters[pos]],
    explanation: q.explanation,
    sources: [meta.source],
    difficulty: 2,
    tags: meta.tags.slice()
  };
  if (!groups.has(meta.file)) groups.set(meta.file, []);
  groups.get(meta.file).push(nq);
});

const OUT = join(ROOT, "data", "questions");
mkdirSync(OUT, { recursive: true });

const HEADER = `/* 自動生成: tools/migrate-questions.mjs による旧形式→新形式変換\n * 手編集可。変更後は cd tools && npm run validate で検証すること。 */\n(function (g) {\n"use strict";\ng.QUESTION_DATA = g.QUESTION_DATA || [];\ng.QUESTION_DATA.push(\n`;

for (const [file, qs] of groups) {
  const body = qs.map(q => "  " + JSON.stringify(q, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  writeFileSync(join(OUT, file), `${HEADER}${body}\n);\n})(typeof window !== "undefined" ? window : globalThis);\n`, "utf8");
  console.log(`${file}: ${qs.length}問`);
}
console.log(`合計 ${OLD.length}問を data/questions/ へ変換しました`);
