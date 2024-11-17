import dotenv from 'dotenv';
import { Request, Response, NextFunction, response } from 'express';
import jwt from 'jsonwebtoken';


dotenv.config();

// Middleware de autenticación
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password } = req.body;

        if (password !== process.env.AUTH) { res.status(401).json({ message: 'Contraseña incorrecta', auth: false }); return }

        const token = jwt.sign({ password }, process.env.SECRET_KEY as string);
        res.status(200).json({ message: 'Autenticado', auth: true, token: token });

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error desconocido', auth: false, error: error });
    }
};
