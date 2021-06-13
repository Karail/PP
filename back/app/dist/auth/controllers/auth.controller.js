"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const decorators_1 = require("../../shared/decorators");
const schemas_1 = require("../../user/schemas");
const app_logger_1 = require("../../app.logger");
const services_1 = require("../services");
class AuthController {
    constructor(userModel, authService) {
        this.userModel = userModel;
        this.authService = authService;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.user) {
                const jwt = this.authService.createToken(req.user);
                return res.send(jwt);
            }
            try {
                const { login, password } = req.body;
                const candidate = yield this.userModel.findOne({ login }).lean();
                if (!candidate) {
                    return res.status(400).send({ message: 'The user is not found' });
                }
                const isMatch = yield bcryptjs_1.default.compare(password, candidate.password);
                if (!isMatch)
                    return res.status(400).json({ message: 'invalid password' });
                const jwt = this.authService.createToken(candidate);
                res.send(jwt);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                const candidate = yield this.userModel.findOne({ login }).lean();
                if (candidate) {
                    return res.status(400).send({ message: 'The user is already registered' });
                }
                const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
                const user = (yield this.userModel.create({ login, password: hashedPassword })).toObject();
                const jwt = this.authService.createToken(user);
                res.send(jwt);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.logout();
            res.send(true);
        });
    }
}
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.authController = new AuthController(schemas_1.User, services_1.authService);
//# sourceMappingURL=auth.controller.js.map