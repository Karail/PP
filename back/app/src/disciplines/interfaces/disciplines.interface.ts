// Enums
import { IntermediateСertificationEnum } from "../enums";

export interface IDiscipline {
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