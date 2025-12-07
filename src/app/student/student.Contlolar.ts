import type { Request, Response } from "express";
import { StudentService } from "./studnt.Sarvises.js";





export const createStudentController = async (req: Request, res: Response) => {
  try {
    const student = await StudentService.createStudentServices(req.body);
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getAllStudentsController = async (req: Request, res: Response) => {
  try {
    const students = await StudentService.getAllStudentsServices();
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: students,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getSingleStudentController = async (req: Request, res: Response) => {
  try {
    const id   = req.params.id
    const student = await StudentService.getSingleStudentServices(id as string);
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const updateStudentController = async (req: Request, res: Response) => {
  try {

    const id = req.params.id
    const updatedStudent = await StudentService.updateStudentServices(id as string, req.body);
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudentController = async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const deletedStudent = await StudentService.deleteStudentServices(id as string);
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
  } catch (error: any) {
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