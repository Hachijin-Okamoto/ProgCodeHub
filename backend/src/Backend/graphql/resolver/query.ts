import { ProblemListDTO } from '@problems/problem-dto';
import { Problem } from '@problems/problem';
import * as problemService from '@problems/problem-service';
import { SampleListDTO } from '@samples/sample-dto';
import { Sample } from '@samples/sample';
import * as sampleService from '@samples/sample-service';
import { SubmissionListDTO } from '@submissions/submission-dto';
import { Submission } from '@submissions/submission';
import * as submissionService from '@submissions/submission-service';

/* eslint-disable @typescript-eslint/typedef */
const resolvers = {
  Query: {
    problems: async (): Promise<ProblemListDTO[]> => {
      return await problemService.getAllProblems();
    },
    problem: async (_: unknown, args: { id: number }): Promise<Problem> => {
      return await problemService.getIdProblem(args.id);
    },
    samples: async (): Promise<SampleListDTO[]> => {
      return await sampleService.getAllSamples();
    },
    sample: async (_: unknown, args: { id: number }): Promise<Sample> => {
      return await sampleService.getIdSample(args.id);
    },
    submissions: async (): Promise<SubmissionListDTO[]> => {
      return await submissionService.getAllSubmissions();
    },
    submission: async (
      _: unknown,
      args: { id: number },
    ): Promise<Submission> => {
      return await submissionService.getIdSubmission(args.id);
    },
  },
};

export default resolvers;
