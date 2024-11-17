import { Router } from 'express';
import * as galeryController from '../controllers/galery.controller';
import * as ftp from '../libs/gallery';


const router = Router();

router.get('/gallery',  galeryController.getGalleries);
router.post('/gallery/create', ftp.upload.single('file'), galeryController.createGallery);
router.delete('/gallery/delete/:_id',ftp.deleteFile, galeryController.deleteGallery);
export default router;
