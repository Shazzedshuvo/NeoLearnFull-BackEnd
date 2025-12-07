import { StudentSarvises } from "./student.sarvises.js";
const studentControllar = async (req, res) => {
    try {
        const data = req.body;
        const Newstudent = await StudentSarvises.studentSarvises(data);
        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: Newstudent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Student Create error",
            error: error.message,
        });
    }
};
export const StudentControllar = {
    studentControllar,
};
//# sourceMappingURL=student.controlar.js.map