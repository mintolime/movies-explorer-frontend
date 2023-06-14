import '../MoviesCardList/MoviesCardList.css';
// import { moviesData } from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

function MoviesCardList({moviesData}) {
  // console.log('moviesData',moviesData)
  return (
    <section className="movies" aria-label="галерея фильмов пользователя">
      <ul className="movies__list">
        {moviesData.map((movie) => (
          <MoviesCard movie={movie} key={movie.id} />
          // console.log('map',movie.image.url)
        ))}
      </ul>
      <Button btnClass="button_type_more" btnType="button" btnText="Ещё" />
    </section>
  );
}

export default MoviesCardList;
