import multer from 'multer';
import { NextFunction, Request, Response } from 'express';
// @ts-ignore
import ftpStorage from 'multer-ftp';
import path from 'path';
import ftp from 'ftp';
import galleries from '../models/galleries';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.FTP_HOST || '';
const user = process.env.FTP_USER || '';
const password = process.env.FTP_PASSWORD || '';
const port = process.env.FTP_PORT || 3000;

export const upload = multer({
  storage: new ftpStorage({
    basepath: '/remote/media/',
    ftp: {
      host: host,
      secureOptions: { rejectUnauthorized: false },
      secure: true,
      user: user,
      password: password,
      port: port
    },

    destination: (req: Request, file: any, options: any, callback: any) => {
      callback(null, 'media/' + uuidv4() + path.extname(file.originalname));
    }
  })
});

export const deleteFile = async (req: Request, res: Response, next: NextFunction) => {

  try{
  const client =  new ftp();
  const path = await galleries.findById(req.params._id);
  console.log(path.path.split('com/')[1]);
    client.connect({
      host: host,
      secureOptions: { rejectUnauthorized: false },
      secure: true,
      user: user,
      password: password,
      port: port as number
    });
  client.on('ready',  () => {
    client.delete(path.path.split('com/')[1], (err) => {
   
      if (err) {
        console.log('Failed to delete file from FTP', err.message);
      }
      client.end();
      next();
    });
    
  });
  } catch (error) {
    res.status(404).json({ message: 'An unknown error occurred' });
  }
}

