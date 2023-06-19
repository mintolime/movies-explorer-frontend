import { handleResponce } from "../functions";

export class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllData() {
    return Promise.all([this.getUserData(),this.getAllOwnMovies()]);
  }

  getAllOwnMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
      method: 'GET',
    }).then((res) => handleResponce(res));
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      method: 'GET',
    }).then((res) => handleResponce(res));
  }

  updateUserData(data) {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((res) => handleResponce(res));
  }
}


