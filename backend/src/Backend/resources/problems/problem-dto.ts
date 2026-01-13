export type ProblemListDTO = {
  id: number;
  title: string;
  body: string;
  level: number;
};

export type CreateProblemDTO = {
  title: string;
  body: string;
  level: number;
};

export type EditProblemDTO = {
  title: string;
  body: string;
  level: number;
};
