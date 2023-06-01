import React from 'react';
// import { Link } from 'react-router-dom';
import '../EntryForm/EntryForm.css'
import logo from '../../images/logo-header.png';

//поправить название
function EntryForm({ title, children, btnText, linkText, onSubmit }) {
  return (
    <section className="form" aria-label={title}>
      <img className="logo logo_place_header " src={logo} alt="логотип шапки сайта" />
      <div className="form__container">
        <h3 className="form__title">{title}</h3>
        <form name="form" className="form__box" onSubmit={onSubmit} >
          {children}
        </form>
        <button className="button button_type_entry" type="submit">
          {btnText}
        </button>
        <span className="form__auth-link">{linkText}</span>
      </div>
      {/* <Link to="/signin" className="form__auth-link">
        {linkText}
      </Link> */}

    </section>
  );
}
export default EntryForm;
