import client from './client';

export const login = ({ username, password }) => {
  return client.post('/auth/login', {
    username,
    password,
  });
};

export const logout = () => {
  return client.post('/auth/logout');
};

export const register = ({ username, password }) => {
  return client.post('/auth/register', {
    username,
    password,
  });
};

export const check = () => client.get('/auth/check');
