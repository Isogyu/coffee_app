#!/usr/bin/env node
/**
 * generate-questions.mjs
 * COFFEE_DATA / TERMS_DATA / REFERENCE_DATA から問題を機械生成し
 * data/questions/generated-*.js に出力する。
 *
 * 使い方: cd tools && npm run generate
 *
 * 設計:
 * - 生成は決定的(固定シードの擬似乱数)→ 再実行しても差分が出ない
 * - 正答位置は生成時に分散(answerIds が a に偏らない)
 * - 誤答(ディストラクタ)は仕様のルールに従う
 * - reviewStatus:"draft" の商品は生成対象外
 * - 生成問題IDは `gen-` プレフィックス
 */
import { writeFileSync, readdirSync } from "node:fs";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ---------- データロード ---------- */
const g = globalThis;
g.QUESTION_DATA = [];
eval(readFileSync(join(ROOT, "data", "coffees.js"), "utf8"));
eval(readFileSync(join(ROOT, "data", "terms.js"), "utf8"));
eval(readFileSync(join(ROOT, "data", "reference.js"), "utf8"));
const COFFEES = g.COFFEE_DATA.filter(c => c.reviewStatus !== "draft");
const TERMS = g.TERMS_DATA;
const REF = g.REFERENCE_DATA;

/* ---------- 決定的乱数 ---------- */
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(0xBEEF);
const shuffle = a => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const pick = (a, n = 1) => shuffle(a).slice(0, n);
const sample = a => a[Math.floor(rng() * a.length)];

/* ---------- 出力ユーティリティ ---------- */
const out = []; // {file, questions:[]}
function emit(file, qs) {
  let e = out.find(o => o.file === file);
  if (!e) { e = { file, questions: [] }; out.push(e); }
  e.questions.push(...qs);
}
function mkQ(id, category, question, choices, answerIds, explanation, sources, difficulty, tags, type) {
  const letters = "abcdefgh";
  // choices: [{id,text}] — 呼び出し側で {text} 配列を渡してもよい
  const norm = choices.map((c, i) => typeof c === "string" ? { id: letters[i], text: c } : c);
  return {
    id, category, type: type || (answerIds.length > 1 ? "multi" : "single"),
    question, choices: norm, answerIds, explanation, sources, difficulty, tags
  };
}
/** テキスト選択肢を生成し正答位置をシャッフルして返す */
let answerPosCounter = 0; // 正答位置をa-dで順繰りに割り当て、分布を均等化
function buildChoices(correctTexts, wrongTexts, rngShuffle = true) {
  const correct = Array.isArray(correctTexts) ? correctTexts : [correctTexts];
  const letters = "abcdefgh";
  let ordered;
  if (rngShuffle && correct.length === 1) {
    // 単一正答: 誤答をシャッフルし、正答位置をローテーションで挿入
    const n = correct.length + wrongTexts.length;
    const wrongs = shuffle(wrongTexts);
    const pos = answerPosCounter++ % n;
    ordered = wrongs.slice(0, pos).concat([correct[0]], wrongs.slice(pos));
  } else {
    ordered = rngShuffle ? shuffle(correct.concat(wrongTexts)) : correct.concat(wrongTexts);
  }
  const choices = ordered.map((t, i) => ({ id: letters[i], text: t }));
  const answerIds = correct.map(ct => choices.find(c => c.text === ct).id);
  return { choices, answerIds };
}

