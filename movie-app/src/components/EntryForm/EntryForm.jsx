import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../EntryForm/EntryForm.css'
import logo from '../../images/logo-header.png';
import Button from '../Button/Button';

//поправить название
function EntryForm({ title, children, btnText, linkText, onSubmit }) {
  const location = useLocation();

  return (
    <section className="entry-form" aria-label={title}>
      <div className="entry-form__container">
        <Link className="entry-form__link" to="/">
          <img className="logo logo_place_login" src={logo} alt="логотип сайта" />
        </Link>
        <h3 className="entry-form__title">{title}</h3>
        <form name="form" className="entry-form__box" onSubmit={onSubmit} >
          {children}
        </form>
        <Button btnClass='button_type_entry button_type_entry_profile' btnType='submit' btnText={btnText} />
        {/* {location.pathname === '/signup' && <Link to='/signin'><p className="entry-form__auth-link entry-form__profile-link">{linkText}</p>Войти</Link>
        }
        {location.pathname === '/signin' && (
          <Link to='/signup'><p className="entry-form__auth-link entry-form__profile-link">{linkText}</p>Регистрация</Link>
        )} */}
        <p className="entry-form__auth-link entry-form__profile-link">{linkText}</p>
      </div>
      {/* <Link to="/signin" className="form__auth-link">
        {linkText}
      </Link> */}

    </section>
  );
}
export default EntryForm;
