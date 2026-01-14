import { Request, Response } from 'express';
import { Problem } from '@problems/problem';
import {
  ProblemListDTO,
  CreateProblemDTO,
  EditProblemDTO,
} from '@problems/problem-dto';
import * as problemService from '@problems/problem-service';
import { Sample } from '@samples/sample';
import {
  SampleListDTO,
  CreateSampleDTO,
  EditSampleDTO,
} from '@samples/sample-dto';
import * as sampleService from '@samples/sample-service';
import { Submission } from '@submissions/submission';
import {
  SubmissionListDTO,
  CreateSubmissionDTO,
  EditSubmissionDTO,
} from '@submissions/submission-dto';
import * as resourceService from '@submissions/submission-service';

class NotFoundError extends Error {
  constructor(message: string = 'NotFound') {
    super(message);
    this.name = 'NotFoundError';
  }
}

/* Problems */

export const getAllProblems = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problems: ProblemListDTO[] = await problemService.getAllProblems();
    res.status(200).json(problems);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdProblem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problem: Problem = await problemService.getIdProblem(
      Number(req.params.id),
    );
    res.status(200).json(problem);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const createNewProblem = async (
  req: Request<unknown, unknown, CreateProblemDTO>,
  res: Response,
): Promise<void> => {
  try {
    const newProblemId: number = await problemService.createNewProblem(
      req.body,
    );
    res.status(201).json({ id: newProblemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const editIdProblem = async (
  req: Request<{ id: string }, unknown, EditProblemDTO>,
  res: Response,
): Promise<void> => {
  try {
    await problemService.editIdProblem(Number(req.params.id), req.body);
    res.status(204).send();
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const deleteIdProblem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    await problemService.deleteIdProblem(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

/* Problemsここまで */

/* Samples */

export const getAllSamples = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const samples: Sample[] = await sampleService.getAllSamples();
    res.status(200).json(samples);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdSample = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const sample: Sample = await sampleService.getIdSample(
      Number(req.params.id),
    );
    res.status(200).json(sample);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const getAllSamplesFromIdProblem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const samples: SampleListDTO[] =
      await sampleService.getAllSamplesByProblemId(Number(req.params.id));
    res.status(200).json(samples);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const createNewSample = async (
  req: Request<unknown, unknown, CreateSampleDTO>,
  res: Response,
): Promise<void> => {
  try {
    const newSampleId: number = await sampleService.createNewSample(req.body);
    res.status(201).json({ id: newSampleId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const editIdSample = async (
  req: Request<{ id: string }, unknown, EditSampleDTO>,
  res: Response,
): Promise<void> => {
  try {
    await sampleService.editIdSample(Number(req.params.id), req.body);
    res.status(204).send();
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const deleteIdSample = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    await sampleService.deleteIdSample(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

/* Samplesここまで */

/* Submissions */

export const getAllSubmissions = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const submissions: SubmissionListDTO[] =
      await resourceService.getAllSubmissions();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdSubmission = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const submission: Submission = await resourceService.getIdSubmission(
      Number(req.params.id),
    );
    res.status(200).json(submission);
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const getAllSubmissionsFromIdProblem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const submissions: SubmissionListDTO[] =
      await resourceService.getAllSubmissionsByProblemId(Number(req.params.id));
    res.status(200).json(submissions);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const createNewSubmission = async (
  req: Request<unknown, unknown, CreateSubmissionDTO>,
  res: Response,
): Promise<void> => {
  try {
    const newSubmissionId: number = await resourceService.createNewSubmission(
      req.body,
    );
    res.status(201).json({ id: newSubmissionId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const editIdSubmission = async (
  req: Request<{ id: string }, unknown, EditSubmissionDTO>,
  res: Response,
): Promise<void> => {
  try {
    await resourceService.editIdSubmission(Number(req.params.id), req.body);
    res.status(204).send();
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const deleteIdSubmission = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    await resourceService.deleteIdSubmission(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

/* Submissionsここまで */
