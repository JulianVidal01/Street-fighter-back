import { fightRepository } from '../repositories/fightRepository.js';
import HttpError from '../helpers/HttpError.js';

class FightsService {
  getAll() {
    const fights = fightRepository.getAll() || [];
    return fights;
  }

  getById(id) {
    const fight = fightRepository.getOne({ id });
    if (!fight) {
      throw HttpError(404, 'Fight not found');
    }
    return fight;
  }

  create(fightData) {
    const fight = fightRepository.create(fightData);
    return fight;
  }
}

const fightService = new FightsService();

export { fightService };
