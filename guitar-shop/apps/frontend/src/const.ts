export const AxiosDefaults = {
  BASE_URL: 'https://localhost:3333/guitar-shop',
  REQUEST_TIMEOUT: 5000,
} as const

export enum APIRoute {
  Users = '/users',
  Products = '/products',
  Comments = '/comments',
  Orders = '/orders',
  Register = '/register',
  Login = '/login',
  Photo = '/photo',
}

export enum AppRoute {
  // Available to all customers
  Catalog = '/',
  Product = '/product',
  Cart = '/cart',
  Register = '/register',
  Login = '/login',
  NotFound = '*',
  // Available to Admins
  Order = '/order/:id',
  OrderList = '/orders',
  ProductList = '/products',
  NewProduct = '/new-product',
  EditProduct = '/edit-product/:id',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum HttpErrorCode {
  BadRequest = 400,
  UnAuthorized = 401,
  NotFound = 404,
  Forbidden = 403,
}

export enum NameSpace {
  User = 'User',
  Product = 'Product',
}

