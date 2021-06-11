import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { ITeacher } from '../interfaces';

const TeacherSchema = new Schema ({
  surname: String,
  name: String,
  patronymic: String,
});

export const Teacher = model<ITeacher & Document>('Teacher', TeacherSchema);