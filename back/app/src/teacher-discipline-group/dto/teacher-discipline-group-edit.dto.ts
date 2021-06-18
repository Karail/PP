import { Types } from "mongoose";

export class TeacherDisciplineGroupEditDto {
    items: {
        _id: Types.ObjectId;
        teacherId: string;
        disciplineId: string;
        groupId: string;
        lecturesWatch: number;
        practicesWatch: number;
        laboratoryWatch: number;
        seminarsWatch: number;
        courseProjectsWatch: number;
        intermediateСertificationWatch: number;
        individualProjectWatch: number;
        subgroups: number;
        isStream: boolean;
    }[]
}