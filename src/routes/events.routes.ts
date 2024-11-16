import { Router } from 'express';
import * as eventsController from '../controllers/events.controller';


const router = Router();

router.get('/events', eventsController.getEvents);
router.post('/events/create', eventsController.createEvent);
router.delete('/events/delete/:_id', eventsController.deleteEvent);
export default router;