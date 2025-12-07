import { Schema, model } from 'mongoose';
import type { IStudent } from './student.intarfase.js';


const studentSchema = new Schema<IStudent>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    address: { type: String, required: true },
    guardian: { type: String, required: true },
    profileImg: { type: String },
    courseName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Student = model<IStudent>('Student', studentSchema);