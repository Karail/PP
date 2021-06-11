import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { IGroup } from '../interfaces';

const GroupSchema = new Schema ({
  name: String,
  index: String,
  course: Number,
  quantity: Number,
  subgroups: Number,
  isStream: Boolean,
});

export const Group = model<IGroup & Document>('Group', GroupSchema);