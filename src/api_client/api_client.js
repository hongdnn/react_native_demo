import axios from "axios";
import { ACCESS_TOKEN_KEY, secureStorage } from "./secure_storage";

const BASE_URL = 'https://restcountries.com/v3.1';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  });

  console.log('test apiClient');
  
  apiClient.interceptors.request.use(
    async (config) => {
      const token = await secureStorage.getToken(ACCESS_TOKEN_KEY);
      console.log(`TOKEN: ${token}`);
      config.headers.Authorization = `Bearer ${token}`
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
export default apiClient;