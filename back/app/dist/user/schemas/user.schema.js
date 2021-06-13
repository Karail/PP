"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    password: String,
    login: String,
});
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=user.schema.js.map