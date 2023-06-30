// import '../SavedMovies/SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({
  movies,
  onSearch,
  savedMovies,
  onDeleteMovie,
  onChangeFilter,
  setSearch,
  error,
  isSearchValue,
  isNotFound,
}) {
  return (
    <>
      <SearchForm
        onChangeFilter={onChangeFilter}
        setSearch={setSearch}
        error={error}
        searchValue={isSearchValue}
      />
      {isNotFound ? <p className="page__api-error">Ничего не найдено, попробуйте еще раз!</p> : ''}
      <MoviesCardList moviesData={movies} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
    </>
  );
}

export default SavedMovies;
