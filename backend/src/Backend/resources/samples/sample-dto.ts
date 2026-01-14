export type SampleListDTO = {
  id: number;
  problemId: number;
  input: string;
  output: string;
};

export type CreateSampleDTO = {
  problemId: number;
  input: string;
  output: string;
};

export type EditSampleDTO = {
  problemId: number;
  input: string;
  output: string;
};
