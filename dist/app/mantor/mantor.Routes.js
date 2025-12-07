import express from "express";
import { MentorController } from "./mantor.Contlolar.js";
import { validateMiddleware } from "../middelware/validetmidelware.js";
import { mentorValidationSchema } from "./mantor.Validation.js";
const router = express.Router();
router.post("/create-mentor", validateMiddleware(mentorValidationSchema), MentorController.createMentorController);
router.get("/", MentorController.getAllMentorsController);
router.get("/:id", MentorController.getSingleMentorController);
router.patch("/:id", MentorController.updateMentorController);
router.delete("/:id", MentorController.deleteMentorController);
export const MentorRoutes = router;
//# sourceMappingURL=mantor.Routes.js.map