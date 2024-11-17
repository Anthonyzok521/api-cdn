import { text } from "stream/consumers";
import transporter from "../libs/mailer";
import { Request, Response } from 'express';

export const sendMail = async (req: Request, res: Response) => {
    try {
        const { email, message, name } = req.body;

        if (!email || !message || !name) { res.status(400).json({ message: 'All fields are required' }); return; }

        const mailOptions = {
            from: email,
            to: 'contacto@mariachici.com',
            subject: 'Mensaje enviado desde Mariachici.com',
            text: message
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent' });
    
    } catch (error) {
        res.status(404).json({ message: 'An unknown error occurred' });
    }   
}