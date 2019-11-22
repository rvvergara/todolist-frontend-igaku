import axios from 'axios';

export const sendRequest = async (method, path, data) => {
  const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.API_URL;
  const result = await axios[method](`${baseURL}${path}`, data);
  return result;
};

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
