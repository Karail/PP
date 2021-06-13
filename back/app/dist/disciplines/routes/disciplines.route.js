"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disciplineRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.disciplineRouter = router;
router.get('/one/:id', controllers_1.disciplineController.findOne);
router.get('/all/', controllers_1.disciplineController.findAll);
router.post('/create/', controllers_1.disciplineController.create);
router.put('/edit/:id', controllers_1.disciplineController.edit);
router.delete('/delete/:id', controllers_1.disciplineController.delete);
//# sourceMappingURL=disciplines.route.js.map