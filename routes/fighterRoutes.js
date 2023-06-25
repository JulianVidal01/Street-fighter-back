import { Router } from 'express';

import {
  createFighterValid,
  updateFighterValid,
} from '../middlewares/fighter.validation.middleware.js';
import {
  getAll,
  getById,
  add,
  update,
  remove,
} from '../controllers/fighterControllers.js';

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', add);

router.put('/:id', update);

router.delete('/:id', remove);

export { router };
