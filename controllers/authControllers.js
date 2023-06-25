import { authService } from '../services/authService.js';

export const register = (req, res, next) => {
  try {
    const result = authService.register(req.body);
    res.data = { status: 201, result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};

export const login = (req, res, next) => {
  try {
    const result = authService.login(req.body);
    res.data = { status: 200, result };
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
};
