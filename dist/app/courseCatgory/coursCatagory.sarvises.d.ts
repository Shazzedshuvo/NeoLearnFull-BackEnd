import type { ICategory } from "./coursCatagory.intarfase..js";
export declare const CategoryService: {
    createCategoryServices: (payload: ICategory) => Promise<ICategory>;
    getAllCategoriesServices: () => Promise<ICategory[]>;
    getSingleCategoryServices: (id: number) => Promise<ICategory | null>;
    updateCategoryServices: (id: number, payload: Partial<ICategory>) => Promise<ICategory | null>;
    deleteCategoryServices: (id: number) => Promise<ICategory | null>;
};
//# sourceMappingURL=coursCatagory.sarvises.d.ts.map