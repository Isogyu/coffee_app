/* 自動生成: tools/migrate-questions.mjs による旧形式→新形式変換
 * 手編集可。変更後は cd tools && npm run validate で検証すること。 */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "taste-01",
    "category": "テイスティング",
    "type": "single",
    "question": "コーヒーテイスティングの4つのステップの正しい順番は?",
    "choices": [
      {
        "id": "a",
        "text": "すする → 香りを嗅ぐ → 表現する → 味わう"
      },
      {
        "id": "b",
        "text": "香りを嗅ぐ → すする → 味わう(位置を特定) → 表現する"
      },
      {
        "id": "c",
        "text": "味わう → すする → 香りを嗅ぐ → 表現する"
      },
      {
        "id": "d",
        "text": "表現する → 味わう → すする → 香りを嗅ぐ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "Smell(嗅ぐ)→Slurp(すする)→Locate(位置を特定して味わう)→Describe(表現する)の順で行います。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-02",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングで評価する4つの要素の組み合わせは?",
    "choices": [
      {
        "id": "a",
        "text": "甘さ・苦み・塩味・うま味"
      },
      {
        "id": "b",
        "text": "色・温度・香り・量"
      },
      {
        "id": "c",
        "text": "香り・アシディティ(酸味)・ボディ・フレーバー"
      },
      {
        "id": "d",
        "text": "産地・焙煎・挽き目・価格"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "コーヒーは香り(アロマ)、酸味(アシディティ)、コク/質感(ボディ)、風味(フレーバー)の4要素で評価します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-03",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングにおける「アシディティ(酸味)」の説明として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "腐敗したときのすっぱい臭い"
      },
      {
        "id": "b",
        "text": "舌の先で感じる甘い刺激"
      },
      {
        "id": "c",
        "text": "喉の奥で感じる苦味"
      },
      {
        "id": "d",
        "text": "舌の両脇で感じる明るく爽やかな刺激・キレの良さ"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "アシディティは舌の両脇で感じる、コーヒーに活気と爽やかさを与える要素です。高品質なアフリカ産に多く、ネガティブな「酸っぱさ」とは別物です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-04",
    "category": "テイスティング",
    "type": "single",
    "question": "「ボディ」とは何を表す要素?",
    "choices": [
      {
        "id": "a",
        "text": "口に含んだときの重み・質感(ライト〜フル)"
      },
      {
        "id": "b",
        "text": "カフェインの強さ"
      },
      {
        "id": "c",
        "text": "豆の大きさ"
      },
      {
        "id": "d",
        "text": "抽出にかかった時間"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ボディは舌に感じるコーヒーの重みや質感で、ライト・ミディアム・フルと表現します。スマトラはフルボディ、エチオピアは比較的ライトボディです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-05",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングでコーヒーを「すする(スラープ)」理由は?",
    "choices": [
      {
        "id": "a",
        "text": "早く冷ますため"
      },
      {
        "id": "b",
        "text": "空気と一緒に吸い込んで霧状にし、口全体と鼻へ風味を広げるため"
      },
      {
        "id": "c",
        "text": "カフェインを効率よく摂取するため"
      },
      {
        "id": "d",
        "text": "残りの量を確認するため"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "音を立ててすすることでコーヒーが霧状になり口内全体に広がり、同時に香りが鼻へ抜けます。全ての味覚要素を一度に感じ取るための技法です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-06",
    "category": "テイスティング",
    "type": "single",
    "question": "フードペアリングで「相補的(同系統で引き立て合う)組み合わせ」はどれ?",
    "choices": [
      {
        "id": "a",
        "text": "ケニア(柑橘系)× 塩辛いチーズ"
      },
      {
        "id": "b",
        "text": "スマトラ(アーシー)× レモンゼリー"
      },
      {
        "id": "c",
        "text": "カフェベロナ(ココア系)× チョコレートブラウニー"
      },
      {
        "id": "d",
        "text": "エチオピア(フローラル)× カレー"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "ココア系の風味を持つカフェベロナとチョコレート系フードは、似た風味同士が高め合う相補的ペアリングの代表例です。対照的な組み合わせで個性を引き立てる手法もあります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  },
  {
    "id": "taste-07",
    "category": "テイスティング",
    "type": "single",
    "question": "フレーバー表現(フレーバーホイールの用語)に含まれないものはどれ?",
    "choices": [
      {
        "id": "a",
        "text": "シトラス(柑橘)"
      },
      {
        "id": "b",
        "text": "ナッツ(ナッツ系)"
      },
      {
        "id": "c",
        "text": "ハーバル(ハーブ系)"
      },
      {
        "id": "d",
        "text": "ソルティ(塩味)"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "コーヒーの風味はシトラス、ベリー、フローラル、ナッツ、ココア、スパイス、アーシー、ハーバルなどで表現します。塩味は通常のフレーバー表現に含まれません。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
