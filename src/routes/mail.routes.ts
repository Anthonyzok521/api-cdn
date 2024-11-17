import * as mailController from '../controllers/mailer.controller';
import { Router } from 'express';

const router = Router();

router.post('/mail', mailController.sendMail);

export default router;