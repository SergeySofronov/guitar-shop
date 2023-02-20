type Token = string;

const USER_TOKEN_KEY = 'userToken';

const getToken = (): Token => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  return token ?? '';
};

const saveToken = (token: Token): void => {
  localStorage.setItem(USER_TOKEN_KEY, token);
};

const dropToken = (): void => {
  localStorage.removeItem(USER_TOKEN_KEY);
};

export {
  getToken,
  saveToken,
  dropToken,
  type Token
};
