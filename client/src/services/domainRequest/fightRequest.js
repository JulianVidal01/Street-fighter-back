import { get, post } from '../requestHelper';

const entity = 'fights';

export const getFights = async () => {
  return await get(entity);
};

export const getFightById = async id => {
  return await get(entity, id);
};

export const createFight = async body => {
  return await post(entity, body);
};
