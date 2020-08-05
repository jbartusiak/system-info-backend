import { env } from './config/env';

import Express from 'express';
import cors from 'cors';

import { corsOptions } from "./config/cors";
import healthRouter from "./routes/health";
import { dockerRouter } from "./routes/docker";

const app = Express();

console.log(`Starting ${ env.name } on port: ${ env.port }`)

app.use(cors(corsOptions));
app.use(Express.json());
app.use(healthRouter);
app.use('/docker', dockerRouter);

app.listen(env.port);

console.log(`App started and listening on port: ${ env.port }`);
