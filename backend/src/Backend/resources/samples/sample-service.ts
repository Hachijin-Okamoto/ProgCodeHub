import { prisma } from '../../lib/prisma';
import {
  SampleListDTO,
  CreateSampleDTO,
  EditSampleDTO,
} from '@samples/sample-dto';
import { Sample } from '@samples/sample';

class NotFoundError extends Error {
  constructor(message: string = 'NotFound') {
    super(message);
    this.name = 'NotFoundError';
  }
}

// prismaから返ってくる戻り値の型は型推論に任せる
/* eslint-disable @typescript-eslint/typedef */

export const getAllSamples = async (): Promise<SampleListDTO[]> => {
  const samples = await prisma.sample.findMany({});
  return samples;
};

export const getIdSample = async (id: number): Promise<Sample> => {
  const sample = await prisma.sample.findUnique({
    where: { id: Number(id) },
  });

  if (!sample) {
    throw new NotFoundError('Sample not found');
  }
  return sample;
};

export const getAllSamplesByProblemId = async (
  problemId: number,
): Promise<SampleListDTO[]> => {
  const samples = await prisma.sample.findMany({
    where: { problemId: Number(problemId) },
  });
  return samples;
};

export const createNewSample = async (
  dto: CreateSampleDTO,
): Promise<number> => {
  const newSample = await prisma.sample.create({
    data: {
      input: dto.input,
      output: dto.output,
      problemId: dto.problemId,
    },
  });
  return newSample.id;
};

export const editIdSample = async (
  id: number,
  dto: EditSampleDTO,
): Promise<number> => {
  try {
    const problem = await prisma.sample.update({
      where: { id },
      data: {
        problemId: dto.problemId,
        input: dto.input,
        output: dto.output,
      },
    });
    return problem.id;
  } catch {
    throw new NotFoundError('Sample not found');
  }
};

export const deleteIdSample = async (id: number): Promise<void> => {
  try {
    await prisma.sample.delete({
      where: { id },
    });
  } catch {
    throw new NotFoundError('Sample not found');
  }
};
