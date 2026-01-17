import * as rest from './rest/rest-api';
import * as graphql from './graphql/graphql-api';
import { useSearchParams } from 'react-router-dom';

export type ApiMode = 'rest' | 'graphql';

export function fetchProblems(mode: ApiMode) {
  return mode === 'rest' ? rest.fetchProblems() : graphql.fetchProblems();
}

export function fetchProblem(mode: ApiMode, problemId: number) {
  return mode === 'rest'
    ? rest.fetchProblem(problemId)
    : graphql.fetchProblem(problemId);
}

export function useApiMode(): [ApiMode, (m: ApiMode) => void] {
  const [params, setParams] = useSearchParams();

  const mode = (params.get('api') as ApiMode) ?? 'rest';

  const setMode = (m: ApiMode) => {
    setParams({ api: m });
  };

  return [mode, setMode];
}
