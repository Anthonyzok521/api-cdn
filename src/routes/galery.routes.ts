import { Router } from 'express';
import * as galeryController from '../controllers/galery.controller';


const router = Router();

router.get('/galery', galeryController.getGalleries);
export default router;