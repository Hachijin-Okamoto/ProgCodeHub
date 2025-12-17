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

// prismaから返ってくる戻り値の型は型推論に任せる
/* eslint-disable @typescript-eslint/typedef */

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
  const newProblem = await prisma.problem.create({
    data: {
      title,
      description,
    },
  });
  return newProblem.id;
};

export const getIdProblem = async (id: number): Promise<Problem> => {
  const problem = await prisma.problem.findUnique({
    where: { id: Number(id) },
  });

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
  try {
    const problem = await prisma.problem.update({
      where: { id },
      data: { title, description },
    });
    return problem.id;
  } catch {
    // Prisma P2025 (Record not found)
    throw new NotFoundError('Problem not found');
  }
};

export const deleteIdProblem = async (id: number): Promise<void> => {
  try {
    await prisma.problem.delete({
      where: { id },
    });
  } catch {
    throw new NotFoundError('Problem not found');
  }
};

export const getAllSubmissionsFromIdProblem = async (
  problemId: number,
): Promise<SubmissionListDTO[]> => {
  const submissions = await prisma.submission.findMany({
    where: { problemId },
  });

  return submissions;
};

export const getAllSubmissions = async (): Promise<SubmissionListDTO[]> => {
  const submissions = await prisma.submission.findMany({
    select: {
      id: true,
      problemId: true,
    },
  });

  return submissions;
};

export const createNewSubmission = async (
  problemId: number,
  userName: string,
  code: string,
): Promise<number> => {
  const newSubmission = await prisma.submission.create({
    data: {
      problemId,
      userName,
      code,
    },
  });
  return newSubmission.id;
};

export const getIdSubmission = async (id: number): Promise<Submission> => {
  const submission = await prisma.submission.findUnique({
    where: { id: Number(id) },
  });

  if (!submission) {
    throw new NotFoundError('Submission not found');
  }

  return submission;
};
