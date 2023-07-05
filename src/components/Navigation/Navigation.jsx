import React from 'react';

import '../Navigation/Navigation.css';
import NavContent from './NavContent';

function Navigation({isLoggedIn}) {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <nav className={`navigation ${isToggle ? '' : 'navigation_no-active'}`}>
      <div className="navigation__menu">
        <input
          type="checkbox"
          className="navigation__checkbox"
          onClick={() => setIsToggle(!isToggle)}
        />
        <span className="navigation__toogle"></span>
        <span className="navigation__toogle"></span>
        <span className="navigation__toogle"></span>
        <ul className="navigation__list">
          <NavContent isLoggedIn={isLoggedIn}/>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
