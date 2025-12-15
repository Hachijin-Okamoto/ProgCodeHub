import { ProblemListDTO, SubmissionListDTO } from '../../dto';
import { Problem, Submission } from '../../mockDB/entity';
import * as resourceService from '../../service';

const resolvers = {
  Query: {
    hello: (): string => 'Hello world!',

    problems: async (): Promise<ProblemListDTO[]> => {
      return await resourceService.getAllProblems();
    },
    problem: async (_: unknown, args: { id: number }): Promise<Problem> => {
      return await resourceService.getIdProblem(args.id);
    },

    submissions: async (): Promise<SubmissionListDTO[]> => {
      return await resourceService.getAllSubmissions();
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
