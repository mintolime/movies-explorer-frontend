import { NavLink } from 'react-router-dom';
import React from 'react';

import icon from '../../images/icon-profile.svg';

function NavContent({ isLoggedIn }) {
  const activeLinkClass = 'page__link_active';
  const inativeLinkClass = 'navigation__link navigation__link-item page__link';

  return isLoggedIn ? (
    <>
      <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : inativeLinkClass)}>
        Главная
      </NavLink>
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
      <NavLink
        to="/profile"
        className="navigation__link navigation__link-profile page__link page__link-profile page__link_active">
        <p>Аккаунт</p>
        <img src={icon} className="page__icon-profile" alt="иконка профиля" />
      </NavLink>
    </>
  ) : (
    <>
      <NavLink
        to="/signin"
        className={({ isActive }) => (isActive ? activeLinkClass : inativeLinkClass)}>
        Войти
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? activeLinkClass : inativeLinkClass)}>
        Регистрация
      </NavLink>
    </>
  );
}

export default NavContent;
