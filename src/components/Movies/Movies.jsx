import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies,onSearch,onSave}) {
// console.log(movies)
  return (
    <>
      <SearchForm onSearchMovies={onSearch}/>
      <MoviesCardList moviesData={movies} />
    </>
  );
}

export default Movies;
