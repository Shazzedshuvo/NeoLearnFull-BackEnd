// src/app/modules/auth/auth.service.ts

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../moddeuls/user/user.model.js";

const loginUser = async (payload: { id: string; password: string }) => {
  const { id, password } = payload;

  const user = await UserModel.findOne({ id, isDeleted: false });
  if (!user) {
    throw new Error("User not found or not active");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    throw new Error("Incorrect password");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
      id: user.id,
    },
    process.env.JWT_SECRET || "default_secret",
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user.id,
      role: user.role,
      status: user.status,
    },
  };
};

export const AuthService = {
  loginUser,
};
