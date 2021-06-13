import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
//Routes
import { teacherDisciplineGroupRouter } from './teacher-discipline-group/routes';
import { teacherRouter } from './teachers/routes';
import { groupRouter } from './groups/routes';
import { specializationRouter } from './specialties/routes';
import { disciplineRouter } from './disciplines/routes';
import { authRouter } from './auth/routes';
//Logger
import { logger } from './app.logger';
//Passport
import { passport } from './auth/middleware';

const app = express();
//Morgan
app.use(morgan('dev', { stream: logger.stream.write }));
// Helpers:
app.use(helmet());
app.use(
    cors({
        origin: (_, cb) => cb(null, true),
        credentials: true,
        preflightContinue: true,
        exposedHeaders: [
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
            'X-Password-Expired',
        ],
        optionsSuccessStatus: 200,
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Passport:
app.use(passport.initialize());
//Routes:
app.use('/teacher-discipline-group', teacherDisciplineGroupRouter);
app.use('/teacher', teacherRouter);
app.use('/group', groupRouter);
app.use('/specialization', specializationRouter);
app.use('/discipline', disciplineRouter);
app.use('/auth', authRouter);
app.get('/', (req, res) => {
    res.send('hello!')
});
 
const port = process.env.PORT || process.env.APP_PORT

app.listen(port, async () => {
    try {
        await mongoose.connect(<string>process.env.MONGO_URL,{
            // user: 'adminuser',
            // pass: '123456',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        logger.info('connected to database');
        logger.info(`run serve ${port}`);
    } catch (ex) {
        logger.error(ex.message);
        process.exit(1);
    }
});
export default app;