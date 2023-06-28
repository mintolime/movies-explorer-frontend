import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useMovies } from '../../hooks/useMovies';
import { apiDataMovies } from '../../utils/api/MoviesApi';

function Movies({ movies, onSearch, searchActive, isLoadingActive, onSaveMovie, onChangeFilter,setSearch,error,searchValue,isNotFound }) {
  // const { notFound } = useMovies(apiDataMovies.getAllMovies);
  console.log(movies);
  return (
    <>
      <SearchForm  onChangeFilter={onChangeFilter} setSearch={setSearch} error={error} searchValue={searchValue}/>
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
        <MoviesCardList moviesData={movies} searchActive={searchActive} onSaveMovie={onSaveMovie} />
      )}
    </>
  );
}

export default Movies;
