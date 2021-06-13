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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./teacher-discipline-group/routes");
const routes_2 = require("./teachers/routes");
const routes_3 = require("./groups/routes");
const routes_4 = require("./specialties/routes");
const routes_5 = require("./disciplines/routes");
const routes_6 = require("./auth/routes");
const app_logger_1 = require("./app.logger");
const middleware_1 = require("./auth/middleware");
const app = express_1.default();
app.use(morgan_1.default('dev', { stream: app_logger_1.logger.stream.write }));
app.use(helmet_1.default());
app.use(cors_1.default({
    origin: (_, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
        'X-Password-Expired',
    ],
    optionsSuccessStatus: 200,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(middleware_1.passport.initialize());
app.use('/teacher-discipline-group', routes_1.teacherDisciplineGroupRouter);
app.use('/teacher', routes_2.teacherRouter);
app.use('/group', routes_3.groupRouter);
app.use('/specialization', routes_4.specializationRouter);
app.use('/discipline', routes_5.disciplineRouter);
app.use('/auth', routes_6.authRouter);
app.get('/', (req, res) => {
    res.send('hello!');
});
const port = process.env.PORT || process.env.APP_PORT;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app_logger_1.logger.info('connected to database');
        app_logger_1.logger.info(`run serve ${port}`);
    }
    catch (ex) {
        app_logger_1.logger.error(ex.message);
        process.exit(1);
    }
}));
exports.default = app;
//# sourceMappingURL=app.js.map