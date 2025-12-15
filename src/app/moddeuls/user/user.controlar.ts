import type { Request, Response } from "express";
import { UserServices } from "./user.sarvises.js";

// CREATE USER
export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await UserServices.CreateUser(data); // Service function updated
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message || error,
    });
  }
};

// GET ALL USERS
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await UserServices.getAllUsersServices();
    res.status(200).json({ success: true, data: users });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE USER
export const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await UserServices.getSingleUserServices(id as string);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE USER
export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedUser = await UserServices.updateUserServices(id as string, req.body);

    if (!updatedUser)
      return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE USER (soft delete)
export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await UserServices.deleteUserServices(id as string);
    if (!deletedUser)
      return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const UserControlar = {
  CreateUserController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
};
