import { Schema, model } from 'mongoose';
import type { IMentor } from './mantor.intarfase.js';


const mentorSchema = new Schema<IMentor>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String },
    email: { type: String },
    contactNo: { type: String },
    emergencyContact: { type: String },
    address: { type: String },
    profileImg: { type: String },
    designation: { type: String },
    departmentName: { type: String },
    specialized_area: { type: [String] },
    education_qualification: { type: [String] },
    workExperience: { type: [String] },
    experienceYears: { type: String },
    experienceTrainedStudents: { type: String },
    reviews: { type: Number },
    bio: { type: String },
    lifeJourney: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Mentor = model<IMentor>('Mentor', mentorSchema);