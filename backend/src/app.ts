import express from 'express';
import { numberRouter } from './routes/numberRoutes';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', numberRouter);
app.use(errorHandler);

export default app;
