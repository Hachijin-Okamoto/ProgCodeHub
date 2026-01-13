import { ProblemListDTO } from '../../entities/dto';
import { Problem } from '../../entities/problem';
import { Submission } from '../../entities/submission';
import * as resourceService from '../../service';

/* eslint-disable @typescript-eslint/typedef */
const resolvers = {
  Query: {
    problems: async (): Promise<ProblemListDTO[]> => {
      return await resourceService.getAllProblems();
    },
    problem: async (_: unknown, args: { id: number }): Promise<Problem> => {
      return await resourceService.getIdProblem(args.id);
    },
    submission: async (
      _: unknown,
      args: { id: number },
    ): Promise<Submission> => {
      return await resourceService.getIdSubmission(args.id);
    },
  },
};

export default resolvers;
