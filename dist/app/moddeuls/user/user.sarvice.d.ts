import type { IUser } from "./user.intarface.js";
export declare const UserService: {
    createUserServices: (payload: IUser) => Promise<IUser>;
    getAllUsersServices: () => Promise<IUser[]>;
    getSingleUserServices: (id: string) => Promise<IUser | null>;
    updateUserServices: (id: string, payload: Partial<IUser>) => Promise<IUser | null>;
    deleteUserServices: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.sarvice.d.ts.map