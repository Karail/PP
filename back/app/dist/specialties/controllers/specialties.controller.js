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
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationController = void 0;
const decorators_1 = require("../../shared/decorators");
const schemas_1 = require("../schemas");
const app_logger_1 = require("../../app.logger");
class SpecializationController {
    constructor(specializationModel) {
        this.specializationModel = specializationModel;
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const notes = yield this.specializationModel.findOne({ _id: id }).lean();
                res.json(notes);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield this.specializationModel.find().lean();
                res.json(notes);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, code } = req.body;
                const note = yield this.specializationModel.create({ name, code });
                res.json(note);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, code } = req.body;
                const { id } = req.params;
                const note = yield this.specializationModel.updateOne({ _id: id }, { name, code });
                res.json(note);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const note = yield this.specializationModel.findOne({ _id: id }).lean();
                if (!note) {
                    return res.status(400).send({ message: 'The specialization is not found' });
                }
                const result = yield this.specializationModel.deleteOne({ _id: id }).lean();
                res.json(result);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
}
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecializationController.prototype, "findOne", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecializationController.prototype, "findAll", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecializationController.prototype, "create", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecializationController.prototype, "edit", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecializationController.prototype, "delete", null);
exports.specializationController = new SpecializationController(schemas_1.Specialization);
//# sourceMappingURL=specialties.controller.js.map