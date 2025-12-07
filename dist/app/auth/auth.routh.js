import express from 'express';
import { loginController } from './auth.contlor.js';
import { loginValidationSchema } from './auth.validation.js';
import { validateMiddleware } from '../middelware/validetmidelware.js';
const router = express.Router();
router.post('/login', validateMiddleware((loginValidationSchema)), loginController);
export const AuthRoutes = router;
//# sourceMappingURL=auth.routh.js.map