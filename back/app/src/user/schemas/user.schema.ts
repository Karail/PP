import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { IUser } from '../interfaces';

const UserSchema = new Schema ({
  password: String,
  login: String,
});

export const User = model<IUser & Document>('User', UserSchema);