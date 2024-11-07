import {Router} from 'express';
import * as galeryController from '../controllers/galery.controller';
import upload from '../libs/galery';

const router = Router();

router.get('/galery', upload.single('image') ,galeryController.getGalleries);

export default router;