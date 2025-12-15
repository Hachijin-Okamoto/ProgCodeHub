import { SubmissionListDTO } from '../../dto';
import * as resourceService from '../../service';

/* eslint-disable @typescript-eslint/typedef */
const resolvers = {
  Problem: {
    submissions: async (parent: {
      id: number;
    }): Promise<SubmissionListDTO[]> => {
      return await resourceService.getAllSubmissionsFromIdProblem(parent.id);
    },
  },
};

export default resolvers;
