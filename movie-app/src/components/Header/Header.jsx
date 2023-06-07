import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';
import { useResize } from '../../hooks/useResize';
import logo from '../../images/logo-header.png';
import icon from '../../images/icon-profile.png';

function Header() {
  const size = useResize();
 const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <header className={`header  ${location.pathname === '/'  ? 'header_pink' : ''}`}>
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="логотип шапки сайта" />
      </Link>

      {size.isScreenMd ? (
        <Navigation />
      ) : isLoggedIn ? (
        <>
          <div className="header__nav-box  header__nav-box_movies">
            <Link to="/movies" className="header__movies-link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__movies-link">
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="/profile" className="header__link-profile">
            Аккаунт <img className="page__icon-profile" src={icon} alt="иконка профиля" />
          </Link>
        </>
      ) : (
        <div className="header__nav-box">
          <Link to="/signup" className="header__link-auth">
            Регистрация
          </Link>
          <Link to="/signin" className="header__link-login">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
