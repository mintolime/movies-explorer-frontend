import logo from '../../images/logo-header.png';
import '../Header/Header.css'

function Header() {
  return (
   <header className="header">
        <img className="logo logo_place_header " src={logo} alt="логотип шапки сайта" />
        <div className="header__nav-box">
          <button>Регистрация</button>
          <button>Войти</button>
        </div>
      </header>
  );
}

export default Header;
