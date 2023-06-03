import '../MoviesCard/MoviesCard.css'
import { getTimeFromMins } from '../../utils/getTimeFromMins';
function MoviesCard({ movie }) {
  // let time = movie.duration;
  // console.log(time)
  return (
    <li className="movies__item">
      <div className="movies__heading">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <span className="movies__time">{getTimeFromMins(movie.duration)}</span>
      </div>
      <img
        className="movies__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      {/* <div className="movies__inner"> */}

      {/* <div className="movies__items"> */}
      <button
        className="button button_type_save"
        type="button">Сохранить</button>

      {/* </div> */}
      {/* </div> */}
      {/* <button className="button button_type_delete" /> */}
    </li>
  );
}

export default MoviesCard;
