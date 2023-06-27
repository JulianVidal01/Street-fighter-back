import { Router } from 'express';
import { getAll, getById, add } from '../controllers/fightControllers.js';
import { createFightValid } from '../middlewares/fight.validation.middleware.js';

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createFightValid, add);

export { router };
