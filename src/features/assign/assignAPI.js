import { API } from '../../apis';

export const fetchWorks = (page = 1, limit = 10) => API.get(`/works?_page=${page}&_limit=${limit}`);
export const fetchWork = (id) => API.get(`/works/${id}`);
export const createWork = (work) => API.post('/works', work);
export const updateWork = (id, work) => API.put(`/works/${id}`, work);
export const deleteWork = (id) => API.delete(`/works/${id}`);
