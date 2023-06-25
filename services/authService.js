import { userService } from './userService.js';
import HttpError from '../helpers/HttpError.js';

class AuthService {
  register(userData) {
    const { email, phoneNumber } = userData;
    const resultByEmail = userService.search({
      email: email.toLowerCase(),
    });
    const resultByPhoneNumber = userService.search({
      phoneNumber,
    });
    if (resultByEmail || resultByPhoneNumber) {
      throw HttpError(409, 'User already exists');
    }
    const user = userService.create({
      ...userData,
      email: email.toLowerCase(),
    });
    return user;
  }

  login(userData) {
    const { email, password } = userData;
    const user = userService.search({
      email: email.toLowerCase(),
    });
    if (!user) {
      throw HttpError(401, 'Email or password is wrong.');
    }
    if (user.password !== password) {
      throw HttpError(401, 'Email or password is wrong.');
    }
    return user;
  }
}

const authService = new AuthService();

export { authService };