/* ---------- ディストラクタ補助 ---------- */
/** 同ロースト or 同リージョンの別コーヒーを優先して誤答に */
function coffeeDistractors(c, n, pool = COFFEES) {
  const sameRoast = pool.filter(x => x.id !== c.id && x.roastLevel === c.roastLevel);
  const sameRegion = pool.filter(x => x.id !== c.id && x.roastLevel !== c.roastLevel &&
    x.regions.some(r => c.regions.includes(r)));
  const rest = pool.filter(x => x.id !== c.id && !sameRoast.includes(x) && !sameRegion.includes(x));
  return pick(sameRoast, n).concat(pick(sameRegion, n)).concat(pick(rest, n))
    .filter((v, i, a) => a.indexOf(v) === i).slice(0, n);
}
/** 5段階スケール: 正解±1を必ず含む4択 */
function scaleChoices(value, labels) {
  const must = [value];
  if (value > 1) must.push(value - 1);
  if (value < 5) must.push(value + 1);
  const others = [1, 2, 3, 4, 5].filter(v => !must.includes(v));
  const texts = pick(others, 4 - must.length).concat(must).map(v => labels[v]);
  return { correctTexts: [labels[value]], wrongTexts: texts.filter(t => t !== labels[value]) };
}
const coffeeCat = c =>
  c.category === "CORE" ? "コアコーヒー"
  : c.category === "VIA" ? "コアコーヒー"
  : "シーズナル・リザーブ";

const GENERATION_EXCLUDE = c => c.category === "VIA" || /ディカフェ/.test(c.name); // バリエーション混在防止

/* ================= 生成テンプレート ================= */
const Q = []; // {file, q}

