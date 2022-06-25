import { API } from '../../apis';

const personnel = 'users';

export const fetchUsers = (page = 1, limit = 10) =>
  API.get(`/${personnel}?_page=${page}&_limit=${limit}`);
export const fetchUser = (id) => API.get(`/${personnel}/${id}`);
export const createUser = (user) => API.post(`/${personnel}`, user);
export const updateUser = (id, user) => API.put(`/${personnel}/${id}`, user);
export const deleteUser = (id) => API.delete(`/${personnel}/${id}`);
