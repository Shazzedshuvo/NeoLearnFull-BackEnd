import { User } from "./user.model.js";
const createUserServices = async (payload) => {
    const newUser = await User.create(payload);
    return newUser;
};
const getAllUsersServices = async () => {
    const users = await User.find({ isDeleted: false });
    return users;
};
const getSingleUserServices = async (id) => {
    const user = await User.findOne({ id, isDeleted: false });
    return user;
};
const updateUserServices = async (id, payload) => {
    const updatedUser = await User.findOneAndUpdate({ id, isDeleted: false }, payload, { new: true });
    return updatedUser;
};
const deleteUserServices = async (id) => {
    const deletedUser = await User.findOneAndUpdate({ id, isDeleted: false }, { isDeleted: true }, { new: true });
    return deletedUser;
};
export const UserService = {
    createUserServices,
    getAllUsersServices,
    getSingleUserServices,
    updateUserServices,
    deleteUserServices,
};
//# sourceMappingURL=user.sarvice.js.map