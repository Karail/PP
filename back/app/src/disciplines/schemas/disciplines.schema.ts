import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { IDiscipline } from '../interfaces';

const DisciplineSchema = new Schema ({
  name: String,
  index: String,
  lecturesWatch: Number,
  practicesWatch: Number,
  laboratoryWatch: Number,
  seminarsWatch: Number,
  courseProjectsWatch: Number,
  intermediateСertificationWatch: Number,
  individualProjectWatch: Number,
});

export const Discipline = model<IDiscipline & Document>('Discipline', DisciplineSchema);