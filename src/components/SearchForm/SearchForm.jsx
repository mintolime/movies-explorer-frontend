import React from 'react';

import '../SearchForm/SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../Button/Button';

function SearchForm({ onSearchMovies, searchQuery, onFilter, onResetInput }) {
  const [searchText, setSearchText] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);
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
    if (!searchText) {
      setIsValid(false);
      return;
    } else {
      onFilter({ searchText, isShortFilmChecked });
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="search-form" aria-label="форма поиска фильмов">
      <form className="search-form__inner" onSubmit={handleSubmit}>
        <input
          className={`search-form__input ${!isValid ? 'input_invalid' : ''}`}
          placeholder="Фильм"
          name="search"
          value={searchText || ''}
          onChange={handleChange}
          aria-label="Поиск фильмов"
          minLength="1"
          maxLength="100"
        />
        {searchText && (
          <Button
            btnClass="button_type_reset"
            btnType="button"
            onClick={() => {
              onResetInput();
              setSearchText('');
            }}
          />
        )}

        {/* <Button btnClass={`button_type_search ${!isValid && 'button_disabled'}`} btnType="submit" /> */}
        <Button btnClass="button_type_search" btnType="submit" />
      </form>
      <span className="search-form__input-error">{!isValid && 'Нужно ввести ключевое слово'}</span>
      <FilterCheckbox isChecked={searchQuery.isShortFilmChecked} onCheck={checkFilterBox} />
    </section>
  );
}

export default SearchForm;
