#!/usr/bin/env node
/**
 * rebalance-manual.mjs — manual-*.js の正答位置を a〜d で均等化する。
 * 手書きファイルを読み込み、各問題の選択肢順を並べ替えて正答位置を
 * 順繰りに割り当て、同一形式で書き戻す(冪等)。
 *
 * 使い方: cd tools && npm run rebalance
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "data", "questions");

const HEADER = `/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)\n * 再実行: cd tools && npm run rebalance */\n(function (g) {\n"use strict";\ng.QUESTION_DATA = g.QUESTION_DATA || [];\ng.QUESTION_DATA.push(\n`;

const files = readdirSync(DIR).filter(f => /^manual-.*\.js$/.test(f)).sort();
let counter = 0;

for (const f of files) {
  globalThis.QUESTION_DATA = [];
  eval(readFileSync(join(DIR, f), "utf8"));
  const qs = globalThis.QUESTION_DATA;
  for (const q of qs) {
    if (q.type !== "single" || q.choices.length !== 4 || q.answerIds.length !== 1) continue;
    const target = counter++ % 4;
    const correctIdx = q.choices.findIndex(c => c.id === q.answerIds[0]);
    if (correctIdx === target) continue;
    // 正答の選択肢を target 位置へ移動(他の相対順は維持)
    const correct = q.choices.splice(correctIdx, 1)[0];
    q.choices.splice(target, 0, correct);
    q.choices = q.choices.map((c, i) => ({ ...c, id: "abcd"[i] }));
    q.answerIds = ["abcd"[target]];
  }
  const body = qs.map(q => "  " + JSON.stringify(q, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  writeFileSync(join(DIR, f), `${HEADER}${body}\n);\n})(typeof window !== "undefined" ? window : globalThis);\n`, "utf8");
  console.log(`${f}: ${qs.length}問 (rebalanced)`);
}
