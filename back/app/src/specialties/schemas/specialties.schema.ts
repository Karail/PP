import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { ISpecialization } from '../interfaces';

const SpecializationSchema = new Schema ({
  name: String,
  code: String,
});

export const Specialization = model<ISpecialization & Document>('Specialization', SpecializationSchema);