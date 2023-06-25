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

router.post('/', add);

router.put('/:id', update);

router.delete('/:id', remove);

export { router };
