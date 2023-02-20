import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Product } from '@guitar-shop/shared-types';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
};

export type ProductsState = {
  products: Product[];
  isLoading: boolean;
};

export type ProductState = {
  isLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
