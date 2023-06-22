import { IApiError } from '../models/apiError';

const generalError =
  (status: number) =>
  (message: string): IApiError => {
    return {
      status,
      message,
    };
  };

export const badRequestError = generalError(400);
