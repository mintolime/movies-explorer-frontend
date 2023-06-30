import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useMovies } from '../../hooks/useMovies';
import { apiDataMovies } from '../../utils/api/MoviesApi';

function Movies({ movies, onSearch,savedMovies, searchActive, isLoadingActive, onSaveMovie, onChangeFilter,setSearch,error,isSearchValue,isNotFound }) {

  return (
    <>
      <SearchForm  onChangeFilter={onChangeFilter} setSearch={setSearch} error={error} searchValue={isSearchValue}/>
      {isNotFound ? (
        <p className="page__api-error">
        Ничего не найдено, попробуйте еще раз!
        </p>
      ) : (
        ''
      )}
      {isLoadingActive ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesData={movies} savedMovies={savedMovies} searchActive={searchActive} onSaveMovie={onSaveMovie} />
      )}
    </>
  );
}

export default Movies;
