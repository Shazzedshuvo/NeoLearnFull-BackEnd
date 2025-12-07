import { CourseService } from "./Course.Sirvises.js";
import type { Request, Response } from "express";




export const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await CourseService.createCourseServices(req.body);
    res.status(201).json({ success: true, message: "Course created successfully", data: course });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET All Courses
export const getAllCoursesController = async (req: Request, res: Response) => {
  try {
    const courses = await CourseService.getAllCoursesServices();
    res.status(200).json({ success: true, data: courses });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Course
export const getSingleCourseController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const course = await CourseService.getSingleCourseServices(id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, data: course });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Course
export const updateCourseController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedCourse = await CourseService.updateCourseServices(id, req.body);
    if (!updatedCourse) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, data: updatedCourse });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Course
export const deleteCourseController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedCourse = await CourseService.deleteCourseServices(id);
    if (!deletedCourse) return res.status(404).json({ success: false, message: "Course not found" });
    res.status(200).json({ success: true, data: deletedCourse });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const CourseController = {
  createCourseController,
  getAllCoursesController,
  getSingleCourseController,
  updateCourseController,
  deleteCourseController,
};