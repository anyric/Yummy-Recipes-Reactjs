import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'anyrics-yummy-recipes-api.herokuapp.com/recipe/api/v1.0/',
  baseURL: 'http://127.0.0.1:5000/recipe/api/v1.0/',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token'),
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem('token') && config.headers['x-access-token'] === 'null') {
    config.headers['x-access-token'] = localStorage.getItem('token');
  }
  return config;
});
