export type ProblemListDTO = {
  id: number;
  title: string;
};

export type CreateProblemDTO = {
  title: string;
  body: string;
};

export type EditProblemDTO = {
  id: number;
  title: string;
  body: string;
};

export type SubmissionListDTO = {
  id: number;
};

export type CreateSubmissionDTO = {
  problemId: number;
  body: string;
};
