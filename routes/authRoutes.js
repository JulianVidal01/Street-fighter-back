import { Router } from 'express';

import { createUserValid } from '../middlewares/user.validation.middleware.js';
import { register, login } from '../controllers/authControllers.js';

const router = Router();

router.post('/register', createUserValid, register);

router.post('/login', login);

export { router };
