import { Link } from 'react-router-dom';
import React from 'react'

import icon from '../../images/icon-profile.png'
import '../Navigation/Navigation.css'
import NavContent from './NavContent';

function Navigation() {
  const [isToggle, setIsToggle] = React.useState(false)

  return (
    <nav  className={`navigation ${isToggle ? '' : 'navigation_no-active'}`}>
      <div className='navigation__menu'>
        <input type="checkbox" className='navigation__checkbox' onClick={() => setIsToggle(!isToggle)} />
        <span className='navigation__toogle' ></span>
        <span className='navigation__toogle'></span>
        <span className='navigation__toogle'></span>
        <ul className='navigation__list'>
          <NavContent />
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
