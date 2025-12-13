class NotImplementedError extends Error {
  constructor(message: string = 'NotImplemented') {
    super(message);
    this.name = 'NotImplementedError';
  }
}

const notImplemented = <T>(): T => {
  throw new NotImplementedError();
};

export const getAllProblems = async (): Promise<number[]> => {
  return notImplemented<Promise<number[]>>();
};

export const createNewProblem = async (): Promise<number> => {
  return notImplemented<Promise<number>>();
};

export const getIdProblem = async (_id: number): Promise<number> => {
  return notImplemented<Promise<number>>();
};

export const editIdProblem = async (_id: number): Promise<number> => {
  return notImplemented<Promise<number>>();
};

export const deleteIdProblem = async (_id: number): Promise<number> => {
  return notImplemented<Promise<number>>();
};

export const getAllSubmissionsFromIdProblem = async (
  _problemId: number,
): Promise<number[]> => {
  return notImplemented<Promise<number[]>>();
};

export const getAllSubmissions = async (): Promise<number[]> => {
  return notImplemented<Promise<number[]>>();
};

export const createNewSubmission = async (): Promise<number> => {
  return notImplemented<Promise<number>>();
};

export const getIdSubmission = async (_id: number): Promise<number> => {
  return notImplemented<Promise<number>>();
};
