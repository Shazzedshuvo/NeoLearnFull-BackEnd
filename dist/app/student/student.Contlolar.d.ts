import type { Request, Response } from "express";
export declare const createStudentController: (req: Request, res: Response) => Promise<void>;
export declare const getAllStudentsController: (req: Request, res: Response) => Promise<void>;
export declare const getSingleStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const StudentController: {
    createStudentController: (req: Request, res: Response) => Promise<void>;
    getAllStudentsController: (req: Request, res: Response) => Promise<void>;
    getSingleStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteStudentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=student.Contlolar.d.ts.map