import type { IUser } from "./user.intarfase.js";
export declare const CreateUsar: (paylod: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: string;
}> & {
    __v: number;
}>;
export declare const UserServices: {
    CreateUsar: (paylod: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getAllUsersServices: () => Promise<IUser[]>;
    getSingleUserServices: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    updateUserServices: (id: string, payload: Partial<IUser>) => Promise<IUser | null>;
    deleteUserServices: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.sarvises.d.ts.map