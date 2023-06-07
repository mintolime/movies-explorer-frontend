import { Link } from 'react-router-dom';

import icon from '../../images/icon-profile.png'
import '../Navigation/Navigation.css'

function Navigation() {
  return (
    <nav role="navigation" className='navigation'>
      <div className='navigation__menu'>
        <input type="checkbox" className='navigation__checkbox' />
        <span className='navigation__toogle' ></span>
        <span className='navigation__toogle'></span>
        <span className='navigation__toogle'></span>
        <ul className='navigation__list'>
          <Link to="/"  className='navigation__link navigation__link-item'>Главная</Link>
          <Link to="/movies"  className='navigation__link navigation__link-item'>Фильмы</Link>
          <Link to="/saved-movies"  className='navigation__link navigation__link-item'>Сохранённые фильмы</Link>

          {/* <a className='navigation__link' href="#link"><li className='navigation__link-item'>Главная</li></a> */}
          {/* <a className='navigation__link' href="#link"><li className='navigation__link-item'>Фильмы</li></a>
          <a className='navigation__link' href="#link"><li className='navigation__link-item'>Сохранённые фильмы</li></a> */}
          <Link to="/profile"  className='navigation__link navigation__link-profile'>Аккаунт <img src={icon} alt="иконка профиля" /></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
