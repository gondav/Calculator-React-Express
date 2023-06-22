import { numberRepository } from '../repositories/numberRepository';
import { Request, Response } from 'express';

export const numberController = {
  async getNumber(_req: Request, res: Response) {
    const number = await numberRepository.getNumber();
    res.status(200).json({ number });
  },

  async saveNumber(req: Request, res: Response) {
    const { number } = req.body;
    await numberRepository.saveNumber(number);

    res.status(200).send();
  },
};
