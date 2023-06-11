import EntryForm from '../EntryForm/EntryForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import '../Login/Login.css';

function Login({ onAuthorization }) {
  const { values, handleChange, isValid, errors } = useFormAndValidation();

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onAuthorization(values);
  }

  return (
    <EntryForm title="Рады видеть!" btnText="Войти" linkText="Регистрация" onSubmit={handleSubmit}>
      <fieldset className="form__inner form__inner_padding-bottom">
        <label className="form__label form__label_profile ">Email </label>
        <input
          className={`form__input ${isValid ? '' : 'form__input-error_active'}`}
          value={values.email || ''}
          onChange={handleChange}
          name="email"
          type="email"
          aria-label="Ваша почта"
          placeholder="Введите почту"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error">{errors.email}</span>

        <label className="form__label form__label_profile">Пароль </label>
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
          required
        />
        <span className="form__input-error">{errors.password}</span>
      </fieldset>
    </EntryForm>
  );
}
export default Login;
