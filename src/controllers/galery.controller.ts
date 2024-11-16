import galleries from '../models/galleries';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

export const getGalleries = async (req: Request, res: Response) => {
  try {
    const data = await galleries.find();
    const image = data[0];
    res.status(200).json(image._id);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: 'An unknown error occurred' });
    }
  }
}

export const createGallery = async (req: Request, res: Response): Promise<void> => {
  const { title, type, } = req.body;

  if (!title || !type) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }
 
  try {

    const mediaUrl = process.env.MEDIA_URL || 'https://cdn.mariachici.com/';
    const newGallery = new galleries({ 

      title, 
      type,
      path: mediaUrl + req.file?.path});

    await newGallery.save();

    console.log(newGallery);
  
    res.status(200).json({ message: 'Gallery created' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
