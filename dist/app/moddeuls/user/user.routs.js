import express from 'express';
import { UserController } from './user.controlar.js';
// import {  UserController } from './user.controller';
// import validateRequest from '../../middlewares/validateRequest';
// import { userValidationSchema } from './user.validation';
// import { authMiddleware } from '../../middlewares/auth';
// import { checkRole } from '../../middlewares/chackRole';
const router = express.Router();
// router.post('/create-user',authMiddleware,validateRequest(userValidationSchema), UserController.createUserController);
router.get('/', UserController.getAllUsersController);
// router.get('/:id', UserController.getSingleUserController);
// router.patch('/:id', UserController.updateUserController);
// router.delete('/:id',authMiddleware,checkRole("admin"), UserController.deleteUserController);
export const UserRoutes = router;
//# sourceMappingURL=user.routs.js.map