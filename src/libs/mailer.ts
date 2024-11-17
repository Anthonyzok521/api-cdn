import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const smtp_host = process.env.SMTP_HOST || '';
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASS || '';
const port = parseInt(process.env.SMTP_PORT || '587', 10);

const transporter = nodemailer.createTransport({
    host: smtp_host,
    port: port,
    secure: false, // Cambiado a false para usar STARTTLS
    auth: {
        user: user,
        pass: pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify().then(() => { console.log('Ready to send emails') });

export default transporter;