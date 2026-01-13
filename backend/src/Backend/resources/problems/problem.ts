import { Sample } from '@samples/sample';
import { Submission } from '@submissions/submission';

export type Problem = {
  id: number;
  title: string;
  body: string;
  level: number;

  samples: Sample[];
  submissions: Submission[];
};
