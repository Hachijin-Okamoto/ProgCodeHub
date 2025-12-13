import * as db from './mockDB/database';
import { Problem, Submission } from './mockDB/entity';
import { ProblemListDTO, SubmissionListDTO } from './dto';
import { prisma } from './lib/prisma';

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

const _notImplemented = <T>(): T => {
  throw new NotImplementedError();
};

export const getAllProblems = async (): Promise<ProblemListDTO[]> => {
  const problems = await prisma.problem.findMany({
    select: {
      id: true,
      title: true,
    },
  });
  return problems;
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

export const editIdProblem = async (
  id: number,
  title: string,
  description: string,
): Promise<number> => {
  const problem: Problem | undefined = await db.updateProblem(
    id,
    title,
    description,
  );
  if (!problem) {
    throw new NotFoundError('Problem not found');
  }
  return problem.id;
};

export const deleteIdProblem = async (id: number): Promise<void> => {
  const isDeleted: boolean = await db.deleteProblem(id);
  if (!isDeleted) {
    throw new Error('Failed to delete problem');
  }
};

export const getAllSubmissionsFromIdProblem = async (
  problemId: number,
): Promise<SubmissionListDTO[]> => {
  const submissions: Submission[] =
    await db.findSubmissionsByProblemId(problemId);
  return submissions.map((s) => ({
    id: s.id,
    problemId: s.problemId,
  }));
};

export const getAllSubmissions = async (): Promise<SubmissionListDTO[]> => {
  const submissions: Submission[] = await db.findSubmissions();
  return submissions.map((s) => ({
    id: s.id,
    problemId: s.problemId,
  }));
};

export const createNewSubmission = async (
  problemId: number,
  userName: string,
  code: string,
): Promise<number> => {
  const newSubmission: Submission = await db.createSubmission(
    problemId,
    userName,
    code,
  );
  return newSubmission.id;
};

export const getIdSubmission = async (id: number): Promise<Submission> => {
  const submission: Submission | undefined = await db.findSubmissionById(id);
  if (!submission) {
    throw new NotFoundError('Submission not found');
  }
  return submission;
};
