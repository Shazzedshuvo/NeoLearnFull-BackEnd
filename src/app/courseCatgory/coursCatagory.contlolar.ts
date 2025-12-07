


import type { Request, Response } from 'express';
import { CategoryService } from './coursCatagory.sarvises.js';
export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.createCategoryServices(req.body);
    res.status(201).json({ 
      success: true, 
      message: "Category created successfully",
      data: category 
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategoriesServices();
    res.status(200).json({ success: true, data: categories });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleCategoryController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const category = await CategoryService.getSingleCategoryServices(id);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
    res.status(200).json({ success: true, data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Controller → category আপডেট করে আইডি দিয়ে
export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedCategory = await CategoryService.updateCategoryServices(id, req.body);
    if (!updatedCategory) return res.status(404).json({ success: false, message: 'Category not found' });
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedCategory = await CategoryService.deleteCategoryServices(id);
    if (!deletedCategory) return res.status(404).json({ success: false, message: 'Category not found' });
    res.status(200).json({ success: true, data: deletedCategory });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const CategoryController = {
  createCategoryController,
  getAllCategoriesController,
  getSingleCategoryController,
  updateCategoryController,
  deleteCategoryController,
};