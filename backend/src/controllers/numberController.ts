import { numberRepository } from '../repositories/numberRepository';
import { NextFunction, Request, Response } from 'express';
import { badRequestError } from '../services/errorCreatorService';

export const numberController = {
  async getNumber(_req: Request, res: Response) {
    const number = await numberRepository.getNumber();
    res.status(200).json({ number });
  },

  async saveNumber(req: Request, res: Response, next: NextFunction) {
    const { number } = req.body;

    if (!number || isNaN(Number(number))) {
      return next(
        badRequestError('Invalid input. Please provide a valid number to save.')
      );
    }
    await numberRepository.saveNumber(number);

    res.status(200).send();
  },
};
