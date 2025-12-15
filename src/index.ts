import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./app/moddeuls/user/user.routes.js";
import { AuthRoutes } from "./app/auth/auth.routh.js";
import { CategoryRoutes } from "./app/courseCatgory/coursCatagory.routs.js";
import { CourseRoutes } from "./app/Course/Course.Routs.js";
import { StudentRoutes } from "./app/student/student.Routs..js";
import { MentorRoutes } from "./app/mantor/mantor.Routes.js";
import { SuccessStoryRoutes } from "./app/SuccessStories/success.routes.js";
import { CertificateRoutes } from "./app/Certificate/Certificate.Routs.js";
import { EventRoutes } from "./app/Evant/Evant.Routes.js";
import { GalleryRoutes } from "./app/Galary/Galary.Route.js";
import { WorkingPartnerRoutes } from "./app/WorkingPatnar/workingPartner.route.js";

const app: Application = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // ✅ correct
  })
);
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! I am Shuvo");
});

app.use("/api", AuthRoutes);
app.use("/api/user", UserRouter);
app.use("/api/catagory", CategoryRoutes);
app.use("/api/course", CourseRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/mentor", MentorRoutes);
app.use("/api/sucessstory", SuccessStoryRoutes);
app.use("/api/certificate", CertificateRoutes);
app.use("/api/event", EventRoutes);
app.use("/api/gallery", GalleryRoutes);
app.use("/api/partner", WorkingPartnerRoutes);

export default app;
