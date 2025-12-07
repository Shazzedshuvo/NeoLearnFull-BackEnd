import type { Request, Response } from "express";
import { MentorService } from "./mantor.Sarvises.js";





export const createMentorController = async (req: Request, res: Response) => {
  try {
    const mentor = await MentorService.createMentorServices(req.body);
    res.status(201).json({
      success: true,
      message: 'Mentor created successfully',
      data: mentor,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllMentorsController = async (req: Request, res: Response) => {
  try {
    const mentors = await MentorService.getAllMentorsServices();
    res.status(200).json({
      success: true,
      message: 'Mentors fetched successfully',
      data: mentors,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getSingleMentorController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const mentor = await MentorService.getSingleMentorServices(id as string);
    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Mentor fetched successfully',
      data: mentor,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMentorController = async (req: Request, res: Response) => {
  try {

    const id =req.params.id
    const updatedMentor = await MentorService.updateMentorServices(
      id as string,
      req.body
    );
    if (!updatedMentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Mentor updated successfully',
      data: updatedMentor,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteMentorController = async (req: Request, res: Response) => {
  try {
    const id =req.params.id
    const deletedMentor = await MentorService.deleteMentorServices(id as string);
    if (!deletedMentor) {
      return res.status(404).json({
        success: false,
        message: 'Mentor not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Mentor deleted successfully',
      data: deletedMentor,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const MentorController = {
  createMentorController,
  getAllMentorsController,
  getSingleMentorController,
  updateMentorController,
  deleteMentorController,
};
