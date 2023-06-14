import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies,onHandleSearch}) {
// console.log(movies)
  return (
    <>
      <SearchForm onSearchMovies={onHandleSearch}/>
      <MoviesCardList moviesData={movies} />
    </>
  );
}

export default Movies;
