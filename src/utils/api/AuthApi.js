// import handleResponce from "./utils";

import { handleResponce } from "../functions";

// export const BASE_URL = 'https://auth.nomoreparties.co';

// const headers = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };



// export const register = ({ email, password }) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ email, password }),
//   }).then((res) => handleResponce(res));
// };

// export const authorize = ({ email, password }) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ email, password }),
//   }).then((res) => handleResponce(res));
// };

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => handleResponce(res));
// };

class Auth {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  register({ name, email, password }) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => handleResponce(res));
  }

  authorize({ email, password }) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => handleResponce(res))
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => handleResponce(res));
  }
}

export const apiAuth = new Auth({
  url: 'https://api.mintolime-movies.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

