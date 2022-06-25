import { API } from '../../apis';

export const fetchUsers = (page = 1, limit = 10) => API.get(`/users?_page=${page}&_limit=${limit}`);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const createUser = (user) => API.post('/users', user);
export const updateUser = (id, user) => API.put(`/users/${id}`, user);
export const deleteUser = (id) => API.delete(`/users/${id}`);
