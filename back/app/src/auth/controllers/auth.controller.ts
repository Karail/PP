import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { LoginDto, RegisterDto } from '../dto';
// Schemas
import { User } from '../../user/schemas';
// Logger
import { logger } from '../../app.logger';
// Services
import { AuthService, authService } from '../services';

class AuthController {
	constructor(
        private readonly userModel: typeof User,
		private readonly authService: AuthService,
	) { }

    @Bind
	public async login(req: Request, res: Response) {
		if (req.user) {
			const jwt = this.authService.createToken(req.user);
			return res.send(jwt);
		}
		try {
			const { login, password } = req.body as LoginDto;

			const candidate = await this.userModel.findOne({ login }).lean();

			if (!candidate) {
				return res.status(400).send({ message: 'The user is not found' });
			}

			const isMatch = await bcrypt.compare(password, candidate.password);

			if (!isMatch)
				return res.status(400).json({ message: 'invalid password' });

			const jwt = this.authService.createToken(candidate);

			res.send(jwt);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
    @Bind
    public async register(req: Request, res: Response) {
    	try {
    		const { login, password } = req.body as RegisterDto;

    		const candidate = await this.userModel.findOne({ login }).lean();

    		if (candidate) {
    			return res.status(400).send({ message: 'The user is already registered' });
    		}

    		const hashedPassword = await bcrypt.hash(password, 12);

    		const user = (await this.userModel.create({ login, password: hashedPassword })).toObject();

    		const jwt = this.authService.createToken(user);

    		res.send(jwt);
    	} catch (ex) {
    		logger.error(ex.message);
    		res.status(500).send(ex);
    	}
	}
	@Bind
    public async logout(req: Request, res: Response) {
		req.logout();
		res.send(true);
	}
}

export const authController = new AuthController(User, authService);