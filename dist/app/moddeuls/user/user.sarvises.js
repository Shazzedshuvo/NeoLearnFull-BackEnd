import { UserModel } from "./user.model.js";
export const CreateUsar = async (paylod) => {
    const NewUser = await UserModel.create(paylod);
    return NewUser;
};
const getAllUsersServices = async () => {
    const users = await UserModel.find({ isDeleted: false });
    return users;
};
const getSingleUserServices = async (id) => {
    const user = await UserModel.findOne({ _id: id, isDeleted: false });
    return user;
};
const updateUserServices = async (id, payload) => {
    const updatedUser = await UserModel.findOneAndUpdate({ id, isDeleted: false }, payload, { new: true });
    return updatedUser;
};
const deleteUserServices = async (id) => {
    const deletedUser = await UserModel.findOneAndUpdate({ id, isDeleted: false }, { isDeleted: true }, { new: true });
    return deletedUser;
};
export const UserServices = {
    CreateUsar,
    getAllUsersServices,
    getSingleUserServices,
    updateUserServices,
    deleteUserServices,
};
//# sourceMappingURL=user.sarvises.js.map