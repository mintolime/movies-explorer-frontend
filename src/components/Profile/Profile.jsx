import { Link } from 'react-router-dom';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import Button from '../Button/Button';
import '../Profile/Profile.css';

function Profile() {
  const { values, handleChange } = useFormAndValidation();

  return (
    <section className="profile">
      <form className="profile__form">
        <p className="profile__heading">{`Привет, друг !`}</p>
        <fieldset className="profile__container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            type="email"
            aria-label="Ваше имя"
            placeholder="Имя"
            minLength="2"
            maxLength="100"
            required
          />
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
          {/* <span className="profile__input-error">{errors.email}</span> */}
        </fieldset>
      </form>

      <div className="profile__button-box">
      <span className="profile__input-error"></span>
        <Button btnClass="button button_type_profile-edit" btnType="button" btnText="Редактировать" />
        <Link to="/" className="profile__link_logout page__link">
          Выйти из аккаунта
        </Link>
        {/* <Button btnClass="button_type_profile-save" btnType="submit" btnText="Сохранить" /> */}
        {/* <span className="profile__input-error">При обновлении профиля произошла ошибка.</span>
        <Button btnClass="button_type_profile-save button_disabled" btnType="submit" btnText="Сохранить" /> */}
      </div>
    </section>
  );
}

export default Profile;
