import { Link } from 'react-router-dom';
import React from 'react';

import icon from '../../images/icon-profile.svg';

function NavContent() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return isLoggedIn ? (
    <>
      <Link to="/" className="navigation__link navigation__link-item page__link">
        Главная
      </Link>
      <Link to="/movies" className="navigation__link navigation__link-item page__link">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__link navigation__link-item page__link">
        Сохранённые фильмы
      </Link>
      <Link to="/profile" className="navigation__link navigation__link-profile page__link page__link-profile">
        <p>Аккаунт</p>
        <img src={icon} className="page__icon-profile" alt="иконка профиля" />
      </Link>
    </>
  ) : (
    <>
      <Link to="/signin" className="navigation__link navigation__link-item">
        Войти
      </Link>
      <Link to="/signup" className="navigation__link navigation__link-item">
        Регистрация
      </Link>
    </>
  );
}

export default NavContent;
