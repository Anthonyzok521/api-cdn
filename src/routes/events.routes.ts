import { Router } from 'express';
import * as eventsController from '../controllers/events.controller';
import upload  from '../libs/galery';

const router = Router();

router.get('/events', eventsController.getEvents);
router.post('/events/create', upload.single('image'), eventsController.createEvent);

export default router;