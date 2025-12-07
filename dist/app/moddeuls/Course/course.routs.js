import { Router } from "express";
import { CourseControlar } from "./course.controlar.js";
const routar = Router();
///api/course/allcourse
routar.post("/createcourse", CourseControlar.createcoursecontrolar);
routar.get("/allcourse", CourseControlar.allCoursesControlar);
routar.get("/course/:id", CourseControlar.getacoursesControlar);
routar.put("/course/:id", CourseControlar.coursesUpdeteControlar);
export const CourseRouter = routar;
//# sourceMappingURL=course.routs.js.map