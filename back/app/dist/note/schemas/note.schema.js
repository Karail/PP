"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const NoteSchema = new mongoose_1.Schema({
    date: String,
    time: String,
    userName: String,
    phone: String,
    consumed: Boolean,
});
exports.Note = mongoose_1.model('Note', NoteSchema);
//# sourceMappingURL=note.schema.js.map