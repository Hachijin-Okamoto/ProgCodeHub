import express from 'express';
import cors from 'cors';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import path from 'path';
import { router } from './rest/router';
import { ruruHTML } from 'ruru/server';

const PORT: number = 8000;
const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

/* GraphQL */

const schema = buildSchema(`type Query { hello: String }`);

const root = {
  hello(): string {
    return 'Hello world!';
  },
};

app.all('/graphql', createHandler({ schema: schema, rootValue: root }));

app.get('/graphql-ui', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

/* ここまで */

const staticPath: string = path.join(__dirname, '..', 'Frontend', 'public');
app.use(express.static(staticPath));

app.get('/rest-ui', (_req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
