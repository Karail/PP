// Enums
import { IntermediateСertificationEnum } from "../../disciplines/enums";

export class TeacherDisciplineGroupCreateDto {
    teacherId: string;
    disciplineId: string;
    groupId: string;
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