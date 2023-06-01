import React from 'react';
// import { Link } from 'react-router-dom';
import '../EntryForm/EntryForm.css'
import logo from '../../images/logo-header.png';

//поправить название
function EntryForm({ title, children, btnText, linkText, onSubmit }) {
  return (
    <section className="entry-form" aria-label={title}>
      <div className="entry-form__container">
         <img className="logo logo_place_login " src={logo} alt="логотип шапки сайта" />
        <h3 className="entry-form__title">{title}</h3>
        <form name="form" className="entry-form__box" onSubmit={onSubmit} >
          {children}
        </form>
        <button className="button button_type_entry button_type_entry_profile" type="submit">
          {btnText}
        </button>
        <span className="entry-form__auth-link entry-form__profile-link">{linkText}</span>
      </div>
      {/* <Link to="/signin" className="form__auth-link">
        {linkText}
      </Link> */}

    </section>
  );
}
export default EntryForm;
