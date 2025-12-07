import express from "express";
import cors from "cors";
import { UserRouter } from "./app/moddeuls/user/user.routes.js";
import { AuthRoutes } from "./app/auth/auth.routh.js";
import { CategoryRoutes } from "./app/courseCatgory/coursCatagory.routs.js";
import { CourseRoutes } from "./app/Course/Course.Routs.js";
import { StudentRoutes } from "./app/student/student.Routs..js";
import { MentorRoutes } from "./app/mantor/mantor.Routes.js";
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.get("/", (req, res) => {
    res.send("Hello World! I am Shuvo");
});
app.use("/api", UserRouter);
app.use("/api", AuthRoutes);
app.use("/api/catagory", CategoryRoutes);
app.use("/api/course", CourseRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/mentor", MentorRoutes);
export default app;
//# sourceMappingURL=index.js.map