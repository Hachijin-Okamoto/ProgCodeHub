import { prisma } from './lib/prisma';

/* eslint-disable @typescript-eslint/typedef */

async function main(): Promise<void> {
  const count = await prisma.problem.count();
  if (count > 0) {
    console.log('Seed skipped: problems already exist');
    return;
  }
  await prisma.problem.createMany({
    data: [
      {
        title: '文字を書くプログラム',
        body: `printf で始まる文は、端末に文字を出力します。 この問題では、printfを使ったプログラムの練習をします。
        まず、次のプログラムをそのままタイプしてファイルを作成し、 コンパイルして実行してみてください。'*'印で図が描かれますね。
        このプログラムを編集して、 printfの行をそれぞれ2回ずつ繰り返すようにしてください。 編集したプログラムをコンパイルして実行してみてください。 結果はどう変わりますか？`.trim(),
        level: 2,
      },
      {
        title: 'べき乗の表',
        body: `7のi乗をi = 0 から i = 5 まで示す表を 作成するプログラムを書いてください。 出力は5乗まで続きます。
        答えを自分で計算してしまうのではなく、 次の要領で、プログラムに計算させるようにしてください。
        (1)変数 p に1を代入する。

(2)7^0 = に続けて p の値を出力して改行する。

(3)pの値を7倍する。

(4)7^1 = に続けて p の値を出力して改行する。

(5)pの値を7倍する。

(6)7^2 = に続けて p の値を出力して改行する。

以下、これを7の5乗の出力を行うまで、 繰り返す。

printfの呼び出しを6個書くことになります。`.trim(),
        level: 2,
      },
    ],
  });

  await prisma.sample.createMany({
    data: [
      {
        problemId: 2,
        input: '',
        output: `7^0 = 1
7^1 = 7
7^2 = 49
7^3 = 343
7^4 = 2401
7^5 = 16807`,
      },
    ],
  });

  console.log('Seed completed');
}

void main()
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
