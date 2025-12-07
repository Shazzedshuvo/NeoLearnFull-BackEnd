import express from 'express';
import { CategoryController } from './coursCatagory.contlolar.js';
import { categoryValidationSchema } from './coursCatagory.validation.js';
import { validateMiddleware } from '../middelware/validetmidelware.js';
const router = express.Router();
router.post('/create-category', validateMiddleware(categoryValidationSchema), CategoryController.createCategoryController);
router.get('/', CategoryController.getAllCategoriesController);
router.get('/:id', CategoryController.getSingleCategoryController);
router.patch('/:id', CategoryController.updateCategoryController);
router.delete('/:id', CategoryController.deleteCategoryController);
export const CategoryRoutes = router;
//# sourceMappingURL=coursCatagory.routs.js.map