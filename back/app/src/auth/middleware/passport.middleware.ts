import passport from 'passport';
import { Document } from 'mongoose';
// Strategy's
import { jwtStrategy } from '../strategy';
// Schemas
import { User } from '../../user/schemas';

passport.use(jwtStrategy);

passport.serializeUser((user: Document<any>, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findOne({ _id: id }).lean();
		if (user) {
			return done(null, user);
		} else {
			return done(Error('user is not fined'), null);
		}
	} catch (ex) {
		return done(ex, null);
	}
});

export { passport };