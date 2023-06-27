import { FIGHTER } from '../models/fighter.js';
import HttpError from '../helpers/HttpError.js';
import {
  isCreateStructureValid,
  isUpdateStructureValid,
  isFieldValid,
} from '../helpers/validation.js';

const createFighterValid = (req, res, next) => {
  if (!req.body.health) {
    req.body.health = 100;
  }

  if (!isCreateStructureValid(req.body, FIGHTER)) {
    next(HttpError(400, 'Fighter entity to create isn’t valid'));
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

const updateFighterValid = (req, res, next) => {
  if (!isUpdateStructureValid(req.body, FIGHTER)) {
    next(HttpError(400, 'Fighter entity to update isn’t valid'));
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

export { createFighterValid, updateFighterValid };
