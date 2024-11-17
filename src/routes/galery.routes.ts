import { Router } from 'express';
import * as galeryController from '../controllers/galery.controller';
import upload  from '../libs/gallery';


const router = Router();

router.get('/gallery',  galeryController.getGalleries);
router.post('/gallery/create', upload.single('file'), galeryController.createGallery);
export default router;
