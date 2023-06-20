import { Link } from 'react-router-dom';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import Button from '../Button/Button';
import '../Profile/Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import React from 'react';

function Profile({ onLogout, onUpdateUser,isCorrectResponse }) {
  const { values, handleChange, errors, resetForm,isValid, EmailValidator } = useFormAndValidation();
  const validEmail = EmailValidator(values.email);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [resetForm, currentUser]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  // console.log(isCorrectResponse)
  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <p className="profile__heading">{`Привет, ${values.name} !`}</p>
        <fieldset className="profile__container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            type="text"
            aria-label="Ваше имя"
            placeholder="Имя"
            minLength="2"
            maxLength="100"
            required
          />
          <span className="profile__input-error">{errors.name}</span>
          {/* <span className="profile__input-error">{errors.name}</span> */}
        </fieldset>

        <fieldset className="profile__container">
          <label className="profile__label">Email</label>
          <input
            className="profile__input"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            type="email"
            aria-label="Ваша почта"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="profile__input-error">
            {validEmail ? '' : `Email введен неверно ${errors.email}`}
          </span>

          {/* <span className="profile__input-error">{errors.email}</span> */}
        </fieldset>
        <div className="profile__button-box">
          {/* <Button
          btnClass="button button_type_profile-edit"
          btnType="button"
          btnText="Редактировать"
        /> */}
          <Button btnClass={`button_type_profile-save ${validEmail & isValid ? '' : 'button_disabled'}`} btnType="submit" btnText="Сохранить" />
          <Link to="/" className="profile__link_logout page__link" onClick={onLogout}>
            Выйти из аккаунта
          </Link>

          {/* <Button btnClass="button_type_profile-save button_disabled" btnType="submit" btnText="Сохранить" /> */}
        </div>
      </form>
    </section>
  );
}

export default Profile;
