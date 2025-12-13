import { prisma } from './lib/prisma';

/* eslint-disable @typescript-eslint/typedef */

async function main(): Promise<void> {
  // 既存データがある場合は重複投入を避ける
  const count = await prisma.problem.count();
  if (count > 0) {
    console.log('Seed skipped: problems already exist');
    return;
  }

  await prisma.problem.createMany({
    data: [
      { title: 'FizzBuzz', description: '1〜100の数...（略）' },
      { title: 'Factorial', description: 'nの階乗を計算...' },
      { title: 'Palindrome', description: '回文判定...' },
      { title: 'Prime Check', description: '素数判定...' },
      { title: 'Fibonacci', description: 'フィボナッチ数...' },
    ],
  });

  const fizz = await prisma.problem.findFirst({ where: { title: 'FizzBuzz' } });
  if (fizz) {
    await prisma.submission.createMany({
      data: [
        { problemId: fizz.id, userName: 'alice', code: '/* ... */' },
        { problemId: fizz.id, userName: 'bob', code: '/* ... */' },
      ],
    });
  }

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
