import { USER } from '../models/user.js';
import HttpError from '../helpers/HttpError.js';
import {
  isCreateStructureValid,
  isUpdateStructureValid,
  isFieldValid,
} from '../helpers/validation.js';

const createUserValid = (req, res, next) => {
  if (!isCreateStructureValid(req.body, USER)) {
    next(HttpError(400, 'User entity to create isn’t valid'));
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

const updateUserValid = (req, res, next) => {
  if (!isUpdateStructureValid(req.body, USER)) {
    next(HttpError(400, 'User entity to update isn’t valid'));
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

export { createUserValid, updateUserValid };
