import '../SearchForm/SearchForm.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
// import find from '../../images/icon-find.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({ onSearchMovies }) {
  const { values, handleChange, isValid } = useFormAndValidation();
  
  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    if (!values.movies) {
      return;
    }
    onSearchMovies();
  }

  return (
    <section className="search-form" aria-label="форма поиска фильмов">
      <form className="search-form__inner" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
          value={values.movies || ''}
          onChange={handleChange}
          name="movies"
          aria-label="Поиск фильмов"
          required></input>
        <Button btnClass="button_type_search button_disabled" btnType="submit" />
      </form>
      <span className="search-form__input-error">{isValid ? '' : 'Нужно ввести ключевое слово'}</span>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
