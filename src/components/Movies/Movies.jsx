import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies,onSearch,searchActive}) {
// console.log(movies)
  return (
    <>
      <SearchForm onSearchMovies={onSearch} />
      <MoviesCardList moviesData={movies} searchActive={searchActive} />
    </>
  );
}

export default Movies;
