import type { IStudent } from "./student.intarfase.js";
import { Student } from "./student.Model.js";

// CREATE → নতুন student তৈরি
const createStudentServices = async (payload: IStudent): Promise<IStudent> => {
  const student = await Student.create(payload);
  return student;
};


const getAllStudentsServices = async (): Promise<IStudent[]> => {
  const students = await Student.find();
  return students;
};


const getSingleStudentServices = async (id: string): Promise<IStudent | null> => {
  const student = await Student.findOne({ id });
  return student;
};


const updateStudentServices = async (id: string, payload: Partial<IStudent>): Promise<IStudent | null> => {
  const updatedStudent = await Student.findOneAndUpdate({ id }, payload, { new: true });
  return updatedStudent;
};


const deleteStudentServices = async (id: string): Promise<IStudent | null> => {
  const deletedStudent = await Student.findOneAndDelete({ id });
  return deletedStudent;
};

export const StudentService = {
  createStudentServices,
  getAllStudentsServices,
  getSingleStudentServices,
  updateStudentServices,
  deleteStudentServices,
};