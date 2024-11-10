import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
// @ts-ignore
import ftpStorage from 'multer-ftp';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const upload = multer({
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
      callback(null, uuidv4() + path.extname(file.originalname));
    }
  })
});

export default upload;
