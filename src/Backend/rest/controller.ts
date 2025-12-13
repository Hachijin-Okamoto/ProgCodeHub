import { Request, Response } from 'express';
import * as resourceService from './service';

export const getAllProblems = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problemIds: number[] = await resourceService.getAllProblems();
    res.status(200).json(problemIds);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const createNewProblem = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newProblemId: number = await resourceService.createNewProblem();
    res.status(201).json({ id: newProblemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdProblem = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const problemId: number = await resourceService.getIdProblem(0);
    res.status(200).json({ id: problemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const editIdProblem = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const editedProblemId: number = await resourceService.editIdProblem(0);
    res.status(200).json({ id: editedProblemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const deleteIdProblem = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deletedProblemId: number = await resourceService.deleteIdProblem(0);
    res.status(200).json({ id: deletedProblemId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getAllSubmissionsFromIdProblem = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const submissions: number[] =
      await resourceService.getAllSubmissionsFromIdProblem(0);
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
    const submissions: number[] = await resourceService.getAllSubmissions();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const createNewSubmission = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newSubmissionId: number = await resourceService.createNewSubmission();
    res.status(201).json({ id: newSubmissionId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};

export const getIdSubmission = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const submissionId: number = await resourceService.getIdSubmission(0);
    res.status(200).json({ id: submissionId });
  } catch (error) {
    res.status(503).send((error as Error).message);
  }
};
