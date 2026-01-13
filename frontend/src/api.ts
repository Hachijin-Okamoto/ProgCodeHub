const API_BASE = "http://localhost:8000/api";

export type Problem = {
  id: number;
  title: string;
  body: string;
};

export type Submission = {
  id: number;
  body: string;
  problemId: number;
};

export type ProblemDetail = Problem & {
  submissions: Submission[];
};

export async function fetchProblems(): Promise<Problem[]> {
  const res = await fetch(`${API_BASE}/problems`);
  return res.json();
}

export async function fetchProblem(id: number): Promise<ProblemDetail> {
  const res = await fetch(`${API_BASE}/problems/${id}`);
  return res.json();
}
