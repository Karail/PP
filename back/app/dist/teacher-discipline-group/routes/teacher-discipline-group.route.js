"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherDisciplineGroupRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.teacherDisciplineGroupRouter = router;
router.get('/all/', controllers_1.teacherDisciplineGroupController.findAll);
router.put('/edit-many/', controllers_1.teacherDisciplineGroupController.editMany);
router.post('/create/', controllers_1.teacherDisciplineGroupController.create);
router.delete('/delete/:id', controllers_1.teacherDisciplineGroupController.delete);
//# sourceMappingURL=teacher-discipline-group.route.js.map