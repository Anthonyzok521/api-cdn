import events from "../models/events";
import { Request, Response } from 'express';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const data = await events.find();
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: 'Error desconocido' });
    }
  }
}

export const createEvent = async (req: Request, res: Response) => {
  const { title, description, date, image } = req.body;

  if (!title || !description || !date || !image) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const newEvent = new events({ title, description, date, image });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: 'Error desconocido' });
    }
  }
}
  