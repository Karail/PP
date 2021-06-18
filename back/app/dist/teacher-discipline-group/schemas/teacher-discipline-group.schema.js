"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDisciplineGroup = void 0;
const mongoose_1 = require("mongoose");
const TeacherDisciplineGroupSchema = new mongoose_1.Schema({
    teacherId: mongoose_1.Types.ObjectId,
    disciplineId: mongoose_1.Types.ObjectId,
    groupId: mongoose_1.Types.ObjectId,
    lecturesWatch: Number,
    practicesWatch: Number,
    laboratoryWatch: Number,
    seminarsWatch: Number,
    courseProjectsWatch: Number,
    intermediateСertificationWatch: Number,
    individualProjectWatch: Number,
    subgroups: Number,
    isStream: Boolean,
});
exports.TeacherDisciplineGroup = mongoose_1.model('TeacherDisciplineGroup', TeacherDisciplineGroupSchema);
//# sourceMappingURL=teacher-discipline-group.schema.js.map