for (const c of COFFEES) {
  if (GENERATION_EXCLUDE(c)) continue;
  const cat = coffeeCat(c);
  const file = cat === "コアコーヒー" ? "generated-core.js" : "generated-seasonal.js";
  const src = [{ title: "スターバックス公式 商品ページ", url: c.sourceUrl }];
  const nm = c.name;

  /* T1 豆→ローストレベル */
  {
    const levelNames = { BLONDE: "ブロンド ロースト", MEDIUM: "ミディアム ロースト", DARK: "ダーク ロースト" };
    const fakes = ["フレンチ ロースト", "シティ ロースト", "フルシティ ロースト", "ハイ ロースト"];
    const wrongs = ["BLONDE", "MEDIUM", "DARK"].filter(l => l !== c.roastLevel).map(l => levelNames[l]);
    wrongs.push(sample(fakes));
    const { choices, answerIds } = buildChoices(levelNames[c.roastLevel], wrongs);
    emit(file, [mkQ(`gen-roast-${c.id}`, cat, `「${nm}」のローストレベルは?`,
      choices, answerIds,
      `${nm}は${levelNames[c.roastLevel]}です。スターバックスのローストはブロンド/ミディアム/ダークの3段階で分類されます。`,
      src, 1, ["generated", "ロースト", nm])]);
  }

  /* T2 豆→酸味(5段階) */
  {
    const { correctTexts, wrongTexts } = scaleChoices(c.acidity, REF.SCALE_ACIDITY);
    const { choices, answerIds } = buildChoices(correctTexts, wrongTexts);
    emit(file, [mkQ(`gen-acidity-${c.id}`, cat, `「${nm}」の酸味の強さは次のうちどれ?`,
      choices, answerIds,
      `${nm}の酸味は ${REF.SCALE_ACIDITY[c.acidity]} です。`,
      src, 2, ["generated", "酸味", nm])]);
  }

  /* T3 豆→コク(5段階) */
  {
    const { correctTexts, wrongTexts } = scaleChoices(c.body, REF.SCALE_BODY);
    const { choices, answerIds } = buildChoices(correctTexts, wrongTexts);
    emit(file, [mkQ(`gen-body-${c.id}`, cat, `「${nm}」のコク(ボディ)は次のうちどれ?`,
      choices, answerIds,
      `${nm}のコクは ${REF.SCALE_BODY[c.body]} です。`,
      src, 2, ["generated", "コク", nm])]);
  }

  /* T4 豆→生産地(リージョン) */
  if (c.regions.length === 1 && c.regions[0] !== "マルチリージョン") {
    const wrongs = REF.REGIONS.filter(r => r !== c.regions[0]);
    const { choices, answerIds } = buildChoices(c.regions[0], wrongs);
    emit(file, [mkQ(`gen-region-${c.id}`, cat, `「${nm}」の生産地(リージョン)は?`,
      choices, answerIds,
      `${nm}は${c.regions[0]}産のコーヒーです。`,
      src, 2, ["generated", "生産地", nm])]);
  }

  /* T5 豆→生産国(複数選択。2カ国以上の場合) */
  if (c.countries.length >= 2) {
    const sameRegionCountries = REF.COUNTRIES
      .filter(x => !c.countries.includes(x.country) &&
        c.regions.includes("マルチリージョン") ||
        (c.regions.some(r => r === x.region)))
      .map(x => x.country);
    const wrongs = pick([...new Set(sameRegionCountries)], 3);
    const all = c.countries.concat(wrongs).slice(0, Math.max(4, c.countries.length + 2));
    const { choices, answerIds } = buildChoices(c.countries, all.filter(t => !c.countries.includes(t)));
    emit(file, [mkQ(`gen-countries-${c.id}`, cat, `「${nm}」に使われる生産国をすべて選んでください。`,
      choices, answerIds,
      `${nm}の生産国は ${c.countries.join("・")} です。`,
      src, 4, ["generated", "生産国", nm])]);
  }

  /* T6 豆→加工方法(単一精製法の豆のみ) */
  if (c.processes.length === 1) {
    const all = ["水洗式", "半水洗式", "乾燥式(ナチュラル)", "ハニープロセス"];
    const wrongs = all.filter(p => p !== c.processes[0]);
    const { choices, answerIds } = buildChoices(c.processes[0], wrongs);
    emit(file, [mkQ(`gen-process-${c.id}`, cat, `「${nm}」の加工方法(精製方法)は?`,
      choices, answerIds,
      `${nm}は${c.processes[0]}で精製されます。`,
      src, 2, ["generated", "加工方法", nm])]);
  }

  /* T7 豆→キーワード(日本語) */
  if (c.keywordJa) {
    const dis = coffeeDistractors(c, 6).filter(x => x.keywordJa);
    const wrongs = pick(dis, 3).map(x => x.keywordJa);
    if (wrongs.length === 3) {
      const { choices, answerIds } = buildChoices(c.keywordJa, wrongs);
      emit(file, [mkQ(`gen-kw-${c.id}`, cat, `「${nm}」の風味キーワードはどれ?`,
        choices, answerIds,
        `${nm}の風味キーワードは「${c.keywordJa}」です。`,
        src, 3, ["generated", "キーワード", nm])]);
    }
  }

  /* T8 豆→キーワード(英語) */
  if (c.keywordEn) {
    const dis = COFFEES.filter(x => x.id !== c.id && x.keywordEn && !GENERATION_EXCLUDE(x));
    const wrongs = pick(dis, 3).map(x => x.keywordEn);
    if (wrongs.length === 3) {
      const { choices, answerIds } = buildChoices(c.keywordEn, wrongs);
      emit(file, [mkQ(`gen-kwen-${c.id}`, cat, `「${nm}」の英語の風味キーワードはどれ?`,
        choices, answerIds,
        `${nm}のキーワードは "${c.keywordEn}"(${c.keywordJa})です。`,
        src, 3, ["generated", "キーワード", nm])]);
    }
  }

  /* T9 キーワード→豆(逆引き) */
  if (c.keywordJa) {
    const dis = coffeeDistractors(c, 3).map(x => x.name);
    if (dis.length === 3) {
      const { choices, answerIds } = buildChoices(nm, dis);
      emit(file, [mkQ(`gen-kwrev-${c.id}`, cat,
        `「${c.keywordJa}」という風味キーワードを持つコーヒーはどれ?`,
        choices, answerIds,
        `「${c.keywordJa}」は${nm}の風味キーワードです。`,
        src, 3, ["generated", "キーワード逆引き", nm])]);
    }
  }

  /* T10 豆→相性のよいフレーバー */
  if (c.pairingFlavors && c.pairingFlavors.length) {
    const correct = c.pairingFlavors[0];
    const otherFlavors = [...new Set(COFFEES.flatMap(x => x.pairingFlavors || []))]
      .filter(f => !c.pairingFlavors.includes(f));
    const wrongs = pick(otherFlavors, 3);
    if (wrongs.length === 3) {
      const { choices, answerIds } = buildChoices(correct, wrongs);
      emit(file, [mkQ(`gen-pair-${c.id}`, cat, `「${nm}」と相性のよいフレーバーはどれ?`,
        choices, answerIds,
        `${nm}の相性のよいフレーバー: ${c.pairingFlavors.join("、")}`,
        src, 3, ["generated", "ペアリング", nm])]);
    }
  }

  /* T11 豆→相性フード */
  if (c.pairingFoods && c.pairingFoods.length) {
    const correct = c.pairingFoods[0].name;
    const others = COFFEES.flatMap(x => (x.pairingFoods || []).map(f => f.name))
      .filter(n => n !== correct);
    const wrongs = pick(others, 3);
    if (wrongs.length === 3) {
      const { choices, answerIds } = buildChoices(correct, wrongs);
      emit(file, [mkQ(`gen-food-${c.id}`, cat, `「${nm}」と相性のよいフードはどれ?`,
        choices, answerIds,
        `${nm}は「${correct}」とのペアリングが推奨されています。`,
        src, 3, ["generated", "フードペアリング", nm])]);
    }
  }

  /* T12 豆→シングルオリジン/ブレンド */
  {
    const correct = c.blendType === "SINGLE_ORIGIN" ? "シングルオリジン" : "ブレンド";
    const wrongs = c.blendType === "SINGLE_ORIGIN"
      ? ["ブレンド", "エイジドコーヒー", "デカフェ(カフェイン除去)"]
      : ["シングルオリジン", "エイジドコーヒー", "デカフェ(カフェイン除去)"];
    const { choices, answerIds } = buildChoices(correct, wrongs);
    emit(file, [mkQ(`gen-type-${c.id}`, cat, `「${nm}」はシングルオリジン、ブレンドのどちら?`,
      choices, answerIds,
      `${nm}は${correct}です。${c.blendType === "SINGLE_ORIGIN" ? "単一の生産地のコーヒーです。" : "複数の産地の豆を組み合わせています。"}`,
      src, 1, ["generated", "ブレンド分類", nm])]);
  }

  /* T13 プロファイル→豆(ブラインド)。プロファイルが一意の場合のみ生成 */
  {
    const sig = c => `${c.roastLevel}|${c.acidity}|${c.body}|${c.regions.sort().join("+")}`;
    const unique = COFFEES.filter(x => !GENERATION_EXCLUDE(x) && sig(x) === sig(c)).length === 1;
    if (unique) {
      const profile = `ロースト:${c.roastLevel} / 酸味:${REF.SCALE_ACIDITY[c.acidity]} / コク:${REF.SCALE_BODY[c.body]} / 生産地:${c.regions.join("・")}`;
      const dis = coffeeDistractors(c, 3).map(x => x.name);
      if (dis.length === 3) {
        const { choices, answerIds } = buildChoices(nm, dis);
        emit(file, [mkQ(`gen-blind-${c.id}`, cat,
          `次の味わいプロファイルに当てはまる豆はどれ?\n${profile}`,
          choices, answerIds,
          `このプロファイルは${nm}です。キーワード: 「${c.keywordJa || "―"}」`,
          src, 4, ["generated", "blind", nm])]);
      }
    }
  }

  /* T14 豆→パッケージモチーフ */
  if (c.packageMotif) {
    const motifs = [...new Set(COFFEES.map(x => x.packageMotif).filter(Boolean))].filter(m => m !== c.packageMotif);
    const wrongs = pick(motifs, 3);
    if (wrongs.length === 3) {
      const { choices, answerIds } = buildChoices(c.packageMotif, wrongs);
      emit(file, [mkQ(`gen-motif-${c.id}`, cat, `「${nm}」のパッケージのモチーフは?`,
        choices, answerIds,
        `${nm}のパッケージモチーフは「${c.packageMotif}」です。`,
        src, 4, ["generated", "パッケージ", nm])]);
    }
  }

  /* T15 豆→誕生年/由来 */
  if (c.story && /\d{4}年/.test(c.story)) {
    const year = c.story.match(/(\d{4})年/)[1];
    const yrs = [+year - 2, +year + 2, +year + 5].map(String);
    const { choices, answerIds } = buildChoices(`${year}年`, yrs);
    emit(file, [mkQ(`gen-year-${c.id}`, cat, `「${nm}」にまつわる年として正しいものは?`,
      choices, answerIds, c.story, src, 4, ["generated", "由来", nm])]);
  }

  /* T17 誤り指摘 */
  {
    const levelNames = { BLONDE: "ブロンド ロースト", MEDIUM: "ミディアム ロースト", DARK: "ダーク ロースト" };
    const wrongRoast = levelNames[["BLONDE", "MEDIUM", "DARK"].find(l => l !== c.roastLevel)];
    const wrong = `ローストレベルは${wrongRoast}である`;
    const trues = [
      c.keywordJa ? `風味キーワードは「${c.keywordJa}」` : null,
      c.processes.length === 1 ? `加工方法は${c.processes[0]}` : null,
      c.blendType === "SINGLE_ORIGIN" ? "シングルオリジンのコーヒーである" : "ブレンドコーヒーである",
      c.countries.length ? `生産国に${c.countries[0]}を含む` : null
    ].filter(Boolean);
    if (trues.length >= 3) {
      const sel = pick(trues, 3);
      const { choices, answerIds } = buildChoices(wrong, sel);
      emit(file, [mkQ(`gen-wrong-${c.id}`, cat, `「${nm}」の説明として【誤っている】ものはどれ?`,
        choices, answerIds,
        `${nm}のローストレベルは${levelNames[c.roastLevel]}です。誤りの選択肢は焙煎度合いが違います。`,
        src, 4, ["generated", "誤り指摘", nm])]);
    }
  }
}

