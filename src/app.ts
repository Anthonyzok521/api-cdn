import express from 'express';
import './db';
import dotenv from 'dotenv';
dotenv.config();


import configRoutes from './routes/config.routes';
import eventsRoutes from './routes/events.routes';
import galeryRoutes from './routes/galery.routes';
import authRoutes from './routes/auth.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use('/api', configRoutes);
app.use('/api', eventsRoutes);
app.use('/api', galeryRoutes);
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});