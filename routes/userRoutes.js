import { Router } from 'express';

import {
  createUserValid,
  updateUserValid,
} from '../middlewares/user.validation.middleware.js';
import {
  getAll,
  getById,
  add,
  update,
  remove,
} from '../controllers/userControllers.js';

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createUserValid, add);

router.put('/:id', updateUserValid, update);

router.delete('/:id', remove);

export { router };
