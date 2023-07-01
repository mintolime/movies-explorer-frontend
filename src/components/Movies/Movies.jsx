import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useMovies } from '../../hooks/useMovies';
import { apiDataMovies } from '../../utils/api/MoviesApi';

function Movies({  isLoadingActive, onSaveMovie,savedMovies }) {

  const { handleSetShortMovies, setSearch, isActiveSearch, error, searchValue, notFound, movies } =
    useMovies(apiDataMovies.getAllMovies,'movies');
  // console.log('api movies', movies);
  
  return (
    <>
      <SearchForm
        onChangeFilter={handleSetShortMovies}
        setSearch={setSearch}
        error={error}
        searchValue={searchValue}
        searchActive={isActiveSearch}
      />
      {notFound ? <p className="page__api-error">Ничего не найдено, попробуйте еще раз!</p> : ''}
      {isLoadingActive ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} searchActive={isActiveSearch} onSaveMovie={onSaveMovie} savedMovies={savedMovies} />
      )}
    </>
  );
}

export default Movies;
