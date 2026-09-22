/**
 * data/coffees.js — コーヒー商品マスタ(COFFEE_DATA)
 *
 * スターバックス公式サイトの商品ページ掲載情報(味わいの特徴/味わい詳細)を
 * 構造化したデータ。問題自動生成・豆図鑑・比較ビューで利用。
 *
 * フィールド:
 *  id / name / category(CORE|SEASONAL|RESERVE|VIA|ARCHIVE)
 *  roastLevel(BLONDE|MEDIUM|DARK) / acidity(1-5) / body(1-5)
 *  blendType(SINGLE_ORIGIN|BLEND) / regions / countries / processes
 *  keywordJa / keywordEn / pairingFlavors / pairingFoods
 *  description / packageMotif / story / blendComponents / agingYears
 *  isActive / reviewStatus(verified|draft) / sourceUrl
 *
 * ※ 数値(酸味/コク)は公式商品ページの目盛り値。
 *   未確認の属性は reviewStatus:"draft" とし、問題生成対象から除外する。
 *   `tools/scrape-starbucks.mjs` で公式サイトから最新値を取得・更新する運用。
 */
(function (g) {
"use strict";
var P = "https://product.starbucks.co.jp/beans/";
var src = function (u) { return [{ title: "スターバックス公式 商品ページ", url: u }]; };

g.COFFEE_DATA = [
  /* ==================== CORE COFFEE ==================== */
  {
    id: "light-note-blend", name: "スターバックス® ライトノート ブレンド", category: "CORE",
    roastLevel: "BLONDE", acidity: 3, body: 2, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "ソフトでまろやかな風味", keywordEn: "MELLOW & SOFT",
    pairingFlavors: ["ミルクチョコレート", "ナッツ"],
    description: "軽やかで穏やかな味わいのブロンドローストブレンド。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "blonde-espresso-roast", name: "スターバックス® ブロンド エスプレッソ ロースト", category: "CORE",
    roastLevel: "BLONDE", acidity: 4, body: 2, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "明るくまろやかで甘みのある味わい", keywordEn: "SMOOTH & SWEET",
    pairingFlavors: ["シトラス", "キャラメル"],
    description: "浅煎りならではの明るい酸味とまろやかさを持つエスプレッソ用ブレンド。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "breakfast-blend", name: "スターバックス® ブレックファースト ブレンド", category: "CORE",
    roastLevel: "MEDIUM", acidity: 4, body: 2, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "爽やかで明るい酸味", keywordEn: "BRIGHT & TANGY",
    pairingFlavors: ["シトラス", "ブルーベリー", "チーズ"],
    description: "朝の目覚めにぴったりな、爽やかな酸味が特徴のブレンド。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "sirens-blend", name: "サイレン ブレンド", category: "CORE",
    roastLevel: "MEDIUM", acidity: 4, body: 3, blendType: "BLEND",
    regions: ["ラテンアメリカ", "アフリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "明るいシトラスの風味とフローラルな香り", keywordEn: "BRIGHT CITRUS NOTES & FLORAL AROMAS",
    pairingFlavors: ["シトラス", "フローラル"],
    description: "スターバックスのシンボル・サイレンに捧げられたブレンド。",
    packageMotif: "ロゴのサイレン(双尾の人魚)", story: "ブランドのシンボルであるサイレンに敬意を表したブレンド。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "kenya", name: "ケニア", category: "CORE",
    roastLevel: "MEDIUM", acidity: 5, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["アフリカ"], countries: ["ケニア"], processes: ["水洗式"],
    keywordJa: "グレープフルーツやベリーを思わせるジューシーな風味", keywordEn: "JUICY & COMPLEX",
    pairingFlavors: ["グレープフルーツ", "ベリー", "カラント", "レーズン", "オレンジ"],
    description: "アフリカ産を代表する、明るくジューシーな酸味が際立つシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "pike-place-roast", name: "パイクプレイス® ロースト", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "ココアやトーストしたナッツを思わせる風味", keywordEn: "SUBTLE NOTES OF COCOA AND TOASTED NUTS",
    pairingFlavors: ["チョコレート", "ナッツ", "シナモン", "オートミール"],
    description: "シアトルの1号店があるパイクプレイスマーケットに由来。毎日飲めるバランスのよさ。",
    packageMotif: null, story: "スターバックス1号店のあるシアトルのパイクプレイスマーケットにちなんで命名。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "guatemala-antigua", name: "グアテマラ アンティグア", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["ラテンアメリカ"], countries: ["グアテマラ"], processes: ["水洗式"],
    keywordJa: "ココアとソフトスパイスを思わせるエレガントな風味", keywordEn: "COCOA & SOFT SPICE",
    pairingFlavors: ["チョコレート", "ナッツ", "アップル", "キャラメル"],
    description: "火山性土壌で育つ、ココアとほのかなスパイスの風味が特徴のシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "house-blend", name: "ハウス ブレンド", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "ナッツとココアを思わせるバランスのよい風味", keywordEn: "NUTS & COCOA",
    pairingFlavors: ["ナッツ", "アップル", "ブルーベリー"],
    description: "1971年創業当時から続く、バランスのよいオリジナルブレンド。",
    packageMotif: null, story: "創業以来続くスターバックスの原点ともいえるブレンド。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "decaf-house-blend", name: "ディカフェ ハウス ブレンド", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "ナッツとココアを思わせる風味(カフェイン除去)", keywordEn: null,
    pairingFlavors: ["ナッツ", "アップル"],
    description: "ハウスブレンドのカフェインレス版。二酸化炭素抽出法等でカフェインを除去。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "colombia", name: "コロンビア", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["ラテンアメリカ"], countries: ["コロンビア"], processes: ["水洗式"],
    keywordJa: "ナッツを思わせる香ばしさと丸みのある風味", keywordEn: "NUTTY",
    pairingFlavors: ["ナッツ", "チョコレート"],
    description: "コロンビアの小規模農園で栽培される、バランスのよいシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "tokyo-roast", name: "TOKYO ロースト", category: "CORE",
    roastLevel: "MEDIUM", acidity: 3, body: 4, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: [],
    keywordJa: "リッチでなめらか、深みのある味わい", keywordEn: null,
    pairingFlavors: ["チョコレート", "ナッツ"],
    description: "日本のために開発されたオリジナルブレンド。オンラインストア限定販売。",
    packageMotif: null, story: "日本のコーヒー好きのために作られた日本オリジナルのブレンド。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "starbucks-1971-dark-roast", name: "スターバックス® 1971 ダーク ロースト", category: "CORE",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: [],
    keywordJa: "深みのある力強い風味", keywordEn: null,
    pairingFlavors: ["チョコレート", "キャラメル"],
    description: "創業年を冠した深煎りブレンド。",
    packageMotif: null, story: "スターバックスの創業年1971年を名に持つダークロースト。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "ethiopia", name: "エチオピア", category: "CORE",
    roastLevel: "MEDIUM", acidity: 4, body: 2, blendType: "SINGLE_ORIGIN",
    regions: ["アフリカ"], countries: ["エチオピア"], processes: ["水洗式"],
    keywordJa: "レモンのような明るい酸味とフローラルな香り", keywordEn: "FLORAL & CITRUS",
    pairingFlavors: ["レモン", "ベリー", "フローラル"],
    description: "コーヒー発祥の地エチオピアのシングルオリジン。明るく華やかな風味。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "sumatra", name: "スマトラ", category: "CORE",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "SINGLE_ORIGIN",
    regions: ["アジア・太平洋"], countries: ["インドネシア(スマトラ)"], processes: ["半水洗式"],
    keywordJa: "アーシーでハーバル、重厚なコク", keywordEn: "EARTHY & HERBAL",
    pairingFlavors: ["シナモン", "オートミール", "メープル", "チーズ", "バター"],
    description: "半水洗式(スマトラ式)で精製される、大地とハーブを思わせるフルボディのシングルオリジン。",
    packageMotif: "虎(スマトラ島の象徴)", story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "komodo-dragon", name: "コモド ドラゴン ブレンド®", category: "CORE",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "BLEND",
    regions: ["アジア・太平洋"], countries: ["インドネシア"], processes: ["半水洗式"],
    keywordJa: "アーシーでスパイシーな力強い風味", keywordEn: "DEEP, UNTAMED EARTHY & HERBAL",
    pairingFlavors: ["シナモン", "メープル", "スパイス"],
    description: "インドネシア産の豆をブレンドした、野性的で力強い風味のダークロースト。",
    packageMotif: "コモドドラゴン", story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "cafe-verona", name: "カフェ ベロナ®", category: "CORE",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: ["水洗式", "半水洗式"],
    keywordJa: "ダークココアとロースティな甘み", keywordEn: "DARK COCOA & ROASTY SWEET",
    pairingFlavors: ["ダークチョコレート", "ベリー"],
    description: "「愛のコーヒー」とも呼ばれる、チョコレートとの相性が抜群のダークローストブレンド。",
    packageMotif: null, story: "もともとレストラン向けに作られたブレンドで、「愛のコーヒー」として知られる。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "espresso-roast", name: "エスプレッソ ロースト", category: "CORE",
    roastLevel: "DARK", acidity: 3, body: 5, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: ["水洗式"],
    keywordJa: "リッチでキャラメルのような甘み", keywordEn: "RICH & CARAMELLY",
    pairingFlavors: ["キャラメル", "チョコレート", "スパイス"],
    description: "1975年誕生。店舗のすべてのエスプレッソドリンクのベースとなる深煎りブレンド。",
    packageMotif: null, story: "すべてのエスプレッソビバレッジのベースとなる核となるロースト。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },
  {
    id: "italian-roast", name: "イタリアン ロースト", category: "CORE",
    roastLevel: "DARK", acidity: 2, body: 4, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: [],
    keywordJa: "ロースティで甘みのある力強い風味", keywordEn: "ROASTY & SWEET",
    pairingFlavors: ["チョコレート", "グラハム", "マシュマロ"],
    description: "スターバックスで最も深い焙煎度合いのひとつ。力強く甘みのある風味。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "corecoffee/", updatedAt: "2026-09-22"
  },

  /* ==================== SEASONAL / RESERVE ==================== */
  {
    id: "christmas-blend", name: "スターバックス® クリスマス ブレンド", category: "SEASONAL",
    roastLevel: "DARK", acidity: 3, body: 5, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: ["水洗式", "半水洗式"],
    keywordJa: "スパイシーで豊かな風味", keywordEn: "RICH & SPICY",
    pairingFlavors: ["スパイス", "オレンジ", "チョコレート"],
    description: "エイジドコーヒーを含むホリデーシーズンの伝統的ブレンド。",
    packageMotif: null, story: "1984年から続くホリデーの伝統的ブレンド。エイジドスマトラを含む。",
    blendComponents: [{ country: "インドネシア(エイジド スマトラ)", process: "半水洗式・熟成" }],
    agingYears: "3〜5年", isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "autumn-blend", name: "スターバックス® オータム ブレンド", category: "SEASONAL",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: ["グアテマラ", "インドネシア", "エチオピア"], processes: ["水洗式", "半水洗式"],
    keywordJa: "キャンディードピーカンやセージを思わせる風味", keywordEn: "NOTES OF CANDIED PECAN & SAGE",
    pairingFlavors: ["ハーブ", "チーズ"],
    pairingFoods: [{ name: "ハーブソーセージ 石窯フィローネ" }],
    description: "秋の味覚との相性を考えて作られたブレンド。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "spring-season-blend", name: "スターバックス® スプリング シーズン ブレンド", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 3, body: 4, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: ["水洗式"],
    keywordJa: "ダークチェリーやスパイスを思わせる風味", keywordEn: "DARK CHERRY & SPICE",
    pairingFlavors: ["チョコレート", "チェリー", "ナッツ"],
    description: "春限定の季節ブレンド。",
    packageMotif: "桜(日本の春をイメージしたデザイン)", story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "anniversary-blend", name: "スターバックス® アニバーサリー ブレンド", category: "SEASONAL",
    roastLevel: "DARK", acidity: 2, body: 5, blendType: "BLEND",
    regions: ["アジア・太平洋"], countries: ["インドネシア"], processes: ["半水洗式"],
    keywordJa: "力強くスパイシーな風味", keywordEn: "BOLD & SPICY",
    pairingFlavors: ["スパイス", "シダー"],
    description: "スターバックスの創業記念を祝う秋季限定ブレンド。",
    packageMotif: "サイレン", story: "1996年から毎年、創業記念を祝して発売される秋のブレンド。",
    blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "tribute-blend", name: "トリビュート ブレンド", category: "ARCHIVE",
    roastLevel: "DARK", acidity: 3, body: 4, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: [],
    keywordJa: "ブラックチェリーやベーキングスパイスを思わせる風味", keywordEn: "NOTES OF BLACK CHERRY & SPICE",
    pairingFlavors: ["チェリー", "スパイス"],
    description: "2011年、創業40周年を記念して作られたブレンド。",
    packageMotif: null, story: "2011年の創業40周年を祝して誕生したブレンド。",
    blendComponents: null, agingYears: null,
    isActive: false, reviewStatus: "draft", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "aged-sumatra", name: "エイジド スマトラ", category: "SEASONAL",
    roastLevel: "DARK", acidity: 1, body: 5, blendType: "SINGLE_ORIGIN",
    regions: ["アジア・太平洋"], countries: ["インドネシア(スマトラ)"], processes: ["半水洗式", "熟成(エイジド)"],
    keywordJa: "杉やスパイスを思わせる熟成の深み", keywordEn: "CEDAR & SPICE",
    pairingFlavors: ["スパイス", "シダー"],
    description: "生豆のまま3〜5年熟成させたコーヒー。熟成により杉やスパイシー感が増す。",
    packageMotif: null, story: null, blendComponents: null, agingYears: "3〜5年",
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "sun-dried-ethiopia-sidama", name: "サンドライド エチオピア シダマ", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 4, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["アフリカ"], countries: ["エチオピア(シダマ)"], processes: ["乾燥式"],
    keywordJa: "ベリーやチョコレートを思わせる風味", keywordEn: null,
    pairingFlavors: ["ベリー", "チョコレート"],
    description: "実のまま天日乾燥させる乾燥式(ナチュラル)で精製されたエチオピア産。フルーティーさが際立つ。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "west-java-priangan", name: "ウエスト ジャバ プリアンガン", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 3, body: 4, blendType: "SINGLE_ORIGIN",
    regions: ["アジア・太平洋"], countries: ["インドネシア(西ジャワ・プリアンガン)"], processes: ["半水洗式"],
    keywordJa: "ハーバルで深みのある風味", keywordEn: null,
    pairingFlavors: ["ハーブ", "スパイス"],
    description: "西ジャワ・プリアンガン地方の小規模農家のコーヒー。",
    packageMotif: "プリアンガン地方の伝統柄", story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "bali-batukaru", name: "バリ バトゥカル", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 3, body: 4, blendType: "SINGLE_ORIGIN",
    regions: ["アジア・太平洋"], countries: ["インドネシア(バリ)"], processes: ["半水洗式"],
    keywordJa: "レモンやハーブを思わせる風味", keywordEn: null,
    pairingFlavors: ["レモン", "ハーブ"],
    description: "バリ島バトゥカル山周辺で栽培されるシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "vietnam-da-lat", name: "ベトナム ダラット", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 3, body: 4, blendType: "SINGLE_ORIGIN",
    regions: ["アジア・太平洋"], countries: ["ベトナム(ダラット)"], processes: ["水洗式"],
    keywordJa: "ココアやスパイスを思わせる風味", keywordEn: null,
    pairingFlavors: ["チョコレート", "スパイス"],
    description: "ベトナム中南部の高原都市ダラット産のシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },
  {
    id: "colombia-narino", name: "コロンビア ナリーニョ", category: "SEASONAL",
    roastLevel: "MEDIUM", acidity: 4, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["ラテンアメリカ"], countries: ["コロンビア(ナリーニョ)"], processes: ["水洗式"],
    keywordJa: "ジューシーでハーバルな風味", keywordEn: null,
    pairingFlavors: ["ベリー", "ハーブ"],
    description: "コロンビア南部ナリーニョ県の高地で栽培されるシングルオリジン。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "seasonal/", updatedAt: "2026-09-22"
  },

  /* ==================== VIA ==================== */
  {
    id: "via-colombia", name: "スターバックス ヴィア® コロンビア", category: "VIA",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "SINGLE_ORIGIN",
    regions: ["ラテンアメリカ"], countries: ["コロンビア"], processes: ["水洗式"],
    keywordJa: "ナッツのような風味(スティックタイプ)", keywordEn: null,
    pairingFlavors: ["ナッツ", "チョコレート"],
    description: "お湯を注ぐだけで楽しめるスティックタイプのコロンビア。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "via/", updatedAt: "2026-09-22"
  },
  {
    id: "via-italian-roast", name: "スターバックス ヴィア® イタリアン ロースト", category: "VIA",
    roastLevel: "DARK", acidity: 2, body: 4, blendType: "BLEND",
    regions: ["マルチリージョン"], countries: [], processes: [],
    keywordJa: "ロースティで甘みのある風味(スティックタイプ)", keywordEn: null,
    pairingFlavors: ["チョコレート"],
    description: "スティックタイプのイタリアン ロースト。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "via/", updatedAt: "2026-09-22"
  },
  {
    id: "via-pike-place", name: "スターバックス ヴィア® パイクプレイス ロースト", category: "VIA",
    roastLevel: "MEDIUM", acidity: 3, body: 3, blendType: "BLEND",
    regions: ["ラテンアメリカ"], countries: [], processes: ["水洗式"],
    keywordJa: "ココアやトーストしたナッツの風味(スティックタイプ)", keywordEn: null,
    pairingFlavors: ["チョコレート", "ナッツ"],
    description: "スティックタイプのパイクプレイス ロースト。",
    packageMotif: null, story: null, blendComponents: null, agingYears: null,
    isActive: true, reviewStatus: "verified", sourceUrl: P + "via/", updatedAt: "2026-09-22"
  }
];
})(typeof window !== "undefined" ? window : globalThis);
