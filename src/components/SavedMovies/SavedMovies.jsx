import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { MOVIE_DURATION_MIN } from '../../utils/config';

function SavedMovies({ onSearch, savedMovies, onDeleteMovie, isLoadingActive, searchActive }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const searchedMovies = localStorage.getItem('searchedSavedMovies');
  const queries = localStorage.getItem('searchQuerySavedMovies');
  const [searchQuery, setSearchQuery] = React.useState({});

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [searchedMovies, savedMovies, searchQuery]);

  React.useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
      filterMovies(JSON.parse(queries));
    } else {
      setSearchQuery({ ...queries, searchText: '' });
    }
  }, [queries, savedMovies]);

  const filterMovies = (query) => {
    localStorage.setItem('searchQuerySavedMovies', JSON.stringify(query));

    let filtered = [];
    if (query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return (
          m.duration <= MOVIE_DURATION_MIN &&
          m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
        );
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase());
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
    }
  };

  return (
    <>
      <SearchForm onSearchMovies={onSearch} onFilter={filterMovies} searchQuery={searchQuery} />
      {isLoadingActive ? (
        <Preloader />
      ) : filteredMovies.length ? (
        <MoviesCardList
          moviesData={filteredMovies}
          savedMovies={savedMovies}
          searchActive={searchActive}
          onDeleteMovie={onDeleteMovie}
        />
      ) : (
        searchedMovies && (
          <p className="movies__error-search">Упс..По вашему запросу ничего не найдено</p>
        )
      )}
    </>
  );
}

export default SavedMovies;
