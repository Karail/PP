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
exports.noteController = void 0;
const moment_1 = __importDefault(require("moment"));
const decorators_1 = require("../../shared/decorators");
const schemas_1 = require("../schemas");
const app_logger_1 = require("../../app.logger");
class NoteController {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield this.noteModel.find().lean();
                const data = {};
                notes.forEach((note) => {
                    if (!data[note.date]) {
                        data[note.date] = {
                            items: []
                        };
                    }
                    data[note.date].items.push(note);
                });
                res.json(data);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date } = req.body;
                console.log(req.body);
                const notes = yield this.noteModel.find({ date: moment_1.default(date).format('DD.MM.YYYY') }).lean();
                const data = {};
                notes.forEach((note) => {
                    const key = `${note.time.substr(0, 2)}:00`;
                    if (!data[key]) {
                        data[key] = {
                            items: []
                        };
                    }
                    data[key].items.push(note);
                });
                res.json(data);
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
                const { date, time } = req.body;
                const note = yield this.noteModel.create({ date, time, consumed: false });
                res.json(note);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    consumed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const body = req.body;
                const note = yield this.noteModel.findOne({ _id: id, consumed: false }).lean();
                if (!note) {
                    return res.status(400).send({ message: 'The note is not found' });
                }
                const result = yield this.noteModel.updateOne({ _id: id }, Object.assign(Object.assign({}, body), { consumed: true })).lean();
                res.json(result);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    relieve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const note = yield this.noteModel.findOne({ _id: id, consumed: true }).lean();
                if (!note) {
                    return res.status(400).send({ message: 'The note is not found' });
                }
                const result = yield this.noteModel.updateOne({ _id: id }, { consumed: false }).lean();
                res.json(result);
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
                const note = yield this.noteModel.findOne({ _id: id }).lean();
                if (!note) {
                    return res.status(400).send({ message: 'The note is not found' });
                }
                const result = yield this.noteModel.deleteOne({ _id: id }).lean();
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
], NoteController.prototype, "findAll", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "findOne", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "consumed", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "relieve", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "delete", null);
exports.noteController = new NoteController(schemas_1.Note);
//# sourceMappingURL=note.controller.js.map