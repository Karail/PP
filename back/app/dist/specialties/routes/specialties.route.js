"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.specializationRouter = router;
router.get('/one/:id', controllers_1.specializationController.findOne);
router.get('/all/', controllers_1.specializationController.findAll);
router.post('/create/', controllers_1.specializationController.create);
router.put('/edit/:id', controllers_1.specializationController.edit);
router.delete('/delete/:id', controllers_1.specializationController.delete);
//# sourceMappingURL=specialties.route.js.map