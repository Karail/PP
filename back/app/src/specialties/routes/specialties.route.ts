import { Router } from 'express';
//Controllers
import { specializationController } from '../controllers';
//Middleware
import { passport } from '../../auth/middleware';

const router = Router();

router.get('/one/:id', specializationController.findOne);
router.get('/all/', specializationController.findAll);
router.post('/create/', specializationController.create);
router.put('/edit/:id', specializationController.edit);
router.delete('/delete/:id', specializationController.delete);

export { router as specializationRouter };