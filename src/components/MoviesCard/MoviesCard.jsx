import React from 'react';
import { Link } from 'react-router-dom';

import '../MoviesCard/MoviesCard.css';
import { getTimeFromMins } from '../../utils/functions';
import Button from '../Button/Button';


function MoviesCard({ movie, onSaveMovies }) {

  const apiUrl = 'https://api.nomoreparties.co'

  return (
    <li className="movies__item">
      <div className="movies__heading">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <span className="movies__time">{getTimeFromMins(movie.duration)}</span>
      </div>
      <Link className="movies__link-trailer" to={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies__image" src={`${apiUrl}${movie.image.url}`} alt={movie.nameRU} />
      </Link>
      {/* <Button btnClass='button_ button_type_delete' btnType='button' /> */}
      {/* <Button btnClass='button button_type_save button_type_save_active' btnType='button' /> */}
      <Button btnClass="button_type_save" btnType="button" btnText="Coхранить" />
    </li>
  );
}

export default MoviesCard;
