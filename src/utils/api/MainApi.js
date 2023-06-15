import { handleResponce } from "../functions";

class MainApi{

   getAllData() {
    return Promise.all([this.getAllOwnMovies()]);
  }

   getAllOwnMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
    }).then((res) => handleResponce(res));
  }

}

export const apiDataMain = new MainApi({
  url: 'https://api.mintolime-movies.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});
