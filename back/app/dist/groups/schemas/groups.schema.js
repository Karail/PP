"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const mongoose_1 = require("mongoose");
const GroupSchema = new mongoose_1.Schema({
    name: String,
    index: String,
    course: Number,
    quantity: Number,
});
exports.Group = mongoose_1.model('Group', GroupSchema);
//# sourceMappingURL=groups.schema.js.map