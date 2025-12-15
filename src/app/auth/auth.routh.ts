import express from 'express';

import { loginValidationSchema } from './auth.validation.js';
import { validateMiddleware } from '../middelware/validetmidelware.js';
import { loginController } from './auth.contlor.js';

const router = express.Router();

router.post('/login', validateMiddleware(loginValidationSchema), loginController);

export const AuthRoutes = router;
