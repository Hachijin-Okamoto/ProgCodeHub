import express from 'express';
import { createQuestion, createSubmission, getQuestions, getSubmissions, getSubmissionsSubmitIdQuestion } from './controller';

export const router: express.Router = express.Router();

router.get('/', (_req, res) => {
  res.send('Hello from API root!');
});

router.get('/questions', (_req, res) => {
  res.json({ questions: getQuestions() });
});

router.post('/questions', (_req, res) => {
  res.json({ createdId: createQuestion("test question data")});
});

router.get("questions/:id", (_req, _res) => {
});

router.get("/questions/:id/submissions", (_req, res) => {
    res.json({submissions: getSubmissionsSubmitIdQuestion(-1)});
});

router.get("/submissions", (_req, res) => {
    res.json({ submissions: getSubmissions()});
});

router.post("/submissions", (_req, res) => {
    res.json({ createdId: createSubmission("test submission data")});
});

router.get("/submissions/:id", (_req, _res) => {
});