/* T16 接客提案(PREFERENCES) — 嗜好ごとに最大2問(正解の異なるバリアント) */
{
  const file = "generated-service.js";
  for (const p of REF.PREFERENCES) {
    const matches = pick(COFFEES.filter(c => !GENERATION_EXCLUDE(c) && p.match(c)), 2);
    const non = COFFEES.filter(c => !GENERATION_EXCLUDE(c) && !p.match(c));
    const phr = [
      `お客様:「${p.voice}」とおっしゃいました。おすすめする豆として最も適切なものは?`,
      `お客様が「${p.voice}」という好みです。提案するならどの豆が適切?`
    ];
    matches.forEach((c, vi) => {
      const wrongs = pick(non, 3).map(x => x.name);
      if (wrongs.length < 3) return;
      const { choices, answerIds } = buildChoices(c.name, wrongs);
      emit(file, [mkQ(`gen-sim-${p.id}-${vi}`, "接客・提案",
        phr[vi % phr.length],
        choices, answerIds,
        `${c.name}がおすすめです。${p.explain}(この豆: ロースト${c.roastLevel}・酸味${c.acidity}・コク${c.body})`,
        [{ title: "スターバックス公式 商品ページ", url: c.sourceUrl }],
        4, ["generated", "sim", "接客"])]);
    });
  }
}

