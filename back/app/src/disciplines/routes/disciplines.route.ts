import { Router } from 'express';
//Controllers
import { disciplineController } from '../controllers';
//Middleware
import { passport } from '../../auth/middleware';

const router = Router();

router.get('/one/:id', disciplineController.findOne);
router.get('/all/', disciplineController.findAll);
router.post('/create/', disciplineController.create);
router.put('/edit/:id', disciplineController.edit);
router.delete('/delete/:id', disciplineController.delete);

export { router as disciplineRouter };