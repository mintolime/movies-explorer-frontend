import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import logo from '../../images/logo-header.png';
import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();

  return (
    <header className="header header_white">
      <img className="header__logo" src={logo} alt="логотип шапки сайта" />
      <div className="header__nav-box">
        {/* <button className='button button_type_auth'>Регистрация</button>
        <button className='button button_type_login'>Войти</button> */}
        {/*
        {location.pathname === '/' && (
          <>
            <Link to="/signup" className="header__link-auth">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link-login">
              Войти
            </Link>
          </>
        )} */}
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
