import { Course } from "./Course.model.js";
// CREATE
const createCourseServices = async (payload) => {
    return await Course.create(payload);
};
// GET ALL
const getAllCoursesServices = async () => {
    return await Course.find({})
        .populate("mentor")
        .populate("category");
};
// GET BY ID
const getSingleCourseServices = async (id) => {
    return await Course.findOne({ id })
        .populate("mentor")
        .populate("category");
};
// ✅ GET BY SLUG (IMPORTANT)
const getSingleCourseBySlugServices = async (slug) => {
    return await Course.findOne({ slug })
        .populate("mentor")
        .populate("category");
};
// UPDATE
const updateCourseServices = async (id, payload) => {
    return await Course.findOneAndUpdate({ id }, payload, {
        new: true,
    })
        .populate("mentor")
        .populate("category");
};
// DELETE
const deleteCourseServices = async (id) => {
    return await Course.findOneAndDelete({ id })
        .populate("mentor")
        .populate("category");
};
export const CourseService = {
    createCourseServices,
    getAllCoursesServices,
    getSingleCourseServices,
    getSingleCourseBySlugServices,
    updateCourseServices,
    deleteCourseServices,
};
//# sourceMappingURL=Course.Sirvises.js.map