import {Router} from 'express';
import * as eventsController from '../controllers/events.controller';

const router = Router();

router.get('/events', eventsController.getEvents);

export default router;