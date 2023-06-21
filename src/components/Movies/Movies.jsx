import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSearch, searchActive, isLoadingActive }) {
  console.log(isLoadingActive);
  return (
    <>
      <SearchForm onSearchMovies={onSearch} />
      {isLoadingActive ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesData={movies} searchActive={searchActive} />
      )}
    </>
  );
}

export default Movies;
