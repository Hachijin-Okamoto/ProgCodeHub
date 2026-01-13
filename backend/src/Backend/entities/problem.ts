import { Sample } from './sample';
import { Submission } from './submission';

export type Problem = {
  id: number;
  title: string;
  body: string;
  level: number;

  samples: Sample[];
  submissions: Submission[];
};
