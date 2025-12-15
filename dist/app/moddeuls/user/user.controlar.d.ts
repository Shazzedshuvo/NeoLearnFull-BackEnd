import type { Request, Response } from "express";
export declare const CreateUserController: (req: Request, res: Response) => Promise<void>;
export declare const getAllUsersController: (req: Request, res: Response) => Promise<void>;
export declare const getSingleUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const UserControlar: {
    CreateUserController: (req: Request, res: Response) => Promise<void>;
    getAllUsersController: (req: Request, res: Response) => Promise<void>;
    getSingleUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteUserController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=user.controlar.d.ts.map