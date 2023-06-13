import '../SearchForm/SearchForm.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
// import find from '../../images/icon-find.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm() {
  const { values, handleChange, errors } = useFormAndValidation();
  return (
    <section className="search-form" aria-label="форма поиска фильмов">
      <form className="search-form__inner">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={values.movies || ''}
          onChange={handleChange}
          name="movies"
          aria-label="Поиск фильмов"
          required></input>
        <Button btnClass="button_type_search button_disabled" btnType="submit" />
      </form>
      <span className="search-form__input-error">{errors.movies}</span>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
