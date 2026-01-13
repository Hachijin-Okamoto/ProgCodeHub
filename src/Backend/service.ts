import { Problem } from './entities/problem';
import { Submission } from './entities/submission';
import {
  CreateProblemDTO,
  CreateSubmissionDTO,
  EditProblemDTO,
  ProblemListDTO,
  SubmissionListDTO,
} from './entities/dto';
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
  const problems = await prisma.problem.findMany({});
  return problems.map((p) => ({ id: p.id, title: p.title }));
};

export const createNewProblem = async (
  dto: CreateProblemDTO,
): Promise<number> => {
  const newProblem = await prisma.problem.create({
    data: {
      title: dto.title,
      body: dto.body,
    },
  });
  return newProblem.id;
};

export const getIdProblem = async (id: number): Promise<Problem> => {
  const problem = await prisma.problem.findUnique({
    where: { id: Number(id) },
    include: {
      submissions: true,
    },
  });

  if (!problem) {
    throw new NotFoundError('Problem not found');
  }
  return problem;
};

export const editIdProblem = async (dto: EditProblemDTO): Promise<number> => {
  try {
    const problem = await prisma.problem.update({
      where: { id: dto.id },
      data: { title: dto.title, body: dto.body },
    });
    return problem.id;
  } catch {
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

export const createNewSubmission = async (
  dto: CreateSubmissionDTO,
): Promise<number> => {
  const newSubmission = await prisma.submission.create({
    data: {
      problemId: dto.problemId,
      body: dto.body,
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
