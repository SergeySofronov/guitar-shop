import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '../store';
import { getToken } from './token';
import { setAuthorizationStatus } from '../store/user-process/user-process';
import { AuthorizationStatus, AxiosDefaults, HttpErrorCode } from '../const';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer: ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === HttpErrorCode.UnAuthorized) {
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
  return Promise.reject(error);
};

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: AxiosDefaults.BASE_URL,
    timeout: AxiosDefaults.REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(onRequest, onRequestError);
  api.interceptors.response.use(onResponse, onResponseError);

  return api;
};

export { createAPI };
