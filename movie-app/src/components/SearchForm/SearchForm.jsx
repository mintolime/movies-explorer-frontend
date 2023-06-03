import '../SearchForm/SearchForm.css'
import useFormAndValidation from '../../hooks/useFormAndValidation';
import find from '../../images/icon-find.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {

  const { values, handleChange } = useFormAndValidation();
  return (
    <section className="search-form">

      <form
        className="search-form__inner"
      >
        <input
          className="search-form__input"
          type="text"
          placeholder='Фильм'
          value={values.movies || ''}
          onChange={handleChange}
          name="movies"
          aria-label="Поиск фильмов">
        </input>
        <button className="button button_type_search" type="submit"><img className="search-form__icon" src={find} alt="иконка поиска" /></button>
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
