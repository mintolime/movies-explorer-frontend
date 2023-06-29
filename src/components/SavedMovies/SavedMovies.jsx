// import '../SavedMovies/SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ movies, onSearch,savedMovies, onDeleteMovie }) {
  return (
    <>
      <SearchForm onSearchMovies={onSearch} />
      <MoviesCardList moviesData={movies} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
    </>
  );
}

export default SavedMovies;
