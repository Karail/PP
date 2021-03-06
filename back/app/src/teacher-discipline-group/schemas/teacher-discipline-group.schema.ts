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
  intermediateСertification: Number,
  onsultationWatch: Number,
  subgroups: Number,
  isStream: Boolean,
});

export const TeacherDisciplineGroup = model<ITeacherDisciplineGroup & Document>('TeacherDisciplineGroup', TeacherDisciplineGroupSchema);