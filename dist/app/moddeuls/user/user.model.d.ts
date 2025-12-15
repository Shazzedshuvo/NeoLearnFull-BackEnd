import { Document } from "mongoose";
export interface IUser extends Document {
    id: string;
    email: string;
    password: string;
    isPasswordChanged: boolean;
    role: "student" | "mentor" | "admin";
    status: "active" | "blocked" | "pending";
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(plainPassword: string): Promise<boolean>;
}
export declare const UserModel: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.model.d.ts.map