import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../EntryForm/EntryForm.css';
import logo from '../../images/logo-header.svg';
import Button from '../Button/Button';

//поправить название
function EntryForm({ title, children, btnText, linkText, onSubmit,isValidBtn }) {
  const location = useLocation();

  return (
    <section className="entry-form" aria-label={title}>
      <div className="entry-form__container">
        <Link className="entry-form__link" to="/">
          <img className="logo logo_place_login" src={logo} alt="логотип сайта" />
        </Link>
        <h3 className="entry-form__title">{title}</h3>
        <form name="form" className="entry-form__box" onSubmit={onSubmit}>
          {children}
          <Button
            btnClass={`button_type_entry button_type_entry_profile ${
              isValidBtn ? '' : 'button_disabled'
            }`}
            btnType="submit"
            btnText={btnText}
          />
        </form>

        {location.pathname === '/signup' && (
          <p className=" entry-form__auth-text">
            Уже зарегистрированы?
            <Link to="/signin" className="page__link entry-form__auth-link">
              {linkText}
            </Link>
          </p>
        )}
        {location.pathname === '/signin' && (
          <p className=" entry-form__auth-text">
            Ещё не зарегистрированы?
            <Link to="/signup" className="page__link entry-form__auth-link">
              {linkText}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
export default EntryForm;
