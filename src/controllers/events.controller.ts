import events from "../models/events";
import { Request, Response } from 'express';

export const getEvents = async (req: Request, res: Response) => {
    try {
        const data = await events.find();
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof Error) { res.status(404).json({ message: error.message }); return; }
        res.status(404).json({ message: 'An unknown error occurred' }); return;
    }
}

export const createEvent = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, description, city, imageUrl, date, fullDescription } = req.body;

        if (!name || !description || !city || !imageUrl || !date || !fullDescription) { res.status(400).json({ message: 'Todos los campos son requeridos' }); return; }
        const newEvent = new events({
            name,
            description,
            fullDescription,
            imageUrl,
            date,
            city
        });

        await newEvent.save();

        res.status(200).json({ message: 'Event created' });
    } catch (error) {
        if (error instanceof Error) { res.status(404).json({ message: error.message }); return; }
        res.status(404).json({ message: 'An unknown error occurred' }); return;
    }
}

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        await events.findByIdAndDelete(_id);
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        if (error instanceof Error) { res.status(404).json({ message: error.message }); return; }
        res.status(404).json({ message: 'An unknown error occurred' }); return;
    }
}
