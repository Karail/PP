import { Request, Response } from 'express';
import { Discipline } from '../schemas';
declare class DisciplineController {
    private readonly disciplineModel;
    constructor(disciplineModel: typeof Discipline);
    findOne(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    edit(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const disciplineController: DisciplineController;
export {};
