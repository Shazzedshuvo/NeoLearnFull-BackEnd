import { UserModel } from "./user.model.js";
// Create User
export const CreateUser = async (payload) => {
    const newUser = await UserModel.create(payload);
    return newUser;
};
// Get all users
const getAllUsersServices = async () => {
    const users = await UserModel.find({ isDeleted: false });
    return users;
};
// Get single user by ID
const getSingleUserServices = async (id) => {
    const user = await UserModel.findOne({ _id: id, isDeleted: false });
    return user;
};
// Update user
const updateUserServices = async (id, payload) => {
    const updatedUser = await UserModel.findOneAndUpdate({ id, isDeleted: false }, payload, { new: true });
    return updatedUser;
};
// Delete (soft delete) user
const deleteUserServices = async (id) => {
    const deletedUser = await UserModel.findOneAndUpdate({ id, isDeleted: false }, { isDeleted: true }, { new: true });
    return deletedUser;
};
export const UserServices = {
    CreateUser,
    getAllUsersServices,
    getSingleUserServices,
    updateUserServices,
    deleteUserServices,
};
//# sourceMappingURL=user.sarvises.js.map