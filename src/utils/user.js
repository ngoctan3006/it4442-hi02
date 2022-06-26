import { removeAccents } from './common';

export const makeUsername = (user) => {
  let name = removeAccents(user.name).toLowerCase().split(' ');
  const len = name.length;
  let username = name[len - 1] + '.';
  name = name.slice(0, len - 1);
  username += name.map((el) => el[0]).join('');
  username += user.id;

  return username;
};

export const generatePassword = () => Math.random().toString(36).slice(-8);
