import { Router, Request, Response } from 'express';
import { authMiddleware } from '../controllers/auth.controller';
import {check} from '../middleware/check';

const router = Router();

router.post('/auth', authMiddleware);
router.get('/admin',check, (req: Request, res: Response) => {
    res.status(200).json({message: 'Autorizado', auth: true});
});

export default router;
