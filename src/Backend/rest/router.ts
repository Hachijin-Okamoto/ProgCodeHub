import express from 'express';
import {
  createNewProblem,
  createNewSubmission,
  deleteIdProblem,
  editIdProblem,
  getAllProblems,
  getAllSubmissions,
  getAllSubmissionsFromIdProblem,
  getIdProblem,
  getIdSubmission,
} from './controller';
import cors from 'cors';

export const router: express.Router = express.Router();

router.use(cors());

router.get('/', (_req, res) => {
  res.send('Hello from API root!');
});

router.get('/problems', getAllProblems);

router.post('/problems', createNewProblem);

router.get('/problems/:id', getIdProblem);

router.put('/problems/:id', editIdProblem);

router.delete('/problems/:id', deleteIdProblem);

router.get('/problems/:id/submissions', getAllSubmissionsFromIdProblem);

router.get('/submissions', getAllSubmissions);

router.post('/submissions', createNewSubmission);

router.get('/submissions/:id', getIdSubmission);
