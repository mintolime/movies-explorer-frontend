import '../MoviesCardList/MoviesCardList.css';
// import { moviesData } from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

function MoviesCardList({moviesData,searchActive}) {
  console.log('moviesData',searchActive)
  return (
    <section className="movies" aria-label="галерея фильмов пользователя">
      <ul className="movies__list">
        {moviesData.map((movie) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}
      </ul>
    {searchActive && <Button btnClass="button_type_more" btnType="button" btnText="Ещё" />}  
    </section>
  );
}

export default MoviesCardList;
