import { IntermediateСertificationEnum } from "../enums";
export declare class DisciplineCreateDto {
    name: string;
    index: string;
    lecturesWatch: number;
    practicesWatch: number;
    laboratoryWatch: number;
    seminarsWatch: number;
    courseProjectsWatch: number;
    intermediateСertification: IntermediateСertificationEnum;
    onsultationWatch: number;
}
