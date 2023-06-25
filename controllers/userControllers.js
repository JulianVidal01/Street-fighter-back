import { userService } from '../services/userService.js';

export const getAll = (req, res, next) => {
  try {
    const result = userService.getAll();
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const getById = (req, res, next) => {
  try {
    const result = userService.getById(req.params.id);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const add = (req, res, next) => {
  try {
    const result = userService.create(req.body);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const update = (req, res, next) => {
  try {
    const result = userService.update(req.params.id, req.body);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const remove = (req, res, next) => {
  try {
    const result = userService.delete(req.params.id);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};
