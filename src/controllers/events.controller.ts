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
  const { name, description, city, imageUrl, date, fullDescription } = req.body;

  if (!name || !description || !city || !imageUrl || !date || !fullDescription) {
    res.status(400).json({ message: 'Todos los campos son requeridos' });
    return;
  }
 
  try {
    const newEvent = new events({ 
      name, 
      description,
      fullDescription,
      imageUrl,
      date, 
      city });

    await newEvent.save();

    console.log(newEvent);
    res.status(200).json({ message: 'Event created' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}

export const deleteEvent = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    await events.findByIdAndDelete(_id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
  