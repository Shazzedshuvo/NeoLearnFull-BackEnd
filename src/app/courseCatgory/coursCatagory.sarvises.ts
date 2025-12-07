import type { ICategory } from "./coursCatagory.intarfase..js";
import { Category } from "./coursCatagory.modal.js";



const createCategoryServices = async (payload: ICategory): Promise<ICategory> => {
  const newCategory = await Category.create(payload);
  return newCategory;
};


const getAllCategoriesServices = async (): Promise<ICategory[]> => {
  const categories = await Category.find({});
  return categories;
};


const getSingleCategoryServices = async (id: number): Promise<ICategory | null> => {
  const category = await Category.findOne({ id });
  return category;
};


const updateCategoryServices = async (
  id: number,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const updatedCategory = await Category.findOneAndUpdate({ id }, payload, { new: true });
  return updatedCategory;
};

const deleteCategoryServices = async (id: number): Promise<ICategory | null> => {
  const deletedCategory = await Category.findOneAndDelete({ id });
  return deletedCategory;
};

export const CategoryService = {
  createCategoryServices,
  getAllCategoriesServices,
  getSingleCategoryServices,
  updateCategoryServices,
  deleteCategoryServices,
};