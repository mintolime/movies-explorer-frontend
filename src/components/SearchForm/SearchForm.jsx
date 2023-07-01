import '../SearchForm/SearchForm.css';
import { useMovies } from '../../hooks/useMovies';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';
import { apiDataMovies } from '../../utils/api/MoviesApi';

function SearchForm({ onChangeFilter,setSearch,error,searchValue,searchActive }) {
  // const [isSearchMoviesActive, setSearchMoviesActive] = React.useState(false);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <section className="search-form" aria-label="форма поиска фильмов">
    {/* переименовать, непонятно что делает функция */}
      <form className="search-form__inner" onSubmit={searchActive}>
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
