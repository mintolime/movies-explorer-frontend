// import '../SavedMovies/SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesData } from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      {/* <MoviesCard movie={moviesData}/> */}
    </>
  );
}

export default SavedMovies;
