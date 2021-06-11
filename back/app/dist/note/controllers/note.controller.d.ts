import { Request, Response } from 'express';
import { Note } from '../schemas';
declare class NoteController {
    private readonly noteModel;
    constructor(noteModel: typeof Note);
    findAll(req: Request, res: Response): Promise<void>;
    findOne(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    consumed(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    relieve(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const noteController: NoteController;
export {};
