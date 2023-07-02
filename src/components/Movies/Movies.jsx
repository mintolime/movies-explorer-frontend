import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React, { useState, useEffect } from 'react';

function Movies({ movies, savedMovies, onSearch, searchActive,  onSaveMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQueryMovies');
  const [searchQuery, setSearchQuery] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
  }, [searchedMovies]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    }
  }, [queries]);

  const filterMovies = (query) => {
    setIsLoading(!filteredMovies.length); // Установка значения isLoading в зависимости от наличия уже отфильтрованных фильмов

    setTimeout(() => {
      let filtered = [];
      localStorage.setItem('searchQueryMovies', JSON.stringify(query));

      if (query.isShortFilmChecked) {
        filtered = movies.filter((m) => {
          return (
            m.duration <= 40 &&
            (m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase()) ||
              m.nameEN.toLowerCase().trim().includes(query.searchText.toLowerCase()))
          );
        });
      } else {
        filtered = movies.filter((m) => {
          return m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase());
        });
      }

      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
      setIsLoading(false);
    }, filteredMovies.length ? 0 : 300);
  };

  return (
    <>
      <SearchForm onSearchMovies={onSearch} onFilter={filterMovies} searchQuery={searchQuery} />
      {isLoading ? (
        <Preloader />
      ) : filteredMovies.length ? (
        <MoviesCardList
          moviesData={filteredMovies}
          savedMovies={savedMovies}
          searchActive={searchActive}
          onSaveMovie={onSaveMovie}
        />
      ) : (
        searchedMovies && <p className="movies__error-search">Упс.. По вашему запросу ничего не найдено</p>
      )}
    </>
  );
}

export default Movies;
