import { Course } from "./Course.model.js";
import type { ICourse } from "./Cpurse.Intarfase.js";

// CREATE
const createCourseServices = async (payload: ICourse): Promise<ICourse> => {
  return await Course.create(payload);
};

// GET ALL
const getAllCoursesServices = async (): Promise<ICourse[]> => {
  return await Course.find({})
    .populate("mentor")
    .populate("category");
};

// GET BY ID
const getSingleCourseServices = async (id: number): Promise<ICourse | null> => {
  return await Course.findOne({ id })
    .populate("mentor")
    .populate("category");
};

// ✅ GET BY SLUG (IMPORTANT)
const getSingleCourseBySlugServices = async (
  slug: string
): Promise<ICourse | null> => {
  return await Course.findOne({ slug })
    .populate("mentor")
    .populate("category");
};

// UPDATE
const updateCourseServices = async (
  id: number,
  payload: Partial<ICourse>
): Promise<ICourse | null> => {
  return await Course.findOneAndUpdate({ id }, payload, {
    new: true,
  })
    .populate("mentor")
    .populate("category");
};

// DELETE
const deleteCourseServices = async (id: number): Promise<ICourse | null> => {
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
