import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../moddeuls/user/user.model.js";
const loginUser = async (payload) => {
    const { email, password } = payload;
    const user = await UserModel.findOne({ email, isDeleted: false });
    if (!user) {
        throw new Error("User not found or not active");
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Incorrect password");
    }
    const token = jwt.sign({
        _id: user._id,
        role: user.role,
        id: user.id,
    }, process.env.JWT_SECRET || "default_secret", { expiresIn: "7d" });
    return {
        token,
        user: {
            id: user.id,
            role: user.role,
            status: user.status,
        },
    };
};
export const AuthService = { loginUser };
//# sourceMappingURL=auth.sarvises.js.map