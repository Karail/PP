import { Types, Schema, model, Document } from 'mongoose';
// Interfaces
import { IGroup } from '../interfaces';

const GroupSchema = new Schema ({
  name: String,
  index: String,
  course: Number,
  quantity: Number,
});

export const Group = model<IGroup & Document>('Group', GroupSchema);