import { Schema } from "mongoose";
import type { IUser } from "./user.intarfase.js";
import bcrypt from "bcryptjs";
import { model } from "mongoose";

const UserSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isPasswordChanged: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["student", "mentor", "admin"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "blocked", "pending"],
      default: "pending",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// password Hasshing before saving the user

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const UserModel = model<IUser>("User", UserSchema);
