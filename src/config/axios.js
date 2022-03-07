import axios from 'axios';
const baseURL = 'http://localhost:8080/api/v1';

export const authAxios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const instance = axios.create({
  baseURL,
});
