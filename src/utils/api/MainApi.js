import { handleResponce } from "../functions";

export class MainApi{

   getAllData() {
    return Promise.all([this.getUserData()]);
  }

   getAllOwnMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
    }).then((res) => handleResponce(res));
  }

  getUserData() {
    return fetch(`${this.url}/users/me `, {
      headers: this.headers,
    }).then((res) => handleResponce(res));
  }

}


