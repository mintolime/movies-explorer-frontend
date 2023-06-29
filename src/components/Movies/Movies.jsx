import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies,savedMovies, onSearch, searchActive, isLoadingActive,onSaveMovie }) {
  // console.log(isLoadingActive);
  return (
    <>
      <SearchForm onSearchMovies={onSearch} />
      {isLoadingActive ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesData={movies} savedMovies={savedMovies} searchActive={searchActive} onSaveMovie={onSaveMovie} />
      )}
    </>
  );
}

export default Movies;
