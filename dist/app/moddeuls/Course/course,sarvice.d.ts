import type { Icourse } from "./course.intarface.js";
export declare const CourseSarvises: {
    courseSarvises: (paylod: Icourse) => Promise<import("mongoose").Document<unknown, {}, Icourse, {}, {}> & Icourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getallcoursesSarvises: () => Promise<(import("mongoose").Document<unknown, {}, Icourse, {}, {}> & Icourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getacoursesSarvisess: (id: string) => Promise<(import("mongoose").Document<unknown, {}, Icourse, {}, {}> & Icourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateCourseSarvises: (id: string, paylod: Partial<Icourse>) => Promise<(import("mongoose").Document<unknown, {}, Icourse, {}, {}> & Icourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCourseSarvises: (id: string) => Promise<void>;
};
//# sourceMappingURL=course,sarvice.d.ts.map