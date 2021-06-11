"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const mongoose_1 = require("mongoose");
const TeacherSchema = new mongoose_1.Schema({
    surname: String,
    name: String,
    patronymic: String,
});
exports.Teacher = mongoose_1.model('Teacher', TeacherSchema);
//# sourceMappingURL=teachers.schema.js.map