import { Sample } from '../../entities/sample';
import { SubmissionListDTO } from '../../entities/dto';
import * as resourceService from '../../service';

/* eslint-disable @typescript-eslint/typedef */
const resolvers = {
  Problem: {
    submissions: async (parent: {
      id: number;
    }): Promise<SubmissionListDTO[]> => {
      return await resourceService.getAllSubmissionsFromIdProblem(parent.id);
    },
    samples: async (parent: { id: number }): Promise<Sample[]> => {
      return await resourceService.getAllSamplesFromIdProblem(parent.id);
    },
  },
};

export default resolvers;
