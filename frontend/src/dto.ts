export type ProblemListDTO = {
  id: number;
  title: string;
  level: number;
};

export type ProblemDetailDTO = {
  id: number;
  title: string;
  body: string;
  level: number;
  submissions: {
    id: number;
    body: string;
    language: string;
    result: boolean;
  }[];
  samples: {
    id: number;
    input: string;
    output: string;
  }[];
};
