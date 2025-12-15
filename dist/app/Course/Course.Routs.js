import express from "express";
import { CourseController } from "./CourseContlolar.js";
import { validateMiddleware } from "../middelware/validetmidelware.js";
import { courseValidationSchema } from "./Course.validation.js";
const router = express.Router();
router.post("/create", validateMiddleware(courseValidationSchema), CourseController.createCourseController);
router.get("/", CourseController.getAllCoursesController);
// 🔴 id based
router.get("/:id", CourseController.getSingleCourseController);
// ✅ slug based (IMPORTANT)
router.get("/slug/:slug", CourseController.getSingleCourseBySlugController);
router.patch("/:id", CourseController.updateCourseController);
router.delete("/:id", CourseController.deleteCourseController);
export const CourseRoutes = router;
//# sourceMappingURL=Course.Routs.js.map