import { ApiError } from '../models/apiError';

const generalError =
  (status: number) =>
  (message: string): ApiError => {
    return {
      status,
      message,
    };
  };

export const badRequestError = generalError(400);
