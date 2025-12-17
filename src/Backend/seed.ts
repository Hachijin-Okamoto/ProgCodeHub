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
        description: `
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
        description: `
整数 n が与えられます。
n の階乗 n! を計算して出力してください。

n! = 1 × 2 × ... × n

制約:
- 0 ≤ n ≤ 12
`.trim(),
      },
      {
        title: 'Prime Check',
        description: `
正の整数 n が与えられます。
n が素数であるかどうかを判定してください。

素数なら "YES"、そうでなければ "NO" を出力してください。

制約:
- 1 ≤ n ≤ 10^6
`.trim(),
      },
    ],
  });

  const fizz = await prisma.problem.findFirst({ where: { title: 'FizzBuzz' } });
  const fact = await prisma.problem.findFirst({
    where: { title: 'Factorial' },
  });
  const prime = await prisma.problem.findFirst({
    where: { title: 'Prime Check' },
  });

  // ----------------------
  // Submissions: FizzBuzz
  // ----------------------
  if (fizz) {
    await prisma.submission.createMany({
      data: [
        {
          problemId: fizz.id,
          userName: 'alice',
          code: `
#include <stdio.h>

int main(void) {
  for (int i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      puts("FizzBuzz");
    } else if (i % 3 == 0) {
      puts("Fizz");
    } else if (i % 5 == 0) {
      puts("Buzz");
    } else {
      printf("%d\\n", i);
    }
  }
  return 0;
}
`.trim(),
        },
        {
          problemId: fizz.id,
          userName: 'bob',
          code: `
#include <stdio.h>

int main(void) {
  for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
      printf("FizzBuzz\\n");
    else if (i % 3 == 0)
      printf("Fizz\\n");
    else if (i % 5 == 0)
      printf("Buzz\\n");
    else
      printf("%d\\n", i);
  }
  return 0;
}
`.trim(),
        },
        {
          problemId: fizz.id,
          userName: 'charlie',
          code: `
#include <stdio.h>

int main(void) {
  int i = 1;
  while (i <= 100) {
    if (i % 15 == 0)
      puts("FizzBuzz");
    else if (i % 3 == 0)
      puts("Fizz");
    else if (i % 5 == 0)
      puts("Buzz");
    else
      printf("%d\\n", i);
    i++;
  }
  return 0;
}
`.trim(),
        },
      ],
    });
  }

  // ----------------------
  // Submissions: Factorial
  // ----------------------
  if (fact) {
    await prisma.submission.createMany({
      data: [
        {
          problemId: fact.id,
          userName: 'alice',
          code: `
#include <stdio.h>

int main(void) {
  int n;
  scanf("%d", &n);

  long long res = 1;
  for (int i = 1; i <= n; i++) {
    res *= i;
  }

  printf("%lld\\n", res);
  return 0;
}
`.trim(),
        },
        {
          problemId: fact.id,
          userName: 'bob',
          code: `
#include <stdio.h>

long long fact(int n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}

int main(void) {
  int n;
  scanf("%d", &n);
  printf("%lld\\n", fact(n));
  return 0;
}
`.trim(),
        },
        {
          problemId: fact.id,
          userName: 'charlie',
          code: `
#include <stdio.h>

int main(void) {
  int n;
  scanf("%d", &n);

  long long result = 1;
  int i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }

  printf("%lld\\n", result);
  return 0;
}
`.trim(),
        },
      ],
    });
  }

  // ----------------------
  // Submissions: Prime Check
  // ----------------------
  if (prime) {
    await prisma.submission.createMany({
      data: [
        {
          problemId: prime.id,
          userName: 'alice',
          code: `
#include <stdio.h>

int main(void) {
  int n;
  scanf("%d", &n);

  if (n <= 1) {
    puts("NO");
    return 0;
  }

  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      puts("NO");
      return 0;
    }
  }

  puts("YES");
  return 0;
}
`.trim(),
        },
        {
          problemId: prime.id,
          userName: 'bob',
          code: `
#include <stdio.h>

int isPrime(int n) {
  if (n <= 1) return 0;
  for (int i = 2; i < n; i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}

int main(void) {
  int n;
  scanf("%d", &n);
  puts(isPrime(n) ? "YES" : "NO");
  return 0;
}
`.trim(),
        },
        {
          problemId: prime.id,
          userName: 'charlie',
          code: `
#include <stdio.h>

int main(void) {
  int n;
  scanf("%d", &n);

  if (n < 2) {
    puts("NO");
    return 0;
  }

  int divisor = 2;
  while (divisor * divisor <= n) {
    if (n % divisor == 0) {
      puts("NO");
      return 0;
    }
    divisor++;
  }

  puts("YES");
  return 0;
}
`.trim(),
        },
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
