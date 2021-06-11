import { Request, Response } from 'express';
import { TeacherDisciplineGroup } from '../schemas';
import { Teacher } from '../../teachers/schemas';
import { Discipline } from '../../disciplines/schemas';
import { Group } from '../../groups/schemas';
declare class TeacherDisciplineGroupController {
    private readonly teacherDisciplineGroupModel;
    private readonly teacherModel;
    private readonly disciplineModel;
    private readonly groupModel;
    constructor(teacherDisciplineGroupModel: typeof TeacherDisciplineGroup, teacherModel: typeof Teacher, disciplineModel: typeof Discipline, groupModel: typeof Group);
    findAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    editMany(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const teacherDisciplineGroupController: TeacherDisciplineGroupController;
export {};
