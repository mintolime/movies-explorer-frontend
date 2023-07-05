import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../Button/Button';
import '../MoviesCard/MoviesCard.css';
import { getTimeFromMins } from '../../utils/functions';
import { apiBestMovieUrlImg } from '../../utils/config';

function MoviesCard({ movie, savedMovies, onSaveMovie, onDeleteMovie }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const savedMovie = savedMovies ? savedMovies.find((item) => item.movieId === movie.id) : '';
  const isLiked = savedMovies ? savedMovies.some((i) => i.movieId === movie.id) : false;

  const location = useLocation();
  const imageUrl = movie.image.url ? `${apiBestMovieUrlImg}${movie.image.url}` : movie.image;

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
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img className="movies__image" src={imageUrl} alt={movie.nameRU} />
        {isHovered && (
          <div className="movies__overlay">
            <p className="movies__text">{movie.description}</p>
          </div>
        )}
      </Link>
      {location.pathname === '/saved-movies' && (
        <Button
          btnClass="button button_type_movie  button_type_movie-delete"
          btnType="button"
          onClick={() => onDeleteMovie(movie._id)}
        />
      )}
      {location.pathname === '/movies' && (
        <Button
          btnClass={`button_type_movie button_type_save ${
            isLiked ? 'button_type_movie-save_active' : ''
          }`}
          btnType="button"
          btnText={isLiked ? '' : 'Coхранить'}
          onClick={() => {
            onSaveMovie(movie, isLiked, savedMovie?._id);
          }}
        />
      )}
    </li>
  );
}

export default MoviesCard;
