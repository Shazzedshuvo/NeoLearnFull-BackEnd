import { Usermodel } from "../user/user.model.js";
import { CourseModel } from "./course.model.js";
const courseSarvises = async (paylod) => {
    const NewUsar = await CourseModel.create(paylod);
    return NewUsar;
};
const getallcoursesSarvises = async () => {
    const result = CourseModel.find();
    return result;
};
const getacoursesSarvisess = async (id) => {
    const result = await CourseModel.findById(id);
    return result;
};
const updateCourseSarvises = async (id, paylod) => {
    const result = await CourseModel.findByIdAndUpdate(id);
    return result;
};
const deleteCourseSarvises = async (id) => {
    const result = await CourseModel.findByIdAndUpdate(id);
};
export const CourseSarvises = {
    courseSarvises,
    getallcoursesSarvises,
    getacoursesSarvisess,
    updateCourseSarvises,
    deleteCourseSarvises,
};
//# sourceMappingURL=course,sarvice.js.map