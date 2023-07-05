// разрешения экранов
export const SCREEN_SM = 319;
export const SCREEN_MD = 767;
export const SCREEN_XL = 1279;
// длительность короткометражки
export const MOVIE_DURATION_MIN = 40
// количество карточек для рендера на странице
export const MOBILE_RENDER_CARD = 5;
export const TABLET_RENDER_CARD = 8;
export const DESKTOP_RENDER_CARD = 12
// количество добавленных карточек в зависимости от экрана
export const MIN_ADD_CARD = 2;
export const MAX_ADD_CARD = 3;
// для валидации почты и имени
export const regExpName = /^[a-zA-Zа-яА-Я\sё-]+$/;
export const regExpEmail =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//масcивы роутов компонента
export const headerRoutes = ['/', '/movies', '/saved-movies', '/profile'];
export const footerRoutes = ['/', '/movies', '/saved-movies'];
// url для вставки поиска изображений
export const apiBestMovieUrlImg = 'https://api.nomoreparties.co';
export const apiBestMovieData = 'https://api.nomoreparties.co/beatfilm-movies';
// url backend
export const apiBdMainData = 'https://api.mintolime-movies.nomoredomains.rocks';

