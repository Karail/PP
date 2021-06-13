"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.teacherRouter = router;
router.get('/one/:id', controllers_1.teacherController.findOne);
router.get('/all/', controllers_1.teacherController.findAll);
router.post('/create/', controllers_1.teacherController.create);
router.put('/edit/:id', controllers_1.teacherController.edit);
router.delete('/delete/:id', controllers_1.teacherController.delete);
//# sourceMappingURL=teachers.route.js.map