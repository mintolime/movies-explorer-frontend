import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';
import { useResize } from '../../hooks/useResize';
import logo from '../../images/logo-header.svg';

import HeaderNav from './HeaderNav';
import { SCREEN_MD } from '../../utils/config';

function Header({ isLoggedIn }) {
  const size = useResize();
  const location = useLocation();

  return (
    <header className={`header  ${location.pathname === '/' ? 'header_pink' : ''}`}>
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="логотип шапки сайта" />
      </Link>

      {size.width < SCREEN_MD ? (
        <Navigation isLoggedIn={isLoggedIn} />
      ) : (
        <HeaderNav isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
}

export default Header;
