import { Link } from 'react-router-dom';
import React from 'react'

import icon from '../../images/icon-profile.png'
import '../Navigation/Navigation.css'
import NavContent from './NavContent';

function Navigation() {
  const [isToggle, setIsToggle] = React.useState(false)

  return (
    <nav role="navigation" className={`navigation ${isToggle? '' : 'navigation_no-active'}`}>
      <div className='navigation__menu'>
        <input type="checkbox" className='navigation__checkbox' onClick={() => setIsToggle(!isToggle)}  />
        <span className='navigation__toogle' ></span>
        <span className='navigation__toogle'></span>
        <span className='navigation__toogle'></span>
        <ul className='navigation__list'>
          <NavContent/>
          {/* <Link to="/"  className='navigation__link navigation__link-item'>Главная</Link>
          <Link to="/movies"  className='navigation__link navigation__link-item'>Фильмы</Link>
          <Link to="/saved-movies"  className='navigation__link navigation__link-item'>Сохранённые фильмы</Link>
          <Link to="/profile"  className='navigation__link navigation__link-profile'>Аккаунт <img src={icon} alt="иконка профиля" /></Link> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
