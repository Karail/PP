"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discipline = void 0;
const mongoose_1 = require("mongoose");
const DisciplineSchema = new mongoose_1.Schema({
    name: String,
    index: String,
    lecturesWatch: Number,
    practicesWatch: Number,
    laboratoryWatch: Number,
    seminarsWatch: Number,
    courseProjectsWatch: Number,
    intermediateСertification: Number,
    onsultationWatch: Number,
});
exports.Discipline = mongoose_1.model('Discipline', DisciplineSchema);
//# sourceMappingURL=disciplines.schema.js.map