/* ================= 参照テーブル生成 ================= */
/* 生産国→リージョン(単一・逆方向) */
{
  const file = "generated-reference.js";
  const cat = "生産地・原産国";
  const srcKnow = [{ title: "HELLO COFFEE | コーヒーの栽培", url: "https://www.starbucks.co.jp/hellocoffee/know/grow-and-harvest/" }];
  for (const x of REF.COUNTRIES) {
    if (!REF.REGIONS.includes(x.region)) continue; // ハワイ等を除外
    const wrongs = REF.REGIONS.filter(r => r !== x.region);
    const { choices, answerIds } = buildChoices(x.region, wrongs);
    emit(file, [mkQ(`gen-geo-${x.country}`, cat, `コーヒー生産国「${x.country}」が属する生産地(リージョン)は?`,
      choices, answerIds, `${x.country}は${x.region}に属します。`,
      srcKnow, 2, ["generated", "生産国"])]);
  }
  // リージョン→国(逆引き): 各国を1回ずつ正解にして重複出題を抑える
  for (const region of ["ラテンアメリカ", "アフリカ", "アジア・太平洋"]) {
    const inR = REF.COUNTRIES.filter(x => x.region === region).map(x => x.country);
    const outR = REF.COUNTRIES.filter(x => x.region !== region && REF.REGIONS.includes(x.region)).map(x => x.country);
    const phr = [
      `次のうち「${region}」の生産国はどれ?`,
      `「${region}」に属するコーヒー生産国はどれ?`,
      `「${region}」のコーヒー生産国として正しいものは?`,
      `次の選択肢の中で「${region}」の国はどれ?`
    ];
    pick(inR, Math.min(4, inR.length)).forEach((correct, i) => {
      const wrongs = pick(outR.filter(c => c !== correct), 3);
      const { choices, answerIds } = buildChoices(correct, wrongs);
      emit(file, [mkQ(`gen-georev-${region}-${i}`, cat,
        phr[i % phr.length],
        choices, answerIds, `${correct}は${region}の生産国です。`,
        srcKnow, 2, ["generated", "生産国逆引き"])]);
    });
  }
}

