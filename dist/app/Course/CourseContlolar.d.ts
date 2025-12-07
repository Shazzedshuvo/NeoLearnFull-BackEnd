import type { Request, Response } from "express";
export declare const createCourseController: (req: Request, res: Response) => Promise<void>;
export declare const getAllCoursesController: (req: Request, res: Response) => Promise<void>;
export declare const getSingleCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const CourseController: {
    createCourseController: (req: Request, res: Response) => Promise<void>;
    getAllCoursesController: (req: Request, res: Response) => Promise<void>;
    getSingleCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCourseController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=CourseContlolar.d.ts.map