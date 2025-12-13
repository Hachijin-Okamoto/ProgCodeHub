import { Request, Response } from 'express';

class NotimplementedError extends Error {
    constructor(message = "NotImplemented") {
        super(message);
        this.name = "NotImplementedError";
    }
}

const notImplemented = <T>(): T => {
    throw new NotimplementedError();
};

export const getAllProblems = (_req: Request, _res: Response): number[] => {
    return notImplemented<number[]>();
};

export const createNewQuestion = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const getIdProblem = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const editIdProblem = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const deleteIdProblem = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const getAllSubmissionsFromIdProblem = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const getAllSubmissions = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const createNewSubmission = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}

export const getIdSubmission = (_req: Request, _res: Response): number => {
    return notImplemented<number>();
}