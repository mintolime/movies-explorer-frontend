import React from 'react';

import '../SearchForm/SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({ onSearchMovies, searchQuery, onFilter }) {
  const [searchText, setSearchText] = React.useState('');
  const [error, setError] = React.useState('');
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortFilmChecked, setIsShortFilmChecked] = React.useState(isChecked);

  React.useEffect(() => {
    if (searchQuery.searchText) {
      setSearchText(searchQuery.searchText);
    }
  }, [searchQuery.searchText]);

  const checkFilterBox = () => {
    if (searchText !== '') {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchText,
        isShortFilmChecked: !isShortFilmChecked,
      });
    } else {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchQuery.searchText,
        isShortFilmChecked: !isShortFilmChecked,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ searchText, isShortFilmChecked });
    onSearchMovies();
  };

  const handleChange = (e) => {
    if (searchText) {
      setError(e.target.validationMessage);
    }
    setSearchText(e.target.value);
  };

  return (
    <section className="search-form" aria-label="форма поиска фильмов">
      <form className="search-form__inner" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
          name="search"
          value={searchText || ''}
          onChange={handleChange}
          aria-label="Поиск фильмов"
          minLength="1"
          maxLength="100"
          required></input>
        <Button
          btnClass={`button_type_search ${!searchText ? 'button_disabled' : ''}`}
          btnType="submit"
        />
      </form>
      <span className="search-form__input-error">{error}</span>
      <FilterCheckbox isChecked={searchQuery.isShortFilmChecked} onCheck={checkFilterBox} />
    </section>
  );
}

export default SearchForm;
