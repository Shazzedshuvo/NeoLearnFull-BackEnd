
import { UserModel, type IUser } from "./user.model.js";
import type { Document } from "mongoose";

// Create User
export const CreateUser = async (payload: Partial<IUser>): Promise<IUser & Document> => {
  const newUser = await UserModel.create(payload);
  return newUser;
};

// Get all users
const getAllUsersServices = async (): Promise<(IUser & Document)[]> => {
  const users = await UserModel.find({ isDeleted: false });
  return users;
};

// Get single user by ID
const getSingleUserServices = async (id: string): Promise<(IUser & Document) | null> => {
  const user = await UserModel.findOne({ _id: id, isDeleted: false });
  return user;
};

// Update user
const updateUserServices = async (
  id: string,
  payload: Partial<IUser>
): Promise<(IUser & Document) | null> => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false },
    payload,
    { new: true }
  );
  return updatedUser;
};

// Delete (soft delete) user
const deleteUserServices = async (
  id: string
): Promise<(IUser & Document) | null> => {
  const deletedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
  return deletedUser;
};

export const UserServices = {
  CreateUser,
  getAllUsersServices,
  getSingleUserServices,
  updateUserServices,
  deleteUserServices,
};
