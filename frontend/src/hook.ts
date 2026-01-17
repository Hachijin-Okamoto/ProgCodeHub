import { useEffect, useState } from 'react';
import { fetchProblem, fetchProblems, type ApiMode } from './services/api';
import { type ProblemDetailDTO, type ProblemListDTO } from './services/dto';

export function useProblems(mode: ApiMode) {
  const [problems, setProblems] = useState<ProblemListDTO[]>([]);

  useEffect(() => {
    fetchProblems(mode).then(setProblems);
  }, [mode]);

  return { problems };
}

export function useProblem(mode: ApiMode, problemId: number) {
  const [problem, setProblem] = useState<ProblemDetailDTO | null>(null);

  useEffect(() => {
    if (!problemId) return;
    fetchProblem(mode, problemId).then(setProblem);
  }, [mode, problemId]);

  return { problem };
}
