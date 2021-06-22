import { Types } from 'mongoose';
// Enums
import { IntermediateСertificationEnum } from "../../disciplines/enums";

export interface ITeacherDisciplineGroup {
    teacherId: Types.ObjectId;
    disciplineId: Types.ObjectId;
    groupId: Types.ObjectId;
    lecturesWatch: number;
    practicesWatch: number;
    laboratoryWatch: number;
    seminarsWatch: number;
    courseProjectsWatch: number;
    intermediateСertification: IntermediateСertificationEnum;
    onsultationWatch: number;
    subgroups: number;
    isStream: boolean;
}