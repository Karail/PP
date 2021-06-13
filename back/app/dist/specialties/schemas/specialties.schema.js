"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialization = void 0;
const mongoose_1 = require("mongoose");
const SpecializationSchema = new mongoose_1.Schema({
    name: String,
    code: String,
});
exports.Specialization = mongoose_1.model('Specialization', SpecializationSchema);
//# sourceMappingURL=specialties.schema.js.map