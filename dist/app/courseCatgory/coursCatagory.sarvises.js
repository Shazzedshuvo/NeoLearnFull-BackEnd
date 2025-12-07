import { Category } from "./coursCatagory.modal.js";
const createCategoryServices = async (payload) => {
    const newCategory = await Category.create(payload);
    return newCategory;
};
const getAllCategoriesServices = async () => {
    const categories = await Category.find({});
    return categories;
};
const getSingleCategoryServices = async (id) => {
    const category = await Category.findOne({ id });
    return category;
};
const updateCategoryServices = async (id, payload) => {
    const updatedCategory = await Category.findOneAndUpdate({ id }, payload, { new: true });
    return updatedCategory;
};
const deleteCategoryServices = async (id) => {
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
//# sourceMappingURL=coursCatagory.sarvises.js.map