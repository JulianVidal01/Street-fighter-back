import HttpError from '../helpers/HttpError.js';
import { fighterRepository } from '../repositories/fighterRepository.js';

class FighterService {
  getAll() {
    const fighters = fighterRepository.getAll() || [];
    return fighters;
  }

  getById(id) {
    const fighter = fighterRepository.getOne({ id });
    if (!fighter) {
      throw HttpError(404, 'Fighter not found');
    }
    return fighter;
  }

  create(fighterData) {
    const { name } = fighterData;
    const allFighters = this.getAll();
    const result = allFighters.find(
      fighter => fighter.name.toLowerCase() === name.toLowerCase(),
    );
    if (result) {
      throw HttpError(409, 'Fighter already exists');
    }
    const fighter = fighterRepository.create(fighterData);
    return fighter;
  }

  update(id, dataToUpdate) {
    this.getById(id);
    const fighter = fighterRepository.update(id, dataToUpdate);
    return fighter;
  }

  delete(id) {
    const fighter = fighterRepository.delete(id);
    if (fighter.length === 0) {
      throw HttpError(404, 'Fighter not found');
    }
    return fighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
