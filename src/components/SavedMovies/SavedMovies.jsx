// import '../SavedMovies/SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesData } from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({movies,onSearch}) {
  return (
    <>
      <SearchForm  onSearchMovies={onSearch} />
      <MoviesCardList moviesData={movies} />
      {/* <MoviesCard movie={moviesData}/> */}
    </>
  );
}

export default SavedMovies;