/* 抽出方法 */
{
  const file = "generated-reference.js";
  const cat = "抽出方法と鮮度";
  const srcBrew = [{ title: "HELLO COFFEE | おいしいコーヒーのいれ方", url: "https://www.starbucks.co.jp/hellocoffee/howto/brew/" }];
  const grinds = ["粗挽き", "中挽き", "中細挽き", "極細挽き"];
  for (const m of REF.BREWING_METHODS) {
    if (grinds.includes(m.grind)) {
      const wrongs = grinds.filter(x => x !== m.grind);
      const { choices, answerIds } = buildChoices(m.grind, wrongs);
      emit(file, [mkQ(`gen-grind-${m.id}`, cat, `「${m.name}」に適した挽き目は?`,
        choices, answerIds, `${m.name}は${m.grind}が適しています。${m.feature}`,
        srcBrew, 2, ["generated", "抽出", "挽き目"])]);
    }
    // 特徴
    const otherFeat = REF.BREWING_METHODS.filter(x => x.id !== m.id).map(x => x.feature);
    {
      const wrongs = pick(otherFeat, 3);
      const { choices, answerIds } = buildChoices(m.feature, wrongs);
      emit(file, [mkQ(`gen-brewfeat-${m.id}`, cat, `「${m.name}」の抽出による味わいの特徴は?`,
        choices, answerIds, `${m.name}: ${m.feature}`,
        srcBrew, 3, ["generated", "抽出", "特徴"])]);
    }
  }
}

