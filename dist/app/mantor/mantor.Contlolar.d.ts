import type { Request, Response } from "express";
export declare const createMentorController: (req: Request, res: Response) => Promise<void>;
export declare const getAllMentorsController: (req: Request, res: Response) => Promise<void>;
export declare const getSingleMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const MentorController: {
    createMentorController: (req: Request, res: Response) => Promise<void>;
    getAllMentorsController: (req: Request, res: Response) => Promise<void>;
    getSingleMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteMentorController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=mantor.Contlolar.d.ts.map