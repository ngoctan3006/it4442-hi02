import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllWorks = () => API.get('/works');
export const fetchWork = (id) => API.get(`/works/${id}`);
export const createWork = (work) => API.post('/works', work);
export const updateWork = (work) => API.put(`/works/${work.id}`, work);
export const deleteWork = (id) => API.delete(`/works/${id}`);
