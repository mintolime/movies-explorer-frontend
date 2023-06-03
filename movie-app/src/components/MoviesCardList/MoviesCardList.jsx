import '../MoviesCardList/MoviesCardList.css'
import { moviesData } from '../../utils/movies'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
      <section className="movies" aria-label="галерея фильмов пользователя">
        <ul className="movies__list">
          {moviesData.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.movieId}
            />
          ))}
        </ul>
      </section>
  );
}

export default MoviesCardList;
