// import '../SavedMovies/SavedMovies.css'
import { useMovies } from '../../hooks/useMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { apiDataMain } from '../../utils/api/MainApi';

function SavedMovies({
  savedMovies,
  onDeleteMovie,
  // onChangeFilter,
  // setSearch,
  // error,
  // isSearchValue,
  // isNotFound,
}) {

    const {
    initMovies:saveMovie,
    setSearch: setSaveSearch,
    movies:saveFiltered,
    searchValue: searchSaveMovie,
    handleSetShortMovies: handleSetSaveShortMovies,
    isActiveSearch: isActiveSaveSearch,
    error:errorMovieSave,
    notFound: notFoundMovieSave,
  } = useMovies(apiDataMain.getAllOwnMovies,'saveMovies');
  
 console.log('просто карточка',saveMovie)
  return (
    <>
      <SearchForm
        onChangeFilter={handleSetSaveShortMovies}
        setSearch={setSaveSearch}
        error={errorMovieSave}
        searchValue={searchSaveMovie}
        searchActive={isActiveSaveSearch}
      />
      {notFoundMovieSave ? <p className="page__api-error">Ничего не найдено, попробуйте еще раз!</p> : ''}
      <MoviesCardList movies={saveFiltered} onDeleteMovie={onDeleteMovie} />
    </>
  );
}

export default SavedMovies;
