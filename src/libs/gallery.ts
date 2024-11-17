import multer from 'multer';
import { NextFunction, Request, Response } from 'express';
// @ts-ignore
import ftpStorage from 'multer-ftp';
import path from 'path';
import ftp from 'ftp';
import galleries from '../models/galleries';
import { v4 as uuidv4 } from 'uuid';

export const upload = multer({
  storage: new ftpStorage({
    basepath: '/remote/media/',
    ftp: {
      host: '157.173.125.177',
      secureOptions: { rejectUnauthorized: false },
      secure: true,
      user: 'acteam',
      password: 'Bf38pPcwRBkPMnsH',
      port: 21
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
      host: '157.173.125.177',
      secureOptions: { rejectUnauthorized: false },
      secure: true,
      user: 'acteam',
      password: 'Bf38pPcwRBkPMnsH',
      port: 21
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

