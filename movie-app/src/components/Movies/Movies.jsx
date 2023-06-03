import '../Movies/Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import { moviesData } from '../../utils/movies'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

console.log('array movie', moviesData)
function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
