import { Router } from 'express';
//Controllers
import { teacherDisciplineGroupController } from '../controllers';
//Middleware
import { passport } from '../../auth/middleware';

const router = Router();

router.get('/all/', teacherDisciplineGroupController.findAll);
router.put('/edit-many/', teacherDisciplineGroupController.editMany);
router.post('/create/', teacherDisciplineGroupController.create);
router.delete('/delete/:id', teacherDisciplineGroupController.delete);

export { router as teacherDisciplineGroupRouter };

