import { handleResponce } from "../functions";

class MovieApi{
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
      }

      getAllData(){
        return Promise.all([this.getAllMovies()]);
    }

      getAllMovies(){
        return fetch(`${this.url}/`, {
          headers: this.headers,
        }).then((res) => handleResponce(res));
      } 
}

export const apiDataMovies = new MovieApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});