/* 手書き問題(正答位置は tools/rebalance-manual.mjs で均等化済み)
 * 再実行: cd tools && npm run rebalance */
(function (g) {
"use strict";
g.QUESTION_DATA = g.QUESTION_DATA || [];
g.QUESTION_DATA.push(
  {
    "id": "m-proc-08",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "水洗式の発酵工程の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "豆にアルコールを加える"
      },
      {
        "id": "b",
        "text": "豆を着色する"
      },
      {
        "id": "c",
        "text": "カフェインを生成する"
      },
      {
        "id": "d",
        "text": "ミューシレージ(粘液質)を分解・除去する"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "水洗式ではパルプ除去後に残るぬめり(ミューシレージ)を発酵で分解し、水洗で取り除きます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "精製"
    ]
  },
  {
    "id": "m-proc-09",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "乾燥式(ナチュラル)で精製したコーヒーに多い傾向は?",
    "choices": [
      {
        "id": "a",
        "text": "ベリーのような凝縮した風味とフルボディ"
      },
      {
        "id": "b",
        "text": "酸味が極端に強くなる"
      },
      {
        "id": "c",
        "text": "コクがなくなる"
      },
      {
        "id": "d",
        "text": "色が白くなる"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "乾燥式は果肉が付いたまま乾燥させるため、ベリーのような凝縮した風味が生まれ、しっかりしたコク(フルボディ)が出る傾向があります。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製"
    ]
  },
  {
    "id": "m-proc-10",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "半水洗式で精製したコーヒーの特徴は?",
    "choices": [
      {
        "id": "a",
        "text": "必ず酸味が強くなる"
      },
      {
        "id": "b",
        "text": "酸味が和らぎ、なめらかな口あたりとミディアム〜フルボディのコク"
      },
      {
        "id": "c",
        "text": "色が白くなる"
      },
      {
        "id": "d",
        "text": "カフェインが増える"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "半水洗式は酸味を和らげ、口あたりをなめらかにし、中程度からしっかりしたコクを生み出します。スマトラなどインドネシア産に多い方法です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "精製"
    ]
  },
  {
    "id": "m-proc-11",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎の「1ハゼ(第一次クラック)」は何を意味する?",
    "choices": [
      {
        "id": "a",
        "text": "焙煎機の故障音"
      },
      {
        "id": "b",
        "text": "豆が焦げたサイン"
      },
      {
        "id": "c",
        "text": "豆内部の水分蒸発による圧力で豆が弾ける音で、焙煎進行の指標"
      },
      {
        "id": "d",
        "text": "豆の皮が破れただけの音"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "焙煎で豆内部の水分が蒸気となって膨張し、豆が弾けて「パチパチ」という音がします。この1ハゼ・2ハゼは焙煎度合いの重要な指標です。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "焙煎"
    ]
  },
  {
    "id": "m-proc-12",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎直後のコーヒー豆から放出されるガスの影響(デガッシング)として正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "酸素を吸収する"
      },
      {
        "id": "b",
        "text": "ガスは一切出ない"
      },
      {
        "id": "c",
        "text": "豆が破裂する"
      },
      {
        "id": "d",
        "text": "二酸化炭素が放出され、抽出時にお湯を弾いて蒸らし(ブルーム)が起こる"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "焙煎後の豆は二酸化炭素を放出し続けます。新鮮な粉にお湯を注ぐとガスが逃げて粉が膨らむ(蒸らし/ブルーム)のはこのためです。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "焙煎",
      "抽出"
    ]
  },
  {
    "id": "m-proc-13",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "ブレンドの作り方で「事前混合(プレローストブレンド)」と「焙煎後混合(ポストローストブレンド)」の違いは?",
    "choices": [
      {
        "id": "a",
        "text": "生豆の段階で混ぜてから焙煎するか、豆ごとに焙煎してから混ぜるかの違い"
      },
      {
        "id": "b",
        "text": "抽出前に混ぜるか後で混ぜるか"
      },
      {
        "id": "c",
        "text": "違いはない"
      },
      {
        "id": "d",
        "text": "価格の違いのみ"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "事前混合は生豆を混ぜて一緒に焙煎、焙煎後混合は豆ごとに最適な焙煎をしてから混ぜる方法です。焙煎後混合は各産地の個性を最大限活かせます。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 4,
    "tags": [
      "ブレンド"
    ]
  },
  {
    "id": "m-proc-14",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "「マスターロースター」の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "店舗でドリップする人"
      },
      {
        "id": "b",
        "text": "焙煎プロセスを監視・調節する職人で、各焙煎工場に1名ずついる"
      },
      {
        "id": "c",
        "text": "豆を栽培する人"
      },
      {
        "id": "d",
        "text": "パッケージをデザインする人"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "マスターロースターは焙煎作業が途切れなく行われ、生豆の品質が各工程で保たれ、機器が最良の状態で稼働するよう確認する職人です。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "焙煎"
    ]
  },
  {
    "id": "m-proc-15",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎中に起こるメイラード反応・カラメル化の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "豆を白くする"
      },
      {
        "id": "b",
        "text": "水分を増やす"
      },
      {
        "id": "c",
        "text": "豆の色を褐色にし、香ばしさと甘み・コクを生み出す"
      },
      {
        "id": "d",
        "text": "カフェインを除去する"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "焙煎の熱で糖とアミノ酸が反応(メイラード反応)し、糖がカラメル化することで、褐色の色・香ばしさ・甘み・コクが生まれます。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "焙煎",
      "化学"
    ]
  },
  {
    "id": "m-proc-16",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "コーヒーのパッケージにある一方向弁(バルブ)の役割は?",
    "choices": [
      {
        "id": "a",
        "text": "開けやすくするための飾り"
      },
      {
        "id": "b",
        "text": "豆の量を確認する窓"
      },
      {
        "id": "c",
        "text": "密封を弱めるための穴"
      },
      {
        "id": "d",
        "text": "豆が出すガスを外に逃がしつつ外気の侵入を防ぎ、鮮度を保つ"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "焙煎豆は二酸化炭素を出し続けるため、ガスを逃がしつつ酸素の侵入を防ぐバルブで鮮度を保ちます(フレーバーロック包装)。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "包装",
      "鮮度"
    ]
  },
  {
    "id": "m-proc-17",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "浅煎り(ブロンド)と深煎り(ダーク)の違いとして正しいものは?",
    "choices": [
      {
        "id": "a",
        "text": "浅煎りは生豆の個性(産地特性)が表れやすく酸味が明るく、深煎りはロースト由来の香ばしさとコクが増す"
      },
      {
        "id": "b",
        "text": "浅煎りの方が苦い"
      },
      {
        "id": "c",
        "text": "深煎りは酸味が強い"
      },
      {
        "id": "d",
        "text": "違いは色だけ"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "焙煎が浅いほど産地の個性と明るい酸味が残り、深いほどロースト由来の香ばしさ・苦み・コクが増し酸味が和らぎます。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 2,
    "tags": [
      "焙煎"
    ]
  },
  {
    "id": "m-proc-18",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "欠点豆(ディフェクト)とは?",
    "choices": [
      {
        "id": "a",
        "text": "最高級の豆"
      },
      {
        "id": "b",
        "text": "未熟・虫食い・割れ・異物など、品質を損なう豆や混入物"
      },
      {
        "id": "c",
        "text": "大きい豆のこと"
      },
      {
        "id": "d",
        "text": "ピーベリーの別名"
      }
    ],
    "answerIds": [
      "b"
    ],
    "explanation": "欠点豆は未熟豆・虫食い豆・割れ豆・異物など品質を損なうもので、精選工程で取り除かれます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "精製",
      "品質"
    ]
  },
  {
    "id": "m-proc-19",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "水洗式で発酵・洗浄した後の豆は、どんな状態で乾燥される?",
    "choices": [
      {
        "id": "a",
        "text": "果肉を付けたまま乾燥"
      },
      {
        "id": "b",
        "text": "焙煎してから乾燥"
      },
      {
        "id": "c",
        "text": "パーチメント(内果皮)に包まれた状態でパティオや乾燥棚に広げて乾燥"
      },
      {
        "id": "d",
        "text": "水の中で乾燥"
      }
    ],
    "answerIds": [
      "c"
    ],
    "explanation": "水洗式ではミューシレージを洗い流した後、パーチメントに包まれた豆をパティオや乾燥棚・ドラム式乾燥機で均一に乾燥させます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒー用語集",
        "url": "https://www.starbucks.co.jp/hellocoffee/words/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "精製"
    ]
  },
  {
    "id": "m-proc-20",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "スマトラ式(半水洗式)が多い理由として考えられるものは?",
    "choices": [
      {
        "id": "a",
        "text": "最も安い方法だから"
      },
      {
        "id": "b",
        "text": "機械がいらないから"
      },
      {
        "id": "c",
        "text": "水が全く不要だから"
      },
      {
        "id": "d",
        "text": "インドネシアの湿潤な気候に適し、独特のアーシーな風味を生むため"
      }
    ],
    "answerIds": [
      "d"
    ],
    "explanation": "湿度の高いインドネシアでは乾燥工程を早める必要があり、ミューシレージを残したまま乾燥する半水洗式が発達しました。アーシーで重厚な風味が生まれます。",
    "sources": [
      {
        "title": "HELLO COFFEE | コーヒーの木から一杯のカップまで",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "精製"
    ]
  },
  {
    "id": "m-proc-21",
    "category": "精製方法と焙煎",
    "type": "single",
    "question": "焙煎度合いが深くなるにつれてカフェイン量はどうなる?",
    "choices": [
      {
        "id": "a",
        "text": "ほとんど変わらない(わずかに減る程度)"
      },
      {
        "id": "b",
        "text": "大幅に増える"
      },
      {
        "id": "c",
        "text": "ゼロになる"
      },
      {
        "id": "d",
        "text": "2倍になる"
      }
    ],
    "answerIds": [
      "a"
    ],
    "explanation": "カフェインは焙煎の熱でほとんど分解されず、焙煎度合いによる差はごくわずかです。浅煎り・深煎りで大きく変わるのは風味です。",
    "sources": [
      {
        "title": "HELLO COFFEE | ローストとブレンド",
        "url": "https://www.starbucks.co.jp/hellocoffee/know/roast-and-blend/"
      }
    ],
    "difficulty": 3,
    "tags": [
      "焙煎",
      "カフェイン"
    ]
  }
);
})(typeof window !== "undefined" ? window : globalThis);
