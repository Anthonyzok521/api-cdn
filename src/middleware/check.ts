import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const check = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.mango
        if (!token) { res.status(401).json({ message: 'No autorizado', auth: false }); return; }

        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        req.body.user = decoded;

        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido', auth: false });
    }
};
