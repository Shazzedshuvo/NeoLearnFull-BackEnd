import type { IStudent } from "./student.intarface.js";
export declare const StudentSarvises: {
    studentSarvises: (paylod: IStudent) => Promise<import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=student.sarvises.d.ts.map