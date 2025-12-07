
import { Router } from 'express';
import { UserControlar } from './user.controlar.js';
import { validateMiddleware } from '../../middelware/validetmidelware.js';
import { userValidationSchema } from './user.validiitioon.js';


const router = Router();

router.post("/create",validateMiddleware(userValidationSchema), UserControlar.CreateUsarControlar);
router.get("/find", UserControlar.getAllUsersController);
router.get("/find/:id", UserControlar.getSingleUserController);
router.patch('/:id', UserControlar.updateUserController);
router.delete('/:id',UserControlar.deleteUserController);




export const UserRouter = router;