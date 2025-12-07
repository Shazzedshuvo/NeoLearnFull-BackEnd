import { StudentService } from "./studnt.Sarvises.js";
export const createStudentController = async (req, res) => {
    try {
        const student = await StudentService.createStudentServices(req.body);
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: student,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getAllStudentsController = async (req, res) => {
    try {
        const students = await StudentService.getAllStudentsServices();
        res.status(200).json({
            success: true,
            message: 'Students fetched successfully',
            data: students,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getSingleStudentController = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await StudentService.getSingleStudentServices(id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Student fetched successfully',
            data: student,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const updateStudentController = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = await StudentService.updateStudentServices(id, req.body);
        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Student updated successfully',
            data: updatedStudent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const deleteStudentController = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStudent = await StudentService.deleteStudentServices(id);
        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: deletedStudent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const StudentController = {
    createStudentController,
    getAllStudentsController,
    getSingleStudentController,
    updateStudentController,
    deleteStudentController,
};
//# sourceMappingURL=student.Contlolar.js.map