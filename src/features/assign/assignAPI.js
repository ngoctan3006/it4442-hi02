import { API } from '../../apis';

const assign = 'works';

export const fetchWorks = (page = 1, limit = 10) =>
  API.get(`/${assign}?_page=${page}&_limit=${limit}`);
export const fetchWork = (id) => API.get(`/${assign}/${id}`);
export const createWork = (work) => API.post(`/${assign}`, work);
export const updateWork = (id, work) => API.put(`/${assign}/${id}`, work);
export const deleteWork = (id) => API.delete(`/${assign}/${id}`);
