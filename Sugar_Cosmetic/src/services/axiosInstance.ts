import axios from 'axios';
import { BASE_URL } from '@/utils/apiEndpoints';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

function onTokenExpiry() {
  localStorage.removeItem('authToken');
  window.location.href = '/login';
}

axiosInstance.interceptors.request.use(
  (config) => {
    const myConfig = { ...config };

    const token: string | null = localStorage.getItem('authToken');
    if (token) {
      myConfig.headers.Authorization = `Bearer ${token}`;
    }

    return myConfig;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorResponse = error.response;
    if (errorResponse?.status === 401) {
      onTokenExpiry();
    }
    return Promise.reject(error);
  }
);
