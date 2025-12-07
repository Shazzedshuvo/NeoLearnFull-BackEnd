import type { IUser } from "./user.intarfase.js";
import { UserModel } from "./user.model.js";

export const CreateUsar = async (paylod: IUser) => {
  const NewUser = await UserModel.create(paylod);
  return NewUser;
};





const getAllUsersServices = async (): Promise<IUser[]> => {
  const users = await UserModel.find({ isDeleted: false });
  return users;
};



const getSingleUserServices = async (id: string)=> {


  const user = await UserModel.findOne({ _id: id, isDeleted: false });
  return user;
};




const updateUserServices = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false },
    payload,
    { new: true }
  );
  return updatedUser;
};



const deleteUserServices = async (id: string): Promise<IUser | null> => {
  const deletedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
  return deletedUser;
};





export const UserServices = {
  CreateUsar,
    getAllUsersServices,
   getSingleUserServices,
    updateUserServices,
    deleteUserServices,

};
