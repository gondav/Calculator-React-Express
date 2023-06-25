import { Request, Response } from 'express';
import { ApiError } from '../models/apiError';

export default function errorHandler(
  error: ApiError | Error,
  _req: Request,
  res: Response
) {
  if (error instanceof Error || !error.status) {
    return res
      .status(500)
      .send('Something went wrong, please try again later.');
  }
  return res.status(error.status).json(error.message);
}
