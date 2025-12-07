import { StudentModel } from "./student.model.js";
const studentSarvises = async (paylod) => {
    const NewStudent = await StudentModel.create(paylod);
    return NewStudent;
};
export const StudentSarvises = { studentSarvises };
//# sourceMappingURL=student.sarvises.js.map