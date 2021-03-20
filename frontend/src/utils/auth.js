import Cookies from 'js-cookie';

const tokenKey = 'auth-token';

export function getToken() {
  return Cookies.get(tokenKey);
}

export function setToken(token) {
  return Cookies.set(tokenKey, token);
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

export function gotoLogin() {
  window.location.href = `${process.env.REACT_APP_LOGIN_URL}`;
}

export function logout() {
  removeToken();
  window.location.href = `${process.env.REACT_APP_LOGIN_URL}`;
}
