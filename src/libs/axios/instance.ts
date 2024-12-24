import ENVS from '@/constants/envs';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { logDebug } from './helpers';
import { LOCALSTORAGE } from '@/constants/storages';

const axiosInstance = axios.create({
  baseURL: `${ENVS.API_DOMAIN}/api/v1`,
});

axiosInstance.interceptors.request.use(
  ($config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if ($config.headers) {
      const token = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN)
      if (token) {
        $config.headers.Authorization = `Bearer ${token}`;
      }

      logDebug(
        `%c[${$config.method?.toUpperCase()}] -> ${$config.url}:`,
        "background-color: #deeb34; color: #000; font-size: 14px",
        $config.data
      )
      // if ($config.method === 'get') {
      //   $config.params = { ...$config.params, locale: window.localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || 'vi' };
      // }
      // $config.headers['Content-Type'] = 'application/json';
      // $config.headers.Accept = 'application/json';
    }
    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const data = response.data.data
    logDebug(
      `%c[${response.config.method?.toUpperCase()}] -> ${response.config.url}:`,
      "background-color: #23d947; color: #000; font-size: 14px",
      data,
    )
    if (response.data && response.data.success === false) {
      return Promise.reject(new Error(response.data?.message || 'Lỗi không xác định từ server'));
    }
    return data
  },
  async (err: AxiosError): Promise<AxiosError> => {
    const error =  err.response?.data ? (err.response?.data as any)?.errs : err
    if(error?.config) {
      logDebug(
        `%c[${error.config.method?.toUpperCase()}] -> ${error.config.url}:`,
        "background-color: #23d947; color: #000; font-size: 14px",
        error,
      )
    }
    return Promise.reject(err)
  }
);
export default axiosInstance;