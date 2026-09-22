/**
 * data/reference.js — 参照データ(生産国・抽出法・精製法・年表)
 *
 * 問題自動生成とアプリ内コンテンツ(年表・用語集)の両方で利用。
 * 値はスターバックス公式サイトの掲載情報に基づく。
 */
(function (g) {
"use strict";

/* 3大生産地と主な生産国(スターバックスの生産地分類) */
var REGIONS = ["ラテンアメリカ", "アフリカ", "アジア・太平洋", "マルチリージョン"];

/* 生産国 → リージョン */
var COUNTRIES = [
  { country: "ブラジル", region: "ラテンアメリカ" },
  { country: "コロンビア", region: "ラテンアメリカ" },
  { country: "グアテマラ", region: "ラテンアメリカ" },
  { country: "コスタリカ", region: "ラテンアメリカ" },
  { country: "エルサルバドル", region: "ラテンアメリカ" },
  { country: "ホンジュラス", region: "ラテンアメリカ" },
  { country: "ニカラグア", region: "ラテンアメリカ" },
  { country: "ペルー", region: "ラテンアメリカ" },
  { country: "メキシコ", region: "ラテンアメリカ" },
  { country: "パナマ", region: "ラテンアメリカ" },
  { country: "エチオピア", region: "アフリカ" },
  { country: "ケニア", region: "アフリカ" },
  { country: "ルワンダ", region: "アフリカ" },
  { country: "タンザニア", region: "アフリカ" },
  { country: "コンゴ民主共和国", region: "アフリカ" },
  { country: "インドネシア", region: "アジア・太平洋" },
  { country: "スマトラ(インドネシア)", region: "アジア・太平洋" },
  { country: "スラウェシ(インドネシア)", region: "アジア・太平洋" },
  { country: "パプアニューギニア", region: "アジア・太平洋" },
  { country: "東ティモール", region: "アジア・太平洋" },
  { country: "ベトナム", region: "アジア・太平洋" },
  { country: "中国(雲南)", region: "アジア・太平洋" },
  { country: "インド", region: "アジア・太平洋" },
  { country: "ハワイ(アメリカ)", region: "北米(3大生産地外)" }
];

/* 主な抽出方法(スターバックスのガイドに基づく標準値) */
var BREWING_METHODS = [
  {
    id: "press", name: "コーヒープレス(フレンチプレス)",
    grind: "粗挽き", time: "約4分", coffeePerWater: "10g / 180ml",
    feature: "金属フィルターのため油脂分が残り、フルボディで力強い味わいになる"
  },
  {
    id: "pourover", name: "ペーパードリップ(ポアオーバー)",
    grind: "中挽き", time: "蒸らし約30秒後に抽出",
    coffeePerWater: "10g / 180ml",
    feature: "ペーパーが油脂を吸収し、クリーンですっきりした味わいになる"
  },
  {
    id: "espresso", name: "エスプレッソ",
    grind: "極細挽き", time: "約18〜23秒",
    coffeePerWater: "ショットあたり約7g程度の極細挽き粉に高圧抽出",
    feature: "高い圧力で短時間に抽出し、濃厚なコクとクレマが生まれる"
  },
  {
    id: "coldbrew", name: "コールドブリュー(水出し)",
    grind: "粗挽き", time: "店舗では約20時間低温でじっくり抽出",
    coffeePerWater: "やや多めの粉を冷水に長時間浸す",
    feature: "熱を加えないため酸味・苦みが穏やかでまろやかな味わい"
  },
  {
    id: "origami", name: "スターバックス オリガミ®(ドリップバッグ)",
    grind: "中挽き(商品内蔵)", time: "お湯を数回に分けて注ぐ",
    coffeePerWater: "1袋 / 約140ml",
    feature: "折り紙に由来する持ち運べるドリップ器具。器具不要で本格ドリップ"
  },
  {
    id: "via", name: "スターバックス ヴィア®(スティック)",
    grind: "極細(粉末)", time: "お湯を注ぐだけ(数秒)",
    coffeePerWater: "1本 / 約180ml",
    feature: "独自の微細挽き技術で、お湯を注ぐだけでドリップに近い味わい"
  },
  {
    id: "chemex", name: "ケメックス",
    grind: "中挽き〜中粗挽き", time: "約4分",
    coffeePerWater: "専用厚めフィルター使用",
    feature: "厚いフィルターでよりクリーンな味わいになるポアオーバー器具"
  },
  {
    id: "siphon", name: "サイフォン",
    grind: "中細挽き", time: "加熱後約1分",
    coffeePerWater: "10g / 180ml程度",
    feature: "真空原理で抽出。香りを引き立てる演出性の高い抽出法"
  }
];

/* 精製(加工)方法 */
var PROCESSES = [
  {
    id: "washed", name: "水洗式(ウォッシュド)",
    desc: "果肉を除去後、水で発酵・洗浄してから乾燥させる方法。クリーンで明るい酸味が際立つ。ラテンアメリカやケニアなどで主流。",
    effect: "明るい酸味・クリーンな味わい"
  },
  {
    id: "semiwashed", name: "半水洗式(セミウォッシュド/スマトラ式)",
    desc: "ミューシレージが残った状態で乾燥させる方法。スマトラなどインドネシアで主流。アーシーで重厚なボディ、穏やかな酸味になる。",
    effect: "アーシー・フルボディ・穏やかな酸味"
  },
  {
    id: "natural", name: "乾燥式(ナチュラル/非水洗式)",
    desc: "コーヒーチェリーを実のまま天日乾燥させる最も古い方法。果肉の甘みが豆に移り、ベリーのようなフルーティーさが生まれやすい。",
    effect: "ベリー系のフルーティーさ・凝縮した甘み"
  }
];

/* 焙煎度合い(スターバックスの3分類) */
var ROAST_LEVELS = [
  { id: "BLONDE", name: "ブロンド ロースト", desc: "焙煎時間が短く、軽めのコクと穏やかな風味" },
  { id: "MEDIUM", name: "ミディアム ロースト", desc: "バランスのとれた、まろやかさと豊かな風味" },
  { id: "DARK", name: "ダーク ロースト", desc: "しっかりとしたコクと、深みのある力強い風味" }
];

/* 5段階スケール表示名 */
var SCALE_ACIDITY = { 1: "LOW(低い)", 2: "MEDIUM-LOW(やや低い)", 3: "MEDIUM(中程度)", 4: "MEDIUM-HIGH(やや高い)", 5: "HIGH(高い)" };
var SCALE_BODY = { 1: "LIGHT(軽い)", 2: "MEDIUM-LIGHT(やや軽い)", 3: "MEDIUM(中程度)", 4: "MEDIUM-FULL(やや重い)", 5: "FULL(重い)" };

/* 年表(スターバックスの歴史・エシカル調達のマイルストーン) */
var TIMELINE = [
  { year: 1971, event: "スターバックス1号店がシアトルのパイクプレイスマーケットにオープン。創業時はコーヒー豆・ティー・スパイスの販売店" },
  { year: 1982, event: "ハワード・シュルツがマーケティング部門として入社" },
  { year: 1983, event: "シュルツがミラノ出張でエスプレッソバー文化に感銘を受ける" },
  { year: 1984, event: "1号店内にエスプレッソバーを設営し、最初のスターバックス ラテを提供" },
  { year: 1987, event: "シュルツがスターバックスを買収。店舗展開を本格化" },
  { year: 1996, event: "日本1号店が東京・銀座にオープン。北米以外では初の進出国" },
  { year: 2004, event: "C.A.F.E.プラクティスを開始。最初のファーマーサポートセンターをコスタリカ・サンホセに設立" },
  { year: 2011, event: "創業40周年。トリビュート ブレンド発売、ロゴをリニューアル" },
  { year: 2013, event: "コスタリカのコーヒー農園「ハシエンダ アルサシア」を買収" },
  { year: 2019, event: "スターバックス リザーブ® ロースタリー 東京が中目黒にオープン" }
];

/* T16 接客提案: お客様の嗜好 → 属性条件 */
var PREFERENCES = [
  { id: "low-acid-full", voice: "酸味が少なく、しっかりしたコク(重厚な味わい)が好き",
    match: function (c) { return c.acidity <= 2 && c.body >= 4; },
    explain: "酸味が低くコクの重い豆が適しています" },
  { id: "high-acid", voice: "ジューシーで明るい酸味が楽しめる豆が好き",
    match: function (c) { return c.acidity >= 4; },
    explain: "酸味の高いアフリカ産などが適しています" },
  { id: "light-mild", voice: "軽やかで飲みやすい、穏やかなコーヒーが好き",
    match: function (c) { return c.roastLevel === "BLONDE" || (c.body <= 2 && c.acidity <= 3); },
    explain: "ブロンドローストやライトボディの豆が適しています" },
  { id: "balanced", voice: "クセがなくバランスのよい、毎日飲めるコーヒーが好き",
    match: function (c) { return c.roastLevel === "MEDIUM" && c.acidity === 3 && c.body === 3; },
    explain: "ミディアムローストで酸味・コクとも中程度のバランス型が適しています" },
  { id: "dark-bold", voice: "深煎りの力強い、苦味の効いたコーヒーが好き",
    match: function (c) { return c.roastLevel === "DARK" && c.body >= 4; },
    explain: "ダークローストでフルボディの豆が適しています" }
];

g.REFERENCE_DATA = {
  REGIONS: REGIONS,
  COUNTRIES: COUNTRIES,
  BREWING_METHODS: BREWING_METHODS,
  PROCESSES: PROCESSES,
  ROAST_LEVELS: ROAST_LEVELS,
  SCALE_ACIDITY: SCALE_ACIDITY,
  SCALE_BODY: SCALE_BODY,
  TIMELINE: TIMELINE,
  PREFERENCES: PREFERENCES
};
})(typeof window !== "undefined" ? window : globalThis);
