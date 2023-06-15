import { handleResponce } from "../functions";

class MainApi{
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
      }
      
}

export const apiDataMain = new MainApi({
  url: 'https://api.mintolime-movies.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});