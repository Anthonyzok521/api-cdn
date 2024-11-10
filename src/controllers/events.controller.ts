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

export const createEvent = async (req: Request, res: Response): Promise<void> => {
  const { title, description, location } = req.body;

  if (!title || !description || !location) {
    res.status(400).json({ message: 'Todos los campos son requeridos' });
    return;
  }
 
  try {
    const newEvent = new events({ 
      title, 
      description, 
      image: 'https://cdn.mariachici.com/media/' + req.file?.path,
      datetime: new Date(),
      location });

    await newEvent.save();

    console.log(req.file);
    res.status(200).json({ message: 'Event created' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
  