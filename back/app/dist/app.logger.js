"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require('winston');
const defaultCombine = winston.format.combine(winston.format.label({ label: '[logger]' }), winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }), winston.format.printf((info) => `${info.label} ${info.timestamp}  ${info.level}: ${info.message}`));
exports.logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize({ all: true }), defaultCombine)
        })
    ],
    stream: {
        write: (message) => {
            exports.logger.info(message);
        }
    }
});
//# sourceMappingURL=app.logger.js.map