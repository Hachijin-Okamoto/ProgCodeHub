import express from 'express';

const PORT: number = 8000;
const app: express.Express = express();

app.get('/', (_req, res) => {
  res.send('Hello from Backend!');
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
