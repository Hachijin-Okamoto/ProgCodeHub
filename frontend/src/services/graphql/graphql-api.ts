import { type ProblemDetailDTO, type ProblemListDTO } from '../dto';

const API_BASE = 'http://localhost:8000/api';

export async function fetchProblems(): Promise<ProblemListDTO[]> {
  const res = await fetch(`${API_BASE}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          problems {
            id
            title
            level
          }
        }
      `,
    }),
  });

  const json = await res.json();
  return json.data.problems;
}

export async function fetchProblem(id: number): Promise<ProblemDetailDTO> {
  const res = await fetch(`${API_BASE}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query {
  problem(id: ${id}) {
    id
    title
    body
    level
    submissions {
      id
      body
      language
      result
    }
    samples {
      id
      input
      output
    }
  }
}`,
    }),
  });

  const json = await res.json();
  return json.data.problem;
}
