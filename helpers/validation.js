import {
  emailRegex,
  phoneNumberRegex,
  passwordRegex,
} from '../helpers/regularExpressions.js';

const isFighterAttributeValid = (value, range) => {
  const { min, max } = range;
  return Number.isInteger(+value) && +value >= min && +value <= max;
};

export const isCreateStructureValid = (body = {}, schema = {}) => {
  const schemaFields = Object.keys(schema).filter(item => item !== 'id');
  const bodyFields = Object.keys(body);
  return (
    schemaFields.length === bodyFields?.length &&
    bodyFields.every(val => schemaFields.includes(val))
  );
};

export const isUpdateStructureValid = (body = {}, schema = {}) => {
  const schemaFields = Object.keys(schema).filter(item => item !== 'id');
  const bodyFields = Object.keys(body);
  return (
    bodyFields?.length !== 0 &&
    bodyFields.every(val => schemaFields.includes(val))
  );
};

export const isFieldValid = bodyField => {
  const [key, value] = bodyField;

  switch (key) {
    case 'firstName':
      return value.trim().length !== 0;
    case 'lastName':
      return value.trim().length !== 0;
    case 'email':
      return value.match(emailRegex) !== null;
    case 'phoneNumber':
      return value.match(phoneNumberRegex) !== null;
    case 'password':
      return value.match(passwordRegex) !== null;
    case 'name':
      return value.trim().length !== 0;
    case 'power':
      return isFighterAttributeValid(value, { min: 1, max: 100 });
    case 'defense':
      return isFighterAttributeValid(value, { min: 1, max: 10 });
    case 'health':
      return isFighterAttributeValid(value, { min: 80, max: 120 });
    case 'fighter1':
      return value.trim().length !== 0;
    case 'fighter2':
      return value.trim().length !== 0;
    case 'log':
      return Array.isArray(value);
    default:
      return false;
  }
};
