import { Router } from 'express';
import * as galeryController from '../controllers/galery.controller';
import upload  from '../libs/galery';


const router = Router();

router.get('/galery',  galeryController.getGalleries);
router.post('/galery/create', upload.single('file'), galeryController.createGallery);
export default router;