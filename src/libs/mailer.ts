import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'mail.mariachici.com',
    port: 587,
    secure: false, // Cambiado a false para usar STARTTLS
    auth: {
        user: 'contacto@mariachici.com',
        pass: 'Mariachici123*'
    },
    tls: {
        rejectUnauthorized: false
    },
    requireTLS: true // Forzar el uso de STARTTLS
});

transporter.verify().then(() => { console.log('Ready to send emails') });

export default transporter;