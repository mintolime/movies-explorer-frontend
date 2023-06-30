import '../SearchForm/SearchForm.css';
import { useMovies } from '../../hooks/useMovies';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';
import { apiDataMovies } from '../../utils/api/MoviesApi';

function SearchForm({ onChangeFilter,setSearch,error,searchValue }) {
  // const { searchValue, error, setSearch,filteredMovies,handleSetShortMovies } = useMovies(apiDataMovies.getAllMovies);
  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

//  console.log(searchValue)

  return (
    <section className="search-form" aria-label="форма поиска фильмов">
      <form className="search-form__inner" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
          value={searchValue || ''}
          onChange={handleChange}
          name="movies"
          aria-label="Поиск фильмов"
          minLength="2"
          maxLength="100"
          required></input>
        <Button
          btnClass={`button_type_search ${!searchValue ? 'button_disabled' : ''}`}
          btnType="submit"
        />
      </form>
      <span className="search-form__input-error">{error}</span>
      <FilterCheckbox onChangeFilter={onChangeFilter} />
    </section>
  );
}

export default SearchForm;
