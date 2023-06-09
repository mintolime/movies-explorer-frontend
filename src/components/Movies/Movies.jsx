import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import React, { useState, useEffect } from 'react';
import { MOVIE_DURATION_MIN } from '../../utils/config';

function Movies({ movies, savedMovies, onSearch, searchActive, onSaveMovie }) {
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
    setIsLoading(true);

    let filtered = [];
    localStorage.setItem('searchQueryMovies', JSON.stringify(query));

    if (query.isShortFilmChecked) {
      filtered = movies.filter((m) => {
        return (
          m.duration <= MOVIE_DURATION_MIN &&
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
    setTimeout(() => {
      setIsLoading(false); // значение isLoading в false через две секунды
    }, 2000);
  };

    const handleResetInput = () => {
    setFilteredMovies([]);
    setSearchQuery({});
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('searchQueryMovies');
  };

  return (
    <>
      <SearchForm onSearchMovies={onSearch} onFilter={filterMovies} searchQuery={searchQuery} onResetInput={handleResetInput}/>
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
        searchedMovies && (
          <p className="movies__error-search">Упс.. По вашему запросу ничего не найдено</p>
        )
      )}
    </>
  );
}

export default Movies;
