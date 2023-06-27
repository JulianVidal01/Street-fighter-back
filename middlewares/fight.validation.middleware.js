import { FIGHT } from '../models/fight.js';
import HttpError from '../helpers/HttpError.js';
import { isCreateStructureValid, isFieldValid } from '../helpers/validation.js';

const createFightValid = (req, res, next) => {
  if (!isCreateStructureValid(req.body, FIGHT)) {
    next(HttpError(400, 'Fight entity to create isn’t valid'));
    return;
  }

  let isBodyFieldValid = true;

  for (let [key, value] of Object.entries(req.body)) {
    if (isFieldValid([key, value]) !== true) {
      next(HttpError(400, `Invalid field: ${key}`));
      isBodyFieldValid = false;
      return;
    }
  }

  if (isBodyFieldValid) {
    next();
  }
};

export { createFightValid };
