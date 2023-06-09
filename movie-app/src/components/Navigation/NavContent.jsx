import { Link } from 'react-router-dom';
import React from 'react'

import icon from '../../images/icon-profile.png'

function NavContent() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        isLoggedIn ?
            <>
                <Link to="/" className='navigation__link navigation__link-item'>Главная</Link>
                <Link to="/movies" className='navigation__link navigation__link-item'>Фильмы</Link>
                <Link to="/saved-movies" className='navigation__link navigation__link-item'>Сохранённые фильмы</Link>
                <Link to="/profile" className='navigation__link navigation__link-profile'>Аккаунт <img src={icon} alt="иконка профиля" /></Link>
            </>
            :
            <>
                <Link to="/signin" className='navigation__link navigation__link-item'>Войти</Link>
                <Link to="/signup" className='navigation__link navigation__link-item'>Регистрация</Link>
            </>
    );
}

export default NavContent;
