import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new Schema({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
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
        default: "active",
    },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
// Password hashing before save
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
// Method to compare password
UserSchema.methods.comparePassword = async function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};
export const UserModel = model("User", UserSchema);
//# sourceMappingURL=user.model.js.map