/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)
 * 再実行: cd tools && npm run rebalance */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "m-taste-08",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングの4ステップで「香りを嗅ぐ(Smell)」の次に行うことは?",
    "choices": [
      {
        "id": "a",
        "text": "表現する(Describe)"
      },
      {
        "id": "b",
        "text": "すする(Slurp)"
      },
      {
        "id": "c",
        "text": "豆を挽く"
      },
      {
        "id": "d",
        "text": "温度を測る"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "テイスティングは「香りを嗅ぐ→すする→味わう(位置を特定)→表現する」の4ステップで行います。",
    "sources": [
      {
        "title": "HELLO COFFEE",
        "url": "https://www.starbucks.co.jp/hellocoffee/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "テイスティング基礎"
    ]
  },
  {
    "id": "m-taste-09",
    "category": "テイスティング",
    "type": "single",
    "question": "酸味(アシディティ)を最も感じやすい舌の部位は?",
    "choices": [
      {
        "id": "a",
        "text": "舌の先端"
      },
      {
        "id": "b",
        "text": "舌の奥"
      },
      {
        "id": "c",
        "text": "舌の両脇(側面)"
      },
      {
        "id": "d",
        "text": "上あご"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "アシディティは舌の両脇で感じる要素です。苦味は舌の奥側に印象が残ります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "酸味"
    ]
  },
  {
    "id": "m-taste-10",
    "category": "テイスティング",
    "type": "single",
    "question": "「フルボディ」の説明として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "カフェインが多いコーヒー"
      },
      {
        "id": "b",
        "text": "酸味が強いコーヒー"
      },
      {
        "id": "c",
        "text": "後味がすぐ消えるコーヒー"
      },
      {
        "id": "d",
        "text": "舌の上で残る重量感が重いコーヒー"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "フルボディは舌に重量感を感じるコーヒーで、舌に残る重さを強く感じるほどコクが深いと表現します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "ボディ"
    ]
  },
  {
    "id": "m-taste-11",
    "category": "テイスティング",
    "type": "single",
    "question": "「ライトボディ」の説明は?",
    "choices": [
      {
        "id": "a",
        "text": "舌の上に残る重量感が軽やかで、後味がはかなく消えていく"
      },
      {
        "id": "b",
        "text": "色が薄いコーヒー"
      },
      {
        "id": "c",
        "text": "水っぽく欠陥のあるコーヒー"
      },
      {
        "id": "d",
        "text": "カフェインレスのコーヒー"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "ライトボディは舌の上の重量感が軽やかで、後味がはかなく消えるコーヒーを指します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "ボディ"
    ]
  },
  {
    "id": "m-taste-12",
    "category": "テイスティング",
    "type": "single",
    "question": "フードペアリングで「対照的な組み合わせ」の例として適切なものは?",
    "choices": [
      {
        "id": "a",
        "text": "似た風味同士を合わせること"
      },
      {
        "id": "b",
        "text": "異なる風味を組み合わせ、互いの個性を引き立て合うこと"
      },
      {
        "id": "c",
        "text": "同じ食材を重ねること"
      },
      {
        "id": "d",
        "text": "水分の多い食品と合わせること"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "フードペアリングには同系統の風味を重ねる「相補的」と、異なる風味で引き立て合う「対照的」という考え方があります。",
    "sources": [
      {
        "title": "HELLO COFFEE",
        "url": "https://www.starbucks.co.jp/hellocoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "ペアリング"
    ]
  },
  {
    "id": "m-taste-13",
    "category": "テイスティング",
    "type": "single",
    "question": "ケニアのようなジューシーで明るい酸味のコーヒーと相性のよいフレーバーは?",
    "choices": [
      {
        "id": "a",
        "text": "バターやチーズのみ"
      },
      {
        "id": "b",
        "text": "塩味の強い食品"
      },
      {
        "id": "c",
        "text": "グレープフルーツやベリー"
      },
      {
        "id": "d",
        "text": "マッシュルーム"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "ケニアはグレープフルーツ・ベリー・カラント・レーズン・オレンジなどのフレーバーと相性がよいとされています。",
    "sources": [
      {
        "title": "スターバックス公式 商品ページ",
        "url": "https://product.starbucks.co.jp/beans/corecoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "ペアリング",
      "ケニア"
    ]
  },
  {
    "id": "m-taste-14",
    "category": "テイスティング",
    "type": "single",
    "question": "「ジューシーな」というテイスティング表現の意味は?",
    "choices": [
      {
        "id": "a",
        "text": "果汁が含まれている"
      },
      {
        "id": "b",
        "text": "水分が多く薄い"
      },
      {
        "id": "c",
        "text": "甘味料が入っている"
      },
      {
        "id": "d",
        "text": "口の中が潤うような印象を与える口あたりや風味"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "ジューシーなは口の中が潤うような印象を与える口あたりや風味を意味する表現です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-15",
    "category": "テイスティング",
    "type": "single",
    "question": "「ワインのような」風味の説明は?",
    "choices": [
      {
        "id": "a",
        "text": "赤ワインやフルーツに似た風味や香り"
      },
      {
        "id": "b",
        "text": "アルコールを含む風味"
      },
      {
        "id": "c",
        "text": "発酵が進みすぎた欠陥"
      },
      {
        "id": "d",
        "text": "ブドウジュースのような甘さ"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "赤ワインやフルーツに似た風味・香りを指す表現で、アフリカ産の高品質なコーヒーなどに使われます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-16",
    "category": "テイスティング",
    "type": "single",
    "question": "「大地のような(アーシー)」風味がよく使われる産地は?",
    "choices": [
      {
        "id": "a",
        "text": "コロンビア"
      },
      {
        "id": "b",
        "text": "インドネシア産"
      },
      {
        "id": "c",
        "text": "ケニア"
      },
      {
        "id": "d",
        "text": "コスタリカ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "大地のようなはインドネシア産コーヒーの風味を表すのによく使われ、土や生のマッシュルームを思わせる香り・風味です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "表現",
      "生産地"
    ]
  },
  {
    "id": "m-taste-17",
    "category": "テイスティング",
    "type": "single",
    "question": "「鮮度の落ちた」コーヒーの説明は?",
    "choices": [
      {
        "id": "a",
        "text": "焙煎したてのコーヒー"
      },
      {
        "id": "b",
        "text": "冷めたコーヒー"
      },
      {
        "id": "c",
        "text": "酸素に長期間さらされ酸味が失われ、のっぺりとした平坦な味になったコーヒー"
      },
      {
        "id": "d",
        "text": "薄めたコーヒー"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "酸化により酸味が失われ、新鮮さを失い平坦な味になった状態を指します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "鮮度"
    ]
  },
  {
    "id": "m-taste-18",
    "category": "テイスティング",
    "type": "single",
    "question": "「スモーキーさ」とローストの関係は?",
    "choices": [
      {
        "id": "a",
        "text": "ローストが浅いほどスモーキーさが増す"
      },
      {
        "id": "b",
        "text": "ローストと無関係"
      },
      {
        "id": "c",
        "text": "生豆の状態で決まる"
      },
      {
        "id": "d",
        "text": "ローストが深いほど香りと風味は煙や炭を思わせるスモーキーさが増す"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "ローストが深いほど、香りと風味は煙や炭を思わせるスモーキーさが増します。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "焙煎",
      "表現"
    ]
  },
  {
    "id": "m-taste-19",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングの「表現する(Describe)」ステップの目的は?",
    "choices": [
      {
        "id": "a",
        "text": "感じた風味を言葉で表現し、コーヒーの理解を深め共有する"
      },
      {
        "id": "b",
        "text": "豆の値段を決める"
      },
      {
        "id": "c",
        "text": "他の人の評価と競う"
      },
      {
        "id": "d",
        "text": "カフェイン量を測る"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "感じた香り・酸味・コク・風味を言葉で表現することで、コーヒーの理解を深め、他の人と共有できるようになります。",
    "sources": [
      {
        "title": "HELLO COFFEE",
        "url": "https://www.starbucks.co.jp/hellocoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング基礎"
    ]
  },
  {
    "id": "m-taste-20",
    "category": "テイスティング",
    "type": "single",
    "question": "「バランスのよい」コーヒーとは?",
    "choices": [
      {
        "id": "a",
        "text": "酸味だけが強いコーヒー"
      },
      {
        "id": "b",
        "text": "酸味・コク・風味が心地よく調和し、どれか一つが過度に突出していないコーヒー"
      },
      {
        "id": "c",
        "text": "無味無臭のコーヒー"
      },
      {
        "id": "d",
        "text": "価格が手頃なコーヒー"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "酸味・コク・風味が心地よく交わり合って調和をなすコーヒーをバランスのよいコーヒーと呼びます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-21",
    "category": "テイスティング",
    "type": "single",
    "question": "比較テイスティング(複数のコーヒーを飲み比べる)の利点は?",
    "choices": [
      {
        "id": "a",
        "text": "早く飲める"
      },
      {
        "id": "b",
        "text": "カフェインを節約できる"
      },
      {
        "id": "c",
        "text": "1種類だけ飲むより風味の違いが明確に分かる"
      },
      {
        "id": "d",
        "text": "利点はない"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "複数を飲み比べることで、それぞれの酸味・コク・風味の違いが際立ち、テイスティングの理解が深まります。",
    "sources": [
      {
        "title": "HELLO COFFEE",
        "url": "https://www.starbucks.co.jp/hellocoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング基礎"
    ]
  },
  {
    "id": "m-taste-22",
    "category": "テイスティング",
    "type": "single",
    "question": "「カラメルのような」風味が見られるのはどのロースト?",
    "choices": [
      {
        "id": "a",
        "text": "ブロンドロースト"
      },
      {
        "id": "b",
        "text": "生豆"
      },
      {
        "id": "c",
        "text": "水出しのみ"
      },
      {
        "id": "d",
        "text": "ダークロースト"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "カラメルのようなは砂糖を焦がしたようなほろ苦さと甘さで、ダークローストのコーヒーに見られる特徴です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "表現",
      "焙煎"
    ]
  },
  {
    "id": "m-taste-23",
    "category": "テイスティング",
    "type": "single",
    "question": "「シロップのような」コーヒーとは?",
    "choices": [
      {
        "id": "a",
        "text": "コクがしっかりしていて後味が長く残る濃厚なコーヒー"
      },
      {
        "id": "b",
        "text": "シロップを添加したコーヒー"
      },
      {
        "id": "c",
        "text": "甘いだけのコーヒー"
      },
      {
        "id": "d",
        "text": "薄いコーヒー"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "シロップのようなとは、コクがしっかりしていて後味が長く残る濃厚なコーヒーを表す言葉です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-24",
    "category": "テイスティング",
    "type": "single",
    "question": "「ベリー」という風味表現がよく見られる高品質な産地は?",
    "choices": [
      {
        "id": "a",
        "text": "ブラジルのみ"
      },
      {
        "id": "b",
        "text": "東アフリカやアラビア半島産"
      },
      {
        "id": "c",
        "text": "低地のロブスタ種"
      },
      {
        "id": "d",
        "text": "ベトナムのみ"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "ベリー(ブラックベリーやブルーベリーを思わせる香り・風味)は東アフリカやアラビア半島産の品質の高いコーヒーの一部に見られる特徴です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "表現",
      "生産地"
    ]
  },
  {
    "id": "m-taste-25",
    "category": "テイスティング",
    "type": "single",
    "question": "テイスティングで香りを嗅ぐタイミングとして効果的なのは?",
    "choices": [
      {
        "id": "a",
        "text": "冷めてからのみ"
      },
      {
        "id": "b",
        "text": "飲んだ後のみ"
      },
      {
        "id": "c",
        "text": "粉の状態と、お湯を注いだ直後の両方"
      },
      {
        "id": "d",
        "text": "香りは確認しない"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "挽いた粉の香り(ドライアロマ)と、お湯を注いだときの香りの両方を確認すると、香りの変化まで捉えられます。",
    "sources": [
      {
        "title": "HELLO COFFEE",
        "url": "https://www.starbucks.co.jp/hellocoffee/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "テイスティング基礎"
    ]
  },
  {
    "id": "m-taste-26",
    "category": "テイスティング",
    "type": "single",
    "question": "コーヒーパスポートの役割は?",
    "choices": [
      {
        "id": "a",
        "text": "豆の購入割引券"
      },
      {
        "id": "b",
        "text": "店舗のスタンプカード"
      },
      {
        "id": "c",
        "text": "生産国の渡航証明"
      },
      {
        "id": "d",
        "text": "テイスティングしたコーヒーの風味や感想を記録するツール"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "コーヒーパスポートは飲んだコーヒーの生産地・風味・感想などを記録して学びを深めるためのツールです。",
    "sources": [
      {
        "title": "コーヒーパスポート | スターバックス",
        "url": "https://www.starbucks.co.jp/howto/coffee/passport.html"
      }
    ],
    "difficulty": 2,
    "tags": [
      "ツール"
    ]
  },
  {
    "id": "m-taste-27",
    "category": "テイスティング",
    "type": "single",
    "question": "「フローラルな」風味の説明は?",
    "choices": [
      {
        "id": "a",
        "text": "はかなく繊細でありながら明確な、花を思わせるフレッシュで甘い香り"
      },
      {
        "id": "b",
        "text": "土のような香り"
      },
      {
        "id": "c",
        "text": "焦げた香り"
      },
      {
        "id": "d",
        "text": "乳製品のような香り"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "フローラルなは花を思わせるフレッシュで甘い香りを意味する表現で、エチオピアなどに見られます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 1,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-28",
    "category": "テイスティング",
    "type": "single",
    "question": "「はじける」という表現が示す感覚は?",
    "choices": [
      {
        "id": "a",
        "text": "炭酸が入っている感覚"
      },
      {
        "id": "b",
        "text": "さわやかな酸味が舌の上で躍り、素早く消える感覚"
      },
      {
        "id": "c",
        "text": "豆が弾ける音"
      },
      {
        "id": "d",
        "text": "苦味が残る感覚"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "はじけるはさわやかな酸味が舌の上で躍り素早く消える感覚を表す言葉です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "表現"
    ]
  },
  {
    "id": "m-taste-29",
    "category": "テイスティング",
    "type": "single",
    "question": "「バターのような」風味が見られる産地は?",
    "choices": [
      {
        "id": "a",
        "text": "ケニア産のみ"
      },
      {
        "id": "b",
        "text": "ブラジル産のみ"
      },
      {
        "id": "c",
        "text": "インドネシア産コーヒーの一部"
      },
      {
        "id": "d",
        "text": "ハワイ産のみ"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "バターのようなはインドネシア産コーヒーの一部に見られる、なめらかでコクのある風味と舌触りです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "表現",
      "生産地"
    ]
  },
  {
    "id": "m-taste-30",
    "category": "テイスティング",
    "type": "single",
    "question": "「苦味」が主に感じられる舌の部位は?",
    "choices": [
      {
        "id": "a",
        "text": "舌の先"
      },
      {
        "id": "b",
        "text": "舌の両脇"
      },
      {
        "id": "c",
        "text": "舌の中央のみ"
      },
      {
        "id": "d",
        "text": "舌の奥側"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "苦味は主に舌の奥側に印象が残る基本的な味覚の一つです。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "味覚"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
