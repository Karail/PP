import { Request, Response } from 'express';
import { Specialization } from '../schemas';
declare class SpecializationController {
    private readonly specializationModel;
    constructor(specializationModel: typeof Specialization);
    findOne(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    edit(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const specializationController: SpecializationController;
export {};
