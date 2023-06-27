import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../Button/Button';
import '../MoviesCard/MoviesCard.css';
import { getTimeFromMins } from '../../utils/functions';
import { apiBestMovieUrl } from '../../utils/constants';

function MoviesCard({ movie, onSaveMovie,onDeleteMovie }) {
  const location = useLocation();
    const imageUrl = movie.image.url
    ? `${apiBestMovieUrl}${movie.image.url}`
    : movie.image;
  // console.log(onDeleteMovie)
  return (
    <li className="movies__item">
      <div className="movies__heading">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <span className="movies__time">{getTimeFromMins(movie.duration)}</span>
      </div>
      <Link
        className="movies__link-trailer"
        to={movie.trailerLink}
        target="_blank"
        rel="noreferrer">
        <img
          className="movies__image"
          src={imageUrl}
          alt={movie.nameRU}
        />
      </Link>
      {location.pathname === '/saved-movies' && (
        <Button btnClass="button button_type_movie  button_type_movie-delete" btnType="button" onClick={() => onDeleteMovie(movie)} />
      )}

      {/* <Button btnClass='button  button_type_movie  button_type_movie-save button_type_save_active' btnType='button' /> */}
        {location.pathname === '/movies' && (
         <Button
        btnClass="button_type_movie button_type_save"
        btnType="button"
        btnText="Coхранить"
        onClick={()=>{onSaveMovie(movie)}}
      />
      )}

    </li>
  );
}

export default MoviesCard;
