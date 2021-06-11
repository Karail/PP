import { Types } from 'mongoose';

export interface ITeacherDisciplineGroup {
    teacherId: Types.ObjectId;
    disciplineId: Types.ObjectId;
    groupId: Types.ObjectId;
    lecturesWatch: number;
    practicesWatch: number;
    laboratoryWatch: number;
    seminarsWatch: number;
    courseProjectsWatch: number;
    intermediateСertificationWatch: number;
    individualProjectWatch: number;
}