import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../images/icon-profile.svg';

function HeaderNav() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return isLoggedIn ? (
    <>
      <div className="header__nav-box  header__nav-box_movies ">
        <Link to="/movies" className="header__movies-link page__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__movies-link page__link">
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="page__link-profile page__link">
        <p className="header__link-text">Аккаунт</p>
        <img
          className={`page__icon-profile  ${
            location.pathname === '/' ? 'page__icon-profile-pink' : ''
          }`}
          src={icon}
          alt="иконка профиля"
        />
      </Link>
    </>
  ) : (
    <div className="header__nav-box">
      <Link to="/signup" className="header__link-auth page__link">
        Регистрация
      </Link>
      <Link to="/signin" className="header__link-login page__link">
        Войти
      </Link>
    </div>
  );
}

export default HeaderNav;
