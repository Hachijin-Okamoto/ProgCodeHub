import { prisma } from '../../lib/prisma';
import {
  SubmissionListDTO,
  CreateSubmissionDTO,
  EditSubmissionDTO,
} from '@submissions/submission-dto';
import { Submission } from '@submissions/submission';

class NotFoundError extends Error {
  constructor(message: string = 'NotFound') {
    super(message);
    this.name = 'NotFoundError';
  }
}

// prismaから返ってくる戻り値の型は型推論に任せる
/* eslint-disable @typescript-eslint/typedef */

export const getAllSubmissions = async (): Promise<SubmissionListDTO[]> => {
  const submissions = await prisma.submission.findMany();
  return submissions;
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

export const getAllSubmissionsByProblemId = async (
  problemId: number,
): Promise<SubmissionListDTO[]> => {
  const submissions = await prisma.submission.findMany({
    where: { problemId: Number(problemId) },
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
      language: dto.language,
      result: dto.result,
    },
  });
  return newSubmission.id;
};

export const editIdSubmission = async (
  id: number,
  dto: EditSubmissionDTO,
): Promise<number> => {
  try {
    const submission = await prisma.submission.update({
      where: { id: Number(id) },
      data: {
        problemId: dto.problemId,
        body: dto.body,
        language: dto.language,
        result: dto.result,
      },
    });
    return submission.id;
  } catch {
    throw new NotFoundError('Submission not found');
  }
};

export const deleteIdSubmission = async (id: number): Promise<void> => {
  try {
    await prisma.submission.delete({
      where: { id: Number(id) },
    });
  } catch {
    throw new NotFoundError('Submission not found');
  }
};
