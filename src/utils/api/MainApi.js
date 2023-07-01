import { apiBestMovieUrl } from "../constants";
import { handleResponce } from "../functions";

export class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllOwnMovies = async () => {
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

  saveMovie = async (movie) => {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${apiBestMovieUrl}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${apiBestMovieUrl}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then((res) => handleResponce(res));
  }

  deleteMovie(id) {
    return fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers
    }).then((res) => handleResponce(res));
  }
}

  export const apiDataMain = new MainApi({
    url: 'https://api.mintolime-movies.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
