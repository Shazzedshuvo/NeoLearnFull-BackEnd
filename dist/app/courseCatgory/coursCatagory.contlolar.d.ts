import type { Request, Response } from 'express';
export declare const createCategoryController: (req: Request, res: Response) => Promise<void>;
export declare const getAllCategoriesController: (req: Request, res: Response) => Promise<void>;
export declare const getSingleCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const CategoryController: {
    createCategoryController: (req: Request, res: Response) => Promise<void>;
    getAllCategoriesController: (req: Request, res: Response) => Promise<void>;
    getSingleCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCategoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=coursCatagory.contlolar.d.ts.map