import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
// Schemas
import { User } from '../../user/schemas';

export const jwtStrategy = new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
	try {
		const candidate = await User.findOne({ _id: payload._id }).lean();
		if (candidate) {
			return done(null, candidate);
		} else {
			return done(Error('user is not fined'), null);
		}
	} catch (ex) {
		return done(ex, null);
	}
});