import express from 'express';
import './db';
import dotenv from 'dotenv';
dotenv.config();

import configRoutes from './routes/config.routes';
import eventsRoutes from './routes/events.routes';
import galeryRoutes from './routes/galery.routes';
import mailRoutes from './routes/mail.routes';
import authRoutes from './routes/auth.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

const app = express();
const port = process.env.PORT

app.use(cookieParser(process.env.SECRET_KEY?.toString(), {

}));
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api', configRoutes);
app.use('/api', eventsRoutes);
app.use('/api', galeryRoutes);
app.use('/api', authRoutes);
app.use('/api', mailRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
