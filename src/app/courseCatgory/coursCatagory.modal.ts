import { Schema, model } from 'mongoose';
import type { ICategory } from './coursCatagory.intarfase..js';



const categorySchema = new Schema<ICategory>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

export const Category = model<ICategory>('Category', categorySchema);