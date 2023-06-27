import HttpError from '../helpers/HttpError.js';
import { userRepository } from '../repositories/userRepository.js';

class UserService {
  getAll() {
    const users = userRepository.getAll() || [];
    return users;
  }

  getById(id) {
    const user = userRepository.getOne({ id });
    if (!user) {
      throw HttpError(404, 'User not found');
    }
    return user;
  }

  search(search) {
    const user = userRepository.getOne(search);
    if (!user) {
      return null;
    }
    return user;
  }

  isUserUnique(userData) {
    const { email, phoneNumber } = userData;
    const resultByEmail = this.getAll().find(
      user => user.email?.toLowerCase() === email?.toLowerCase(),
    );
    const resultByPhoneNumber = userRepository.getOne({
      phoneNumber,
    });
    return !resultByEmail && !resultByPhoneNumber;
  }

  create(userData) {
    if (!this.isUserUnique(userData)) {
      throw HttpError(409, 'User already exists');
    }
    const user = userRepository.create(userData);
    return user;
  }

  update(id, dataToUpdate) {
    this.getById(id);
    const user = userRepository.update(id, dataToUpdate);
    return user;
  }

  delete(id) {
    const user = userRepository.delete(id);
    if (user.length === 0) {
      throw HttpError(404, 'User not found');
    }
    return user;
  }
}

const userService = new UserService();

export { userService };
