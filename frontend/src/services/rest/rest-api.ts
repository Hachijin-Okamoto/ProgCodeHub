import type {
  ProblemListDTO,
  ProblemDetailDTO,
  CreateProblemDTO,
  EditProblemDTO,
} from '../dto';

const API_BASE = 'http://localhost:8000/api';

export async function fetchProblems(): Promise<ProblemListDTO[]> {
  const res = await fetch(`${API_BASE}/problems`);
  return res.json();
}

export async function fetchProblem(id: number): Promise<ProblemDetailDTO> {
  const res = await fetch(`${API_BASE}/problems/${id}`);
  return res.json();
}

export async function createProblem(
  data: CreateProblemDTO,
): Promise<ProblemDetailDTO> {
  const res = await fetch(`${API_BASE}/problems`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProblem(
  id: number,
  data: EditProblemDTO,
): Promise<void> {
  await fetch(`${API_BASE}/problems/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function deleteProblem(id: number): Promise<void> {
  await fetch(`${API_BASE}/problems/${id}`, {
    method: 'DELETE',
  });
}
