import logo from '../../images/logo-header.png';
import '../Header/Header.css'
import Navigation from '../Navigation/Navigation.';

function Header() {
  return (
    <header className="header header_login">
      <img className="logo logo_place_header " src={logo} alt="логотип шапки сайта" />
      <div className="header__nav-box">
        <button className='button button_type_auth'>Регистрация</button>
        <button className='button button_type_login'>Войти</button>
      </div>
    </header>
  );
}

export default Header;
