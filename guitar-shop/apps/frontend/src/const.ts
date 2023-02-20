export const AxiosDefaults = {
  BASE_URL: 'https://localhost:3334/',
  REQUEST_TIMEOUT: 5000,
} as const

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  PromoFilm = '/promo',
  Comments = '/comments',
  SimilarFilms = '/similar',
  Login = '/login',
  Logout = '/logout',
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
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
}

export enum NameSpace {
  User = 'User',
}

