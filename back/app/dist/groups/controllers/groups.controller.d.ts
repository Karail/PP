import { Request, Response } from 'express';
import { Group } from '../schemas';
declare class GroupController {
    private readonly groupModel;
    constructor(groupModel: typeof Group);
    findOne(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    edit(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const groupController: GroupController;
export {};
