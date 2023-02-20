import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api, store } from '../store';
import { Product } from '@guitar-shop/shared-types'
import { handleHttpError } from '../services/error-handle';
import { setAuthorizationStatus } from './user-process/user-process';
import { dropToken, saveToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus, NameSpace } from '../const';
import { setProductLoading, setProducts } from './product-process-data/product-process-data';
import { LoginUserDto } from '../dto/login-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRdo } from '../rdo/user.rdo';

export const fetchProducts = createAsyncThunk(
  `${NameSpace.Product}/fetchProducts`,
  async () => {
    store.dispatch(setProductLoading(true));
    try {
      const { data } = await api.get<Product[]>(APIRoute.Products);
      store.dispatch(setProducts(data));
    } catch (error) {
      handleHttpError(error);
    } finally {
      store.dispatch(setProductLoading(false));
    }
  },
);

export const checkAuthorization = createAsyncThunk(
  `${NameSpace.User}/checkAuth`,
  async () => {
    try {
      await api.get(`${APIRoute.Users}${APIRoute.Login}`);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      dropToken();
      handleHttpError(error);
    }
  },
);

export const login = createAsyncThunk(
  `${NameSpace.User}/login`,
  async (login: LoginUserDto) => {
    try {
      const { data } = await api.post<Token>(`${APIRoute.Users}${APIRoute.Login}`, login);
      saveToken(data);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      dropToken();
      handleHttpError(error);
      store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const register = createAsyncThunk(
  `${NameSpace.User}/register`,
  async (newUser: CreateUserDto) => {
    try {
      const { data } = await api.post<CreateUserDto, AxiosResponse<UserRdo>>(`${APIRoute.Users}${APIRoute.Register}`, newUser);
    } catch (error) {
      handleHttpError(error);
    }
  }
);
