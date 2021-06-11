import { Request, Response } from 'express';
import { Teacher } from '../schemas';
declare class TeacherController {
    private readonly teacherModel;
    constructor(teacherModel: typeof Teacher);
    findOne(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    edit(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const teacherController: TeacherController;
export {};
