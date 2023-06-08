import '../Register/Register.css'
import EntryForm from '../EntryForm/EntryForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register({ onRegister }) {
  const { values, handleChange,isValid, errors } = useFormAndValidation();

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    onRegister(values);
  }
  return (
    <EntryForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      linkText="Уже зарегистрированы? Войти"
      onSubmit={handleSubmit}>
      <fieldset className="form__inner form__inner_padding-bottom">

        <label className="form__label">Имя</label>
          <input
            className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            type="email"
            aria-label="Ваше имя"
            // placeholder="Имя"
            minLength="2"
            maxLength="100"
            required
          />
        <span className="form__input-error">{errors.name}</span>

        <label className="form__label">Email</label>
          <input
           className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            type="email"
            aria-label="Ваша почта"
            // placeholder="Email"
            minLength="2"
            maxLength="30"
            required
          />
        <span className="form__input-error">{errors.email}</span>

        <label className="form__label">Пароль</label>
          <input
            className="form__input form__input_login"
            name="password"
            type="password"
            aria-label="Ваш пароль"
            // placeholder="Пароль"
            value={values.password || ''}
            minLength="8"
            maxLength="30"
            onChange={handleChange}
            required
          />
          <span className="form__input-error"> {errors.password}</span>

      </fieldset>
    </EntryForm>
  );
}

export default Register;
