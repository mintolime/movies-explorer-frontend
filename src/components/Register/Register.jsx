import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useNavigate } from 'react-router-dom';

function Register({ onRegister, isLoggedIn, isInputDisabled }) {
  const { values, handleChange, isValid, errors } = useFormAndValidation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn]);

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    onRegister(values);
  }

  return (
    <EntryForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      linkText="Войти"
      onSubmit={handleSubmit}
      isValidBtn={isValid}>
      <fieldset className="form__inner form__inner_padding-bottom">
        <label className="form__label">Имя</label>
        <input
          className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
          value={values.name || ''}
          onChange={handleChange}
          disabled={isInputDisabled}
          name="name"
          type="text"
          aria-label="Ваше имя"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="100"
          autoComplete="off"
          required
        />
        <span className="form__input-error">{errors.name}</span>

        <label className="form__label">Email</label>
        <input
          className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
          value={values.email || ''}
          onChange={handleChange}
          disabled={isInputDisabled}
          name="email"
          type="email"
          aria-label="Ваша почта"
          placeholder="Ваша почта"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required
        />
        <span className="form__input-error">{errors.email}</span>

        <label className="form__label">Пароль</label>
        <input
          className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
          name="password"
          type="password"
          aria-label="Ваш пароль"
          placeholder="Ваш пароль"
          value={values.password || ''}
          minLength="8"
          maxLength="30"
          onChange={handleChange}
          disabled={isInputDisabled}
          autoComplete="off"
          required
        />
        <span className="form__input-error"> {errors.password}</span>
      </fieldset>
    </EntryForm>
  );
}

export default Register;
