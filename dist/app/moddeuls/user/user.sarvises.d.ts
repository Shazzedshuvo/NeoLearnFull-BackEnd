import { type IUser } from "./user.model.js";
import type { Document } from "mongoose";
export declare const CreateUser: (payload: Partial<IUser>) => Promise<IUser & Document>;
export declare const UserServices: {
    CreateUser: (payload: Partial<IUser>) => Promise<IUser & Document>;
    getAllUsersServices: () => Promise<(IUser & Document)[]>;
    getSingleUserServices: (id: string) => Promise<(IUser & Document) | null>;
    updateUserServices: (id: string, payload: Partial<IUser>) => Promise<(IUser & Document) | null>;
    deleteUserServices: (id: string) => Promise<(IUser & Document) | null>;
};
//# sourceMappingURL=user.sarvises.d.ts.map