import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import icon from '../../images/icon-profile.svg';

function HeaderNav({ isLoggedIn }) {
  const location = useLocation();
  const activeLinkClass = 'header__movies-link_active';
  const inativeLinkClass = 'header__movies-link page__link';

  return isLoggedIn ? (
    <>
      <div className="header__nav-box  header__nav-box_movies ">
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? activeLinkClass : inativeLinkClass)}>
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) => (isActive ? activeLinkClass : inativeLinkClass)}>
          Сохранённые фильмы
        </NavLink>
      </div>
      <NavLink to="/profile" className="page__link-profile page__link">
        <p className="header__link-text">Аккаунт</p>
        <img
          className={`page__icon-profile  ${
            location.pathname === '/' ? 'page__icon-profile-pink' : ''
          }`}
          src={icon}
          alt="иконка профиля"
        />
      </NavLink>
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
