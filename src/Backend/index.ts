import express from 'express';
import { router } from './rest/router';
import cors from 'cors';
import path from 'node:path';

const PORT: number = 8000;
const app: express.Express = express();

app.use(cors());
app.use(express.json());

const staticPath = path.join(__dirname, '..', 'Frontend', 'public');

// 静的ファイルの設定
app.use(express.static(staticPath));

app.use('/api', router);

app.get('/', (_req, res) => {
  // 静的ファイルディレクトリの絶対パスと 'index.html' を結合して、絶対パスを生成
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
