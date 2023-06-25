import '../MoviesCardList/MoviesCardList.css';
// import { moviesData } from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useResize } from '../../hooks/useResize';

function MoviesCardList({ moviesData, searchActive, onSaveMovie, onDelete }) {
  const size = useResize();
  return (
    <section className="movies" aria-label="галерея фильмов пользователя">
      <ul className="movies__list">
        {size.isScreenSm
          ? moviesData?.slice(0, 5).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie.movieId} onSaveMovie={onSaveMovie} onDelete={onDelete} />
            ))
          : size.isScreenMd
          ? moviesData?.slice(0, 8).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie.movieId} onSaveMovie={onSaveMovie} onDelete={onDelete} />
            ))
          : size.isScreenXl
          ? moviesData?.slice(0, 12).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie.movieId} onSaveMovie={onSaveMovie} onDelete={onDelete} />
            ))
          : null}
      </ul>
      {searchActive && <Button btnClass="button_type_more" btnType="button" btnText="Ещё" />}
    </section>
  );
}

export default MoviesCardList;
