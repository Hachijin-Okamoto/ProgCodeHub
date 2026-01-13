import { prisma } from './lib/prisma';

/* eslint-disable @typescript-eslint/typedef */

async function main(): Promise<void> {
  const count = await prisma.problem.count();
  if (count > 0) {
    console.log('Seed skipped: problems already exist');
    return;
  }

  // ----------------------
  // Problems (3 only)
  // ----------------------
  await prisma.problem.createMany({
    data: [
      {
        title: 'FizzBuzz',
        body: `
1 以上 100 以下の整数を 1 から順に出力してください。

- 3 の倍数なら "Fizz"
- 5 の倍数なら "Buzz"
- 3 と 5 の両方の倍数なら "FizzBuzz"

それ以外の場合はその整数を出力します。
各出力は 1 行ずつ表示してください。
`.trim(),
      },
      {
        title: 'Factorial',
        body: `
整数 n が与えられます。
n の階乗 n! を計算して出力してください。

n! = 1 × 2 × ... × n

制約:
- 0 ≤ n ≤ 12
`.trim(),
      },
      {
        title: 'Prime Check',
        body: `
正の整数 n が与えられます。
n が素数であるかどうかを判定してください。

素数なら "YES"、そうでなければ "NO" を出力してください。

制約:
- 1 ≤ n ≤ 10^6
`.trim(),
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
