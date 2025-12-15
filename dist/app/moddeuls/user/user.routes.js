import { Router } from 'express';
import { validateMiddleware } from '../../middelware/validetmidelware.js';
import { userValidationSchema } from './user.validiitioon.js';
import { UserControlar } from './user.controlar.js';
const router = Router();
router.post("/create", validateMiddleware(userValidationSchema), UserControlar.CreateUserController);
router.get("/", UserControlar.getAllUsersController);
router.get("/:id", UserControlar.getSingleUserController);
router.patch('/:id', UserControlar.updateUserController);
router.delete('/:id', UserControlar.deleteUserController);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map