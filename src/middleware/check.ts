import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface IData {	
  name: string;

}

export const check = (req: Request, res: Response, next: NextFunction) => {

  console.log(req.cookies);
  const token = req.cookies.mango as string;
  if (!token) {
     res.status(401).json({ message: 'No autorizado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    req.body.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
     res.status(400).json({ message: 'Token inválido' });
  }
};

