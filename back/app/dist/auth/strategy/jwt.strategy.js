"use strict";
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
exports.jwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const schemas_1 = require("../../user/schemas");
exports.jwtStrategy = new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidate = yield schemas_1.User.findOne({ _id: payload._id }).lean();
        if (candidate) {
            return done(null, candidate);
        }
        else {
            return done(Error('user is not fined'), null);
        }
    }
    catch (ex) {
        return done(ex, null);
    }
}));
//# sourceMappingURL=jwt.strategy.js.map