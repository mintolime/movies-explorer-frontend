// import '../SavedMovies/SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesData } from '../../utils/movies';

function SavedMovies() {
  return (
    <>
      <MoviesCardList />
      {/* <MoviesCard movie={moviesData}/> */}
    </>
  );
}

export default SavedMovies;
