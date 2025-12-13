export type ProblemListDTO = {
  id: number;
  title: string;
};

export type CreateProblemDTO = {
  title: string;
  description: string;
};

export type EditProblemDTO = {
  id: number;
  title: string;
  description: string;
};

export type SubmissionListDTO = {
  id: number;
  problemId: number;
};

export type CreateSubmissionDTO = {
  problemId: number;
  userName: string;
  code: string;
};
