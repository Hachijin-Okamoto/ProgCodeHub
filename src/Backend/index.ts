import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import path from 'path';
import { router } from './rest/router';
import { ruruHTML } from 'ruru/server';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';

const PORT: number = 8000;
const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

/* GraphQL */

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, 'graphql', 'entity')),
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, 'graphql', 'resolver')),
);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.all('/graphql', createHandler({ schema }));

app.get('/ui/graphql', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

/* ここまで */

const staticPath: string = path.join(__dirname, '..', 'Frontend', 'public');
app.use(express.static(staticPath));

app.get('/ui/rest', (_req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
