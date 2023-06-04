import '../MoviesCard/MoviesCard.css'
import { getTimeFromMins } from '../../utils/getTimeFromMins';
import Button from '../Button/Button';

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

      {/* <Button btnClass='button_type_save button_type_delete' btnType='button' /> */}
      <Button btnClass='button_type_save button_type_save_active' btnType='button' />
    </li>
  );
}

export default MoviesCard;
