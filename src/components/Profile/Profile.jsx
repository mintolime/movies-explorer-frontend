import { Link } from "react-router-dom";

import useFormAndValidation from "../../hooks/useFormAndValidation";
import Button from "../Button/Button";
import "../Profile/Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import React from "react";

function Profile({ onLogout, onUpdateUser, isCorrectResponse }) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  React.useEffect(() => {
    if (isCorrectResponse) {
      setShowSaveBtn(false);
    }
  }, [isCorrectResponse]);

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <p className="profile__heading">{`Привет, ${values.name} !`}</p>
        <fieldset className="profile__container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            value={values.name || ""}
            onChange={handleChange}
            name="name"
            type="text"
            aria-label="Ваше имя"
            placeholder="Имя"
            minLength="2"
            maxLength="100"
            id="input-name"
            required
          />
          <span className="profile__input-error">{errors.name}</span>
        </fieldset>

        <fieldset className="profile__container">
          <label className="profile__label">Email</label>
          <input
            className="profile__input"
            value={values.email || ""}
            onChange={handleChange}
            name="email"
            type="email"
            aria-label="Ваша почта"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
          />
          {/* <span className="profile__input-error">
            {isValidEmail ? '' : `Email введен неверно ${errors.email}`}
          </span> */}

          <span className="profile__input-error">{errors.email}</span>
        </fieldset>
        <div className="profile__button-box">
          {/* по тз должна быть откл. кнопка редактирования  
           в моей реализации она служит ссылкой на импут и переход в режим редактирования  */}
          {showSaveBtn ? (
            <Button
              btnClass={`button_type_profile-save ${
                !currentUser || currentUser.name === values.name || !isValid
                  ? "button_disabled"
                  : ""
              } `}
              btnType="submit"
              btnText="Сохранить"
              // disabled={!currentUser || currentUser.name === values.name || !isValid}
            />
          ) : (
            <>
              <a
                className="profile__link-edit page__link"
                href="#input-name"
                onClick={() => {
                  setShowSaveBtn(true);
                }}
              >
                Редактировать
              </a>
              <Link
                to="/"
                className="profile__link-logout page__link"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </Link>
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
