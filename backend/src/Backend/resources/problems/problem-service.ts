import { prisma } from '../../lib/prisma';
import {
  ProblemListDTO,
  CreateProblemDTO,
  EditProblemDTO,
} from '@problems/problem-dto';
import { Problem } from '@problems/problem';

class NotFoundError extends Error {
  constructor(message: string = 'NotFound') {
    super(message);
    this.name = 'NotFoundError';
  }
}

// prismaから返ってくる戻り値の型は型推論に任せる
/* eslint-disable @typescript-eslint/typedef */

export const getAllProblems = async (): Promise<ProblemListDTO[]> => {
  const problems = await prisma.problem.findMany({});
  return problems;
};

export const getIdProblem = async (id: number): Promise<Problem> => {
  const problem = await prisma.problem.findUnique({
    where: { id: Number(id) },
    include: {
      samples: true,
      submissions: true,
    },
  });

  if (!problem) {
    throw new NotFoundError('Problem not found');
  }
  return problem;
};

export const createNewProblem = async (
  dto: CreateProblemDTO,
): Promise<number> => {
  const newProblem = await prisma.problem.create({
    data: {
      title: dto.title,
      body: dto.body,
      level: dto.level,
    },
  });
  return newProblem.id;
};

export const editIdProblem = async (
  id: number,
  dto: EditProblemDTO,
): Promise<number> => {
  try {
    const problem = await prisma.problem.update({
      where: { id },
      data: { title: dto.title, body: dto.body, level: dto.level },
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
