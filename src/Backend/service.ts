import * as db from './mockDB/database';
import { Problem } from './mockDB/entity';
import { ProblemListDTO } from './dto';

class NotImplementedError extends Error {
  constructor(message: string = 'NotImplemented') {
    super(message);
    this.name = 'NotImplementedError';
  }
}

export class NotFoundError extends Error {
  constructor(message: string = 'NotFound') {
    super(message);
    this.name = 'NotFoundError';
  }
}

const notImplemented = <T>(): T => {
  throw new NotImplementedError();
};

export const getAllProblems = async (): Promise<ProblemListDTO[]> => {
  const problems: Problem[] = await db.findAllProblems();
  return problems.map((p) => ({
    id: p.id,
    title: p.title,
  }));
};

export const createNewProblem = async (
  title: string,
  description: string,
): Promise<number> => {
  const newProblem: Problem = await db.createProblem(title, description);
  return newProblem.id;
};

export const getIdProblem = async (id: number): Promise<Problem> => {
  const problem: Problem | undefined = await db.findProblemById(id);
  if (!problem) {
    throw new NotFoundError('Problem not found');
  }
  return problem;
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