/* 精製方法 */
{
  const file = "generated-reference.js";
  const cat = "精製方法と焙煎";
  const srcProc = [{ title: "HELLO COFFEE | ローストとブレンド", url: "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/" }];
  for (const p of REF.PROCESSES) {
    const others = REF.PROCESSES.filter(x => x.id !== p.id);
    {
      const wrongs = others.map(x => x.name).concat(["ハニープロセス"]);
      const { choices, answerIds } = buildChoices(p.name, pick(wrongs, 3));
      emit(file, [mkQ(`gen-procname-${p.id}`, cat, `「${p.effect}」という特徴を持つ加工法は?`,
        choices, answerIds, p.desc, srcProc, 2, ["generated", "精製"])]);
    }
    {
      const agingDistractor = "生豆のまま倉庫で3〜5年貯蔵・熟成させ、杉やスパイスを思わせる風味を加える方法";
      const wrongs = others.map(x => x.desc).concat([agingDistractor]);
      const { choices, answerIds } = buildChoices(p.desc, pick(wrongs, 3));
      emit(file, [mkQ(`gen-procdesc-${p.id}`, cat, `「${p.name}」の説明として正しいものは?`,
        choices, answerIds, p.desc, srcProc, 2, ["generated", "精製"])]);
    }
  }
  // ロースト3分類
  for (const r of REF.ROAST_LEVELS) {
    const wrongs = REF.ROAST_LEVELS.filter(x => x.id !== r.id).map(x => x.desc).concat(["煙や炭を思わせる強い風味だけが特徴"]);
    const { choices, answerIds } = buildChoices(r.desc, pick(wrongs, 3));
    emit(file, [mkQ(`gen-roastdesc-${r.id}`, cat, `スターバックスの「${r.name}」の特徴は?`,
      choices, answerIds, r.desc, srcProc, 1, ["generated", "ロースト"])]);
  }
}

/* 年表(歴史) */
{
  const file = "generated-reference.js";
  const cat = "スターバックスの歴史・理念";
  const srcHist = [{ title: "HELLO COFFEE | コーヒー用語集", url: "https://www.starbucks.co.jp/hellocoffee/words/" }];
  for (const t of REF.TIMELINE) {
    const yrs = [t.year - 3, t.year - 1, t.year + 3, t.year + 5].map(String);
    const { choices, answerIds } = buildChoices(`${t.year}年`, pick(yrs, 3));
    emit(file, [mkQ(`gen-year-${t.year}`, cat, `次の出来事があった年は?\n「${t.event.slice(0, 40)}…」`,
      choices, answerIds, `${t.year}年: ${t.event}`,
      srcHist, 3, ["generated", "年表"])]);
  }
}

/* 用語(双方向) */
{
  const file = "generated-terms.js";
  const cat = "コーヒー用語";
  const srcTerms = [{ title: "HELLO COFFEE | コーヒー用語集", url: "https://www.starbucks.co.jp/hellocoffee/words/" }];
  for (const t of TERMS) {
    const others = pick(TERMS.filter(x => x.id !== t.id), 3);
    // 用語→意味
    {
      const { choices, answerIds } = buildChoices(t.def, others.map(o => o.def));
      emit(file, [mkQ(`gen-term-${t.id}-f`, cat, `「${t.term}」の意味として正しいものは?`,
        choices, answerIds, `${t.term}: ${t.def}`,
        [t.source], 2, ["generated", "用語", t.term])]);
    }
    // 意味→用語
    {
      const { choices, answerIds } = buildChoices(t.term, others.map(o => o.term));
      emit(file, [mkQ(`gen-term-${t.id}-r`, cat, `次の説明が示す用語は?\n「${t.def}」`,
        choices, answerIds, `${t.term}: ${t.def}`,
        [t.source], 2, ["generated", "用語", t.term])]);
    }
  }
}

/* ================= 出力 ================= */
const OUT = join(ROOT, "data", "questions");
const HEADER = `/* 自動生成: tools/generate-questions.mjs (手編集しないこと)\n * 再生成: cd tools && npm run generate */\n(function (g) {\n"use strict";\ng.QUESTION_DATA = g.QUESTION_DATA || [];\ng.QUESTION_DATA.push(\n`;

let total = 0;
for (const e of out) {
  const body = e.questions.map(q => "  " + JSON.stringify(q, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  writeFileSync(join(OUT, e.file), `${HEADER}${body}\n);\n})(typeof window !== "undefined" ? window : globalThis);\n`, "utf8");
  total += e.questions.length;
  console.log(`${e.file}: ${e.questions.length}問`);
}
console.log(`生成合計: ${total}問`);
