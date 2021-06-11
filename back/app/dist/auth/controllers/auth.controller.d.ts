import { Request, Response } from 'express';
import { User } from '../../user/schemas';
import { AuthService } from '../services';
declare class AuthController {
    private readonly userModel;
    private readonly authService;
    constructor(userModel: typeof User, authService: AuthService);
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<void>;
}
export declare const authController: AuthController;
export {};
