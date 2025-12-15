import { UserServices } from "./user.sarvises.js";
// CREATE USER
export const CreateUserController = async (req, res) => {
    try {
        const data = req.body;
        const user = await UserServices.CreateUser(data); // Service function updated
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message || error,
        });
    }
};
// GET ALL USERS
export const getAllUsersController = async (req, res) => {
    try {
        const users = await UserServices.getAllUsersServices();
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// GET SINGLE USER
export const getSingleUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserServices.getSingleUserServices(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// UPDATE USER
export const updateUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await UserServices.updateUserServices(id, req.body);
        if (!updatedUser)
            return res.status(404).json({ success: false, message: "User not found" });
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// DELETE USER (soft delete)
export const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await UserServices.deleteUserServices(id);
        if (!deletedUser)
            return res.status(404).json({ success: false, message: "User not found" });
        res.status(200).json({ success: true, data: deletedUser });
    }
    catch (error) {
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
//# sourceMappingURL=user.controlar.js.map