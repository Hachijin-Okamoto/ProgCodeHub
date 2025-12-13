/* ダミーデータ用の疑似データベース */

import { Problem, Submission } from "./entity";

/**
 * ===== ダミーデータ =====
 */

let problems: Problem[] = [
  {
    id: 1,
    title: "FizzBuzz",
    description: "1から100までの数を出力し、3の倍数でFizz、5の倍数でBuzzを表示せよ",
  },
  {
    id: 2,
    title: "Factorial",
    description: "与えられた整数 n の階乗を計算する関数を実装せよ",
  },
  {
    id: 3,
    title: "Palindrome",
    description: "与えられた文字列が回文かどうか判定せよ",
  },
  {
    id: 4,
    title: "Prime Check",
    description: "与えられた整数が素数かどうか判定せよ",
  },
  {
    id: 5,
    title: "Fibonacci",
    description: "n 番目のフィボナッチ数を計算せよ",
  },
];

let submissions: Submission[] = [
  // ===== FizzBuzz =====
  {
    id: 1,
    problemId: 1,
    userName: "alice",
    code: `
for (let i = 1; i <= 100; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(out || i);
}
    `,
    submittedAt: new Date("2025-04-01T10:00:00Z").toISOString(),
  },
  {
    id: 2,
    problemId: 1,
    userName: "bob",
    code: `
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
    `,
    submittedAt: new Date("2025-04-01T10:05:00Z").toISOString(),
  },

  // ===== Factorial =====
  {
    id: 3,
    problemId: 2,
    userName: "charlie",
    code: `
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
    `,
    submittedAt: new Date("2025-04-02T09:30:00Z").toISOString(),
  },
  {
    id: 4,
    problemId: 2,
    userName: "alice",
    code: `
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
    `,
    submittedAt: new Date("2025-04-02T09:45:00Z").toISOString(),
  },

  // ===== Palindrome =====
  {
    id: 5,
    problemId: 3,
    userName: "bob",
    code: `
function isPalindrome(s) {
  const r = s.split("").reverse().join("");
  return s === r;
}
    `,
    submittedAt: new Date("2025-04-03T11:00:00Z").toISOString(),
  },
  {
    id: 6,
    problemId: 3,
    userName: "dave",
    code: `
function isPalindrome(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) return false;
  }
  return true;
}
    `,
    submittedAt: new Date("2025-04-03T11:10:00Z").toISOString(),
  },

  // ===== Prime Check =====
  {
    id: 7,
    problemId: 4,
    userName: "charlie",
    code: `
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
    `,
    submittedAt: new Date("2025-04-04T08:20:00Z").toISOString(),
  },

  // ===== Fibonacci =====
  {
    id: 8,
    problemId: 5,
    userName: "alice",
    code: `
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
    `,
    submittedAt: new Date("2025-04-05T14:00:00Z").toISOString(),
  },
  {
    id: 9,
    problemId: 5,
    userName: "bob",
    code: `
function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
    `,
    submittedAt: new Date("2025-04-05T14:10:00Z").toISOString(),
  },
  {
    id: 10,
    problemId: 5,
    userName: "charlie",
    code: `
function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
    `,
    submittedAt: new Date("2025-04-05T14:20:00Z").toISOString(),
  },
];

/**
 * ===== Problem 操作 =====
 */

export const findAllProblems = async (): Promise<Problem[]> => {
  return problems;
};

export const findProblemById = async (
  id: number
): Promise<Problem | undefined> => {
  return problems.find((p) => p.id === id);
};

export const createProblem = async (
  title: string,
  description: string
): Promise<Problem> => {
  const newProblem: Problem = {
    id: problems.length + 1,
    title,
    description,
  };
  problems.push(newProblem);
  return newProblem;
};

export const updateProblem = async (
  id: number,
  title: string,
  description: string
): Promise<Problem | undefined> => {
  const problem = problems.find((p) => p.id === id);
  if (!problem) return undefined;

  problem.title = title;
  problem.description = description;
  return problem;
};

export const deleteProblem = async (id: number): Promise<boolean> => {
  const before = problems.length;
  problems = problems.filter((p) => p.id !== id);
  return problems.length !== before;
};

/**
 * ===== Submission 操作 =====
 */

export const findSubmissions = async (): Promise<Submission[]> => {
  return submissions;
};

export const findSubmissionsByProblemId = async (
  problemId: number
): Promise<Submission[]> => {
  return submissions.filter((s) => s.problemId === problemId);
};

export const findSubmissionById = async (
  id: number
): Promise<Submission | undefined> => {
  return submissions.find((s) => s.id === id);
};

export const createSubmission = async (
  problemId: number,
  userName: string,
  code: string
): Promise<Submission> => {
  const newSubmission: Submission = {
    id: submissions.length + 1,
    problemId,
    userName,
    code,
    submittedAt: new Date().toISOString(),
  };
  submissions.push(newSubmission);
  return newSubmission;
};
