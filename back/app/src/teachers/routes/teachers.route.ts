import { Router } from 'express';
//Controllers
import { teacherController } from '../controllers';
//Middleware
import { passport } from '../../auth/middleware';

const router = Router();

router.get('/one/:id', teacherController.findOne);
router.get('/all/', teacherController.findAll);
router.post('/create/', teacherController.create);
router.put('/edit/:id', teacherController.edit);
router.delete('/delete/:id', teacherController.delete);

export { router as teacherRouter };