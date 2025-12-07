import { CourseSarvises } from "./course,sarvice.js";
const createcoursecontrolar = async (req, res) => {
    try {
        const data = req.body;
        const usar = await CourseSarvises.courseSarvises(data);
        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: usar,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Course create error",
            error: error.message,
        });
    }
};
const allCoursesControlar = async (req, res) => {
    try {
        const result = await CourseSarvises.getallcoursesSarvises();
        res.status(200).json({
            success: true,
            message: "Courses Find Successfully ",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Course create error",
            error: error.message,
        });
    }
};
const getacoursesControlar = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CourseSarvises.getacoursesSarvisess(id);
        res.status(200).json({
            success: true,
            message: "Courses Find Successfully ",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "No courses found",
            error: error.message,
        });
    }
};
const coursesUpdeteControlar = async (req, res) => {
    try {
        const result = await CourseSarvises.updateCourseSarvises(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Courses Update Successfully ",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "update ",
            error: error.message,
        });
    }
};
const courseDelite = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CourseSarvises.deleteCourseSarvises(id);
        res.status(200).json({
            success: true,
            message: "Courses dletate Successfully ",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Some thing Went to be a rong",
            error: error.message,
        });
    }
};
export const CourseControlar = {
    createcoursecontrolar,
    allCoursesControlar,
    getacoursesControlar,
    coursesUpdeteControlar,
};
//# sourceMappingURL=course.controlar.js.map