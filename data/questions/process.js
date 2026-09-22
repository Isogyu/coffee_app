/* 自動生成: tools/migrate-questions.mjs による旧形式→新形式変換
 * 手編集可。変更後は cd tools && npm run validate で検証すること。 */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "process-01",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "水洗式(ウォッシュド)の精製方法で得られる風味の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "ベリーのような甘さとフルーティーさが強調される"
      },
      {
        "id": "b",
        "text": "アーシーで野性的な風味になる"
      },
      {
        "id": "c",
        "text": "発酵臭が強く癖のある味になる"
      },
      {
        "id": "d",
        "text": "クリーンで明るい酸味が引き立つ"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "水洗式は果肉を除去し、発酵・水洗してから乾燥させる方法。雑味が少なくクリーンで明るい酸味が際立ちます。ラテンアメリカやケニアで主流です。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-02",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "乾燥式(ナチュラル/非水洗式)の精製方法の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "果肉が付いたまま乾燥させるためフルーティーな風味が出やすい"
      },
      {
        "id": "b",
        "text": "水で何度も洗うためクリーンな味になる"
      },
      {
        "id": "c",
        "text": "発酵を完全に抑えるため酸味が消える"
      },
      {
        "id": "d",
        "text": "生産地では行われず消費国で行われる工程"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "乾燥式は収穫したコーヒーチェリーを実のまま天日乾燥させる最も古い方法。果肉の甘みが豆に移り、ベリーのようなフルーティーさが生まれやすいのが特徴です。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-03",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "半水洗式(セミウォッシュド/スマトラ式)で精製されることが多い産地は?",
    "choices": [
      {
        "id": "a",
        "text": "ケニア"
      },
      {
        "id": "b",
        "text": "スマトラ"
      },
      {
        "id": "c",
        "text": "コロンビア"
      },
      {
        "id": "d",
        "text": "コスタリカ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "スマトラでは湿度が高い気候に適した半水洗式(スマトラ式)が主流です。ミューシレージが残った状態で乾燥させるため、独特のアーシーで重厚な風味が生まれます。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-04",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "スターバックスの焙煎度合い(ロースト)の3つの分類は?",
    "choices": [
      {
        "id": "a",
        "text": "ライト / シナモン / フレンチ"
      },
      {
        "id": "b",
        "text": "弱煎り / 中煎り / 極深煎り"
      },
      {
        "id": "c",
        "text": "ブロンド / ミディアム / ダーク"
      },
      {
        "id": "d",
        "text": "ソフト / ハイ / フルシティ"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "スターバックスでは焙煎度合いをブロンド(軽やか)、ミディアム(バランス)、ダーク(濃厚)の3つに分類しています。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-05",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎度合いが深くなるほど、コーヒーの風味はどう変化する?",
    "choices": [
      {
        "id": "a",
        "text": "酸味が強くなり、ボディが軽くなる"
      },
      {
        "id": "b",
        "text": "カフェインが大幅に増える"
      },
      {
        "id": "c",
        "text": "生豆の個性(産地の風味)がより強く表れる"
      },
      {
        "id": "d",
        "text": "酸味が減り、ボディとロースト感(苦味・香ばしさ)が増す"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "深煎りにするほど酸味は弱まり、ボディ(重み)とロースト由来の香ばしさ・苦味が増します。浅煎りほど生豆本来の産地特性が表れやすくなります。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-06",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "ブロンドロースト(浅煎り)の特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "軽やかなボディと穏やかな酸味、産地の個性が表れやすい"
      },
      {
        "id": "b",
        "text": "強い苦味とスモーキーさ"
      },
      {
        "id": "c",
        "text": "最もカフェイン含有量が少ない"
      },
      {
        "id": "d",
        "text": "油が表面に浮き出て真っ黒になる"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ブロンドローストは焙煎時間が短く、軽やかなボディと穏やかな酸味が特徴。生豆の産地特性が残りやすい焙煎度合いです。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  },
  {
    "id": "process-07",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎中に豆から「パチパチ」という音(ハゼ)がするのはなぜ?",
    "choices": [
      {
        "id": "a",
        "text": "豆同士が焙煎機内でぶつかり合うため"
      },
      {
        "id": "b",
        "text": "豆内部の水分が水蒸気となり膨張して豆が弾けるため"
      },
      {
        "id": "c",
        "text": "糖分が燃えて爆発するため"
      },
      {
        "id": "d",
        "text": "豆の殻(銀皮)が火花を上げるため"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "焙煎で豆の水分が蒸発し内部圧力が高まると、豆が弾けて「1ハゼ」「2ハゼ」という音がします。この音は焙煎度合いを見極める重要な指標です。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製",
      "焙煎"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
