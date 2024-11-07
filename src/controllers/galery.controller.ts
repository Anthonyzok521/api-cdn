import galleries from '../models/galleries';
import { Request, Response } from 'express';

export const getGalleries = async (req: Request, res: Response) => {
  try {
    const data = await galleries.find();
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: 'An unknown error occurred' });
    }
  }
}