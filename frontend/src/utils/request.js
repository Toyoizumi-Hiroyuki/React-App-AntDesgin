/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken, gotoLogin } from './auth';

const request = axios.create({
  baseURL: '/api',
});

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        gotoLogin();
        return Promise.reject(new Error('Unauthroized'));
      }
      return Promise.reject(error.response.data);
    }

    return error;
  },
);

export default request;
