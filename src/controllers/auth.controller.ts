import dotenv from 'dotenv';
import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


dotenv.config();

// Middleware de autenticación
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    try {
      if (password === process.env.AUTH) {
        const token = jwt.sign({ password }, process.env.SECRET_KEY as string);
        res.cookie('mango', token);
        console.log(req.get('mango'));
        res.status(200).json({ message: 'Autenticado' });
      } else {
        res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    } catch (error: unknown) {
      res.status(404).json({ message: 'Error desconocido' });
    }
  };