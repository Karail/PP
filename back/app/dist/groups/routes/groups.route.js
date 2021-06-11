"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.groupRouter = router;
router.get('/one/:id', controllers_1.groupController.findOne);
router.get('/all/', controllers_1.groupController.findAll);
router.post('/create/', controllers_1.groupController.create);
router.put('/edit/:id', controllers_1.groupController.edit);
router.delete('/delete/:id', controllers_1.groupController.delete);
//# sourceMappingURL=groups.route.js.map