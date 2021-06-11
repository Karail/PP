"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
exports.authRouter = router;
router.post('/login', controllers_1.authController.login);
router.post('/register', controllers_1.authController.register);
router.post('/logout', controllers_1.authController.logout);
//# sourceMappingURL=auth.route.js.map