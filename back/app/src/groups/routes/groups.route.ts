import { Router } from 'express';
//Controllers
import { groupController } from '../controllers';
//Middleware
import { passport } from '../../auth/middleware';

const router = Router();

router.get('/one/:id', groupController.findOne);
router.get('/all/', groupController.findAll);
router.post('/create/', groupController.create);
router.put('/edit/:id', groupController.edit);
router.delete('/delete/:id', groupController.delete);

export { router as groupRouter };