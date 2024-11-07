import express from 'express';
import './db';
import dotenv from 'dotenv';
dotenv.config();


import configRoutes from './routes/config.routes';
import eventsRoutes from './routes/events.routes';
import galeryRoutes from './routes/galery.routes';


const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', configRoutes);
app.use('/api', eventsRoutes);
app.use('/api', galeryRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});