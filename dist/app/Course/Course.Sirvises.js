import { Course } from "./Course.model.js";
const createCourseServices = async (payload) => {
    const newCourse = await Course.create(payload);
    return newCourse;
};
const getAllCoursesServices = async () => {
    const courses = await Course.find({});
    return courses;
};
const getSingleCourseServices = async (id) => {
    const course = await Course.findOne({ id })
        .populate('mentor')
        .populate('category');
    return course;
};
const updateCourseServices = async (id, payload) => {
    const updatedCourse = await Course.findOneAndUpdate({ id }, payload, { new: true })
        .populate('mentor')
        .populate('category');
    return updatedCourse;
};
const deleteCourseServices = async (id) => {
    const deletedCourse = await Course.findOneAndDelete({ id })
        .populate('mentor')
        .populate('category');
    return deletedCourse;
};
export const CourseService = {
    createCourseServices,
    getAllCoursesServices,
    getSingleCourseServices,
    updateCourseServices,
    deleteCourseServices,
};
//# sourceMappingURL=Course.Sirvises.js.map