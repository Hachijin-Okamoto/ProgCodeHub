import { Request, Response } from 'express';
import * as resourceService from '../service';
import {
  CreateProblemDTO,
  CreateSubmissionDTO,
  EditProblemDTO,
  ProblemListDTO,
  SubmissionListDTO,
} from '../dto';
import { Problem, Submission } from '../mockDB/entity';

export const getAllProblems = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problems: ProblemListDTO[] = await resourceService.getAllProblems();
    res.status(200).json(problems);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const createNewProblem = async (
  req: Request<unknown, unknown, CreateProblemDTO>,
  res: Response,
): Promise<void> => {
  try {
    const newProblemId: number = await resourceService.createNewProblem(
      req.body.title,
      req.body.description,
    );
    res.status(201).json({ id: newProblemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdProblem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problem: Problem = await resourceService.getIdProblem(
      Number(req.params.id),
    );
    res.status(200).json(problem);
  } catch (error) {
    if (error instanceof resourceService.NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const editIdProblem = async (
  req: Request<unknown, unknown, EditProblemDTO>,
  res: Response,
): Promise<void> => {
  try {
    await resourceService.editIdProblem(
      req.body.id,
      req.body.title,
      req.body.description,
    );
    res.status(204).send();
  } catch (error) {
    if (error instanceof resourceService.NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};

export const deleteIdProblem = async (
  req: Request<unknown, unknown, { id: number }>, // DTO作った方がいい？
  res: Response,
): Promise<void> => {
  try {
    await resourceService.deleteIdProblem(req.body.id);
    res.status(204).send();
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getAllSubmissionsFromIdProblem = async (
  req: Request<unknown, unknown, { problemId: number }>, // DTO作った方がいい？
  res: Response,
): Promise<void> => {
  try {
    const submissions: SubmissionListDTO[] =
      await resourceService.getAllSubmissionsFromIdProblem(req.body.problemId);
    res.status(200).json(submissions);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

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

export const createNewSubmission = async (
  req: Request<unknown, unknown, CreateSubmissionDTO>,
  res: Response,
): Promise<void> => {
  try {
    const newSubmissionId: number = await resourceService.createNewSubmission(
      req.body.problemId,
      req.body.userName,
      req.body.code,
    );
    res.status(201).json({ id: newSubmissionId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdSubmission = async (
  req: Request, // DTO作った方がいい？
  res: Response,
): Promise<void> => {
  try {
    const submission: Submission = await resourceService.getIdSubmission(
      Number(req.params.id),
    );
    res.status(200).json(submission);
  } catch (error) {
    if (error instanceof resourceService.NotFoundError) {
      res.status(404).send((error as Error).message);
    } else {
      res.status(503).send((error as Error).message);
    }
  }
};
