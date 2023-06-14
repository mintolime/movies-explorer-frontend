import '../MoviesCard/MoviesCard.css';
import { getTimeFromMins } from '../../utils/functions';
import Button from '../Button/Button';

function MoviesCard({ movie }) {
  const apiUrl = 'https://api.nomoreparties.co'
  // console.log('movie', movie.image.url)
  // console.log(`${apiUrl}${movie.image.url}`)

  return (
    <li className="movies__item">
      <div className="movies__heading">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <span className="movies__time">{getTimeFromMins(movie.duration)}</span>
      </div>
      <img className="movies__image" src={`${apiUrl}${movie.image.url}`} alt={movie.nameRU} />

      {/* <Button btnClass='button_ button_type_delete' btnType='button' /> */}
      {/* <Button btnClass='button button_type_save button_type_save_active' btnType='button' /> */}
      <Button btnClass="button_type_save" btnType="button" btnText="Coхранить" />
    </li>
  );
}

export default MoviesCard;
