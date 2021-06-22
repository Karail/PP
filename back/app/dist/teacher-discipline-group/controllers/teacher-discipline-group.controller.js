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
exports.teacherDisciplineGroupController = void 0;
const decorators_1 = require("../../shared/decorators");
const schemas_1 = require("../schemas");
const schemas_2 = require("../../teachers/schemas");
const schemas_3 = require("../../disciplines/schemas");
const schemas_4 = require("../../groups/schemas");
const app_logger_1 = require("../../app.logger");
class TeacherDisciplineGroupController {
    constructor(teacherDisciplineGroupModel, teacherModel, disciplineModel, groupModel) {
        this.teacherDisciplineGroupModel = teacherDisciplineGroupModel;
        this.teacherModel = teacherModel;
        this.disciplineModel = disciplineModel;
        this.groupModel = groupModel;
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.teacherDisciplineGroupModel.find().lean();
                const data = [];
                for (const item of items) {
                    const teachers = yield this.teacherModel.findById(item.teacherId).lean();
                    const disciplines = yield this.disciplineModel.findById(item.disciplineId).lean();
                    const groups = yield this.groupModel.findById(item.groupId).lean();
                    data.push({
                        _id: item._id,
                        teachers,
                        disciplines: Object.assign(Object.assign({}, disciplines), { lecturesWatch: item.lecturesWatch, practicesWatch: item.practicesWatch, laboratoryWatch: item.laboratoryWatch, seminarsWatch: item.seminarsWatch, courseProjectsWatch: item.courseProjectsWatch, intermediateСertification: item.intermediateСertification, onsultationWatch: item.onsultationWatch }),
                        groups: Object.assign(Object.assign({}, groups), { subgroups: item.subgroups, isStream: item.isStream })
                    });
                }
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
                const { teacherId, disciplineId, groupId, lecturesWatch, practicesWatch, laboratoryWatch, seminarsWatch, courseProjectsWatch, intermediateСertification, onsultationWatch, subgroups, isStream } = req.body;
                const teachers = yield this.teacherModel.findById(teacherId).lean();
                const disciplines = yield this.disciplineModel.findById(disciplineId).lean();
                const groups = yield this.groupModel.findById(groupId).lean();
                if (!teachers || !disciplines || !groups) {
                    return res.status(400).send({ message: 'The teachers or disciplines or groups is not found' });
                }
                const items = yield this.teacherDisciplineGroupModel.create({
                    teacherId,
                    disciplineId,
                    groupId,
                    lecturesWatch,
                    practicesWatch,
                    laboratoryWatch,
                    seminarsWatch,
                    courseProjectsWatch,
                    intermediateСertification,
                    onsultationWatch,
                    subgroups,
                    isStream
                });
                res.json(items);
            }
            catch (ex) {
                app_logger_1.logger.error(ex.message);
                res.status(500).send(ex);
            }
        });
    }
    editMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { items } = req.body;
                const udpateMany = [];
                for (const item of items) {
                    const data = this.teacherDisciplineGroupModel.updateOne({
                        _id: item._id
                    }, {
                        teacherId: item.teacherId,
                        disciplineId: item.disciplineId,
                        groupId: item.groupId,
                        lecturesWatch: item.lecturesWatch,
                        practicesWatch: item.practicesWatch,
                        laboratoryWatch: item.laboratoryWatch,
                        seminarsWatch: item.seminarsWatch,
                        courseProjectsWatch: item.courseProjectsWatch,
                        intermediateСertification: item.intermediateСertification,
                        onsultationWatch: item.onsultationWatch,
                        subgroups: item.subgroups,
                        isStream: item.isStream
                    });
                    udpateMany.push(data);
                }
                const data = yield Promise.all(udpateMany);
                res.json(data);
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
                const note = yield this.teacherDisciplineGroupModel.findOne({ _id: id }).lean();
                if (!note) {
                    return res.status(400).send({ message: 'The teacher-discipline-group is not found' });
                }
                const result = yield this.teacherDisciplineGroupModel.deleteOne({ _id: id }).lean();
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
], TeacherDisciplineGroupController.prototype, "findAll", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherDisciplineGroupController.prototype, "create", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherDisciplineGroupController.prototype, "editMany", null);
__decorate([
    decorators_1.Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherDisciplineGroupController.prototype, "delete", null);
exports.teacherDisciplineGroupController = new TeacherDisciplineGroupController(schemas_1.TeacherDisciplineGroup, schemas_2.Teacher, schemas_3.Discipline, schemas_4.Group);
//# sourceMappingURL=teacher-discipline-group.controller.js.map