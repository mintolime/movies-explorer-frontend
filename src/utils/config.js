// разрешения экранов
export const SCREEN_SM = 319;
export const SCREEN_MD = 767;
export const SCREEN_XL = 1279;
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
