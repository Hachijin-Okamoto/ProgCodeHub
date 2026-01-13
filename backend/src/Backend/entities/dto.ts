export type ProblemListDTO = {
  id: number;
  title: string;
};

export type CreateProblemDTO = {
  title: string;
  body: string;
  level: number;
};

export type EditProblemDTO = {
  id: number;
  title: string;
  body: string;
  level: number;
};

export type CreateSampleDTO = {
  problemId: number;
  input: string;
  output: string;
};

export type SubmissionListDTO = {
  id: number;
};

export type CreateSubmissionDTO = {
  problemId: number;
  body: string;
  language: string;
  result: boolean;
};
