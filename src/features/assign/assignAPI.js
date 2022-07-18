import { API } from '../../apis';

const assign = 'works';

export const fetchWorks = (params = {}) =>
  API.get(`/${assign}?_page=${params?.pagination?.current || 1}&_limit=10`);
export const fetchWork = (id) => API.get(`/${assign}/${id}`);
export const createWork = (work) => API.post(`/${assign}`, work);
export const updateWork = (id, work) => API.put(`/${assign}/${id}`, work);
export const deleteWork = (id) => API.delete(`/${assign}/${id}`);
