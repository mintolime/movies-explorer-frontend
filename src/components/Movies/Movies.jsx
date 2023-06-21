import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSearch, searchActive, isLoading }) {
  // console.log(movies)
  return (
    <>
      <SearchForm onSearchMovies={onSearch} />
      {isLoading ? <Preloader /> : <MoviesCardList moviesData={movies} searchActive={searchActive} />}
    </>
  );
}

export default Movies;
