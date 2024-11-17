import galleries from '../models/galleries';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const getGalleries = async (req: Request, res: Response) => {
    try {
        const data = await galleries.find();
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof Error) { res.status(404).json({ message: error.message }); return; }
        res.status(404).json({ message: 'An unknown error occurred' }); return;
    }
}

export const createGallery = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, type, } = req.body;

        if (!title || !type) { res.status(400).json({ message: 'All fields are required' }); return; }

        const mediaUrl = process.env.MEDIA_URL || 'https://cdn.mariachici.com/';
        const newGallery = new galleries({
            title,
            type,
            path: mediaUrl + req.file?.path
        });

        await newGallery.save();

        res.status(200).json({ message: 'Gallery created' });
    } catch (error) {
        if (error instanceof Error) { res.status(404).json({ message: error.message }); return; }
        res.status(404).json({ message: 'An unknown error occurred' }); return;
    }
}
