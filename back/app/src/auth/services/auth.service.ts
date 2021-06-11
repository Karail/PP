import jwt from 'jsonwebtoken';

export class AuthService {
    public createToken(body): string {
		return jwt.sign(
			body,
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN }
		);
	}
}
export const authService = new AuthService();