import type { ICourse } from "./Cpurse.Intarfase.js";
export declare const CourseService: {
    createCourseServices: (payload: ICourse) => Promise<ICourse>;
    getAllCoursesServices: () => Promise<ICourse[]>;
    getSingleCourseServices: (id: number) => Promise<ICourse | null>;
    getSingleCourseBySlugServices: (slug: string) => Promise<ICourse | null>;
    updateCourseServices: (id: number, payload: Partial<ICourse>) => Promise<ICourse | null>;
    deleteCourseServices: (id: number) => Promise<ICourse | null>;
};
//# sourceMappingURL=Course.Sirvises.d.ts.map