import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { ITeacherDisciplineGroup } from '../interfaces';

const TeacherDisciplineGroupSchema = new Schema ({
  teacherId: Types.ObjectId,
  disciplineId: Types.ObjectId,
  groupId: Types.ObjectId,
  lecturesWatch: Number,
  practicesWatch: Number,
  laboratoryWatch: Number,
  seminarsWatch: Number,
  courseProjectsWatch: Number,
  intermediateСertificationWatch: Number,
  individualProjectWatch: Number,
});

export const TeacherDisciplineGroup = model<ITeacherDisciplineGroup & Document>('TeacherDisciplineGroup', TeacherDisciplineGroupSchema);