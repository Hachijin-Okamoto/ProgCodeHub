import express from 'express';
import { router } from './rest/router';

const PORT: number = 8000;
const app: express.Express = express();

app.use('/api', router);
app.use(express.json());

app.get('/', (_req, res) => {
  res.redirect('/api');
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
