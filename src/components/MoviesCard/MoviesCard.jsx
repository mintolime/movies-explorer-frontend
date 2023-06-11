import '../MoviesCard/MoviesCard.css';
import { getTimeFromMins } from '../../utils/functions';
import Button from '../Button/Button';

function MoviesCard({ movie }) {

  return (
    <li className="movies__item">
      <div className="movies__heading">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <span className="movies__time">{getTimeFromMins(movie.duration)}</span>
      </div>
      <img className="movies__image" src={movie.thumbnail} alt={movie.nameRU} />

      <Button btnClass='button_type_save button_type_delete' btnType='button' />
      {/* <Button btnClass="button_type_save" btnType="button" btnText="Coхранить" /> */}
    </li>
  );
}

export default MoviesCard;