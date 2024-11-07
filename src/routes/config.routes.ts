import { Router } from 'express';
import * as configController from '../controllers/config.controller';

const router = Router();

router.get('/configs', configController.getConfigs); 

export default router;