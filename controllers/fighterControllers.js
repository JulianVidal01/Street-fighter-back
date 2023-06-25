import { fighterService } from '../services/fighterService.js';

export const getAll = (req, res, next) => {
  try {
    const result = fighterService.getAll();
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const getById = (req, res, next) => {
  try {
    const result = fighterService.getById(req.params.id);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const add = (req, res, next) => {
  try {
    const result = fighterService.create(req.body);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const update = (req, res, next) => {
  try {
    const result = fighterService.update(req.params.id, req.body);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const remove = (req, res, next) => {
  try {
    const result = fighterService.delete(req.params.id);
    res.data = { result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};
