import { SubmissionListDTO } from '@submissions/submission-dto';
import * as submissionService from '@submissions/submission-service';
import { Sample } from '@samples/sample';
import * as sampleService from '@samples/sample-service';

/* eslint-disable @typescript-eslint/typedef */
const resolvers = {
  Problem: {
    submissions: async (parent: {
      id: number;
    }): Promise<SubmissionListDTO[]> => {
      return await submissionService.getAllSubmissionsByProblemId(parent.id);
    },
    samples: async (parent: { id: number }): Promise<Sample[]> => {
      return await sampleService.getAllSamplesByProblemId(parent.id);
    },
  },
};

export default resolvers;
