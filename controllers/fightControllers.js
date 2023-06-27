import { fightService } from '../services/fightService.js';

export const getAll = (req, res, next) => {
  try {
    const result = fightService.getAll();
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const getById = (req, res, next) => {
  try {
    const result = fightService.getById(req.params.id);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const add = (req, res, next) => {
  try {
    const result = fightService.create(req.body);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};
