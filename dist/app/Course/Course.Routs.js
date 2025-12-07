import express from 'express';
import { CourseController } from './CourseContlolar.js';
import { courseValidationSchema } from './Course.validation.js';
import { validateMiddleware } from '../middelware/validetmidelware.js';
const router = express.Router();
router.post('/create-course', validateMiddleware(courseValidationSchema), CourseController.createCourseController);
router.get('/', CourseController.getAllCoursesController);
router.get('/:id', CourseController.getSingleCourseController);
router.patch('/:id', CourseController.updateCourseController);
router.delete('/:id', CourseController.deleteCourseController);
export const CourseRoutes = router;
//# sourceMappingURL=Course.Routs.js.map