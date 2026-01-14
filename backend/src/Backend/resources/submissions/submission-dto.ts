export type SubmissionListDTO = {
  id: number;
  problemId: number;
  body: string;
  language: string;
  result: boolean;
};

export type CreateSubmissionDTO = {
  problemId: number;
  body: string;
  language: string;
  result: boolean;
};

export type EditSubmissionDTO = {
  problemId: number;
  body: string;
  language: string;
  result: boolean;
};
