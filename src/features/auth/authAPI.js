import { API } from '../../apis';

export const login = (username) => API.get(`/users?username=${username}`);
