import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies}) {
// console.log(movies)
  return (
    <>
      <SearchForm />
      <MoviesCardList moviesData={movies} />
    </>
  );
}

export default Movies;
