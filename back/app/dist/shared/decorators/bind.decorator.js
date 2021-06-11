"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bind = void 0;
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
exports.Bind = Bind;
//# sourceMappingURL=bind.decorator.js.map