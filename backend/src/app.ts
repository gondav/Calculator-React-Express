import express from 'express';
import { numberRouter } from './routes/numberRoutes';

const app = express();
app.use(express.json());

app.use('/api', numberRouter);

export default app;
