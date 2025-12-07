import { Student } from "./student.Model.js";
// CREATE → নতুন student তৈরি
const createStudentServices = async (payload) => {
    const student = await Student.create(payload);
    return student;
};
const getAllStudentsServices = async () => {
    const students = await Student.find();
    return students;
};
const getSingleStudentServices = async (id) => {
    const student = await Student.findOne({ id });
    return student;
};
const updateStudentServices = async (id, payload) => {
    const updatedStudent = await Student.findOneAndUpdate({ id }, payload, { new: true });
    return updatedStudent;
};
const deleteStudentServices = async (id) => {
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
//# sourceMappingURL=studnt.Sarvises.js.map