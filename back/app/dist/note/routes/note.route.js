"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../../auth/middleware");
const router = express_1.Router();
exports.noteRouter = router;
router.get('/all/', controllers_1.noteController.findAll);
router.post('/one/', controllers_1.noteController.findOne);
router.post('/create/', middleware_1.passport.authenticate('jwt'), controllers_1.noteController.create);
router.put('/consumed/:id', controllers_1.noteController.consumed);
router.put('/relieve/:id', controllers_1.noteController.relieve);
router.delete('/delete/:id', middleware_1.passport.authenticate('jwt'), controllers_1.noteController.delete);
//# sourceMappingURL=note.route.js.map