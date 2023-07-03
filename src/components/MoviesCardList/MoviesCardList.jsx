import '../MoviesCardList/MoviesCardList.css';
// import { moviesData } from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useResize } from '../../hooks/useResize';
import React from 'react';
import {
  DESKTOP_RENDER_CARD,
  MOBILE_RENDER_CARD,
  TABLET_RENDER_CARD,
  MAX_ADD_CARD,
  MIN_ADD_CARD,
} from '../../utils/config';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ moviesData, savedMovies, onSaveMovie, onDeleteMovie }) => {
  const size = useResize();
  const location = useLocation();
  const [moviesToAdd, setMoviesToAdd] = React.useState(0);

  React.useEffect(() => {
    setMoviesToAdd(0);
  }, [moviesData]);

  const moviesToShow = React.useMemo(() => {
    let countToRender;
    let minAddCard;

    if (size.isScreenSm) {
      countToRender = MOBILE_RENDER_CARD;
      minAddCard = MIN_ADD_CARD;
    } else if (size.isScreenMd) {
      countToRender = TABLET_RENDER_CARD;
      minAddCard = MIN_ADD_CARD;
    } else {
      countToRender = DESKTOP_RENDER_CARD;
      minAddCard = MAX_ADD_CARD;
    }

    return moviesData.slice(0, countToRender + moviesToAdd);
  }, [moviesData, moviesToAdd, size]);

  return (
    <section className="movies" aria-label="галерея фильмов пользователя">
      <ul className="movies__list">
        {moviesToShow.map((movie) => (
          <MoviesCard
            movie={movie}
            savedMovies={savedMovies}
            key={movie.id || movie.movieId}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {location.pathname === '/movies' && moviesData.length > moviesToShow.length && (
        <Button
          btnClass="button_type_more"
          btnType="button"
          btnText="Ещё"
          onClick={() => {
            setMoviesToAdd((prev) => prev + (size.isScreenXl ? 3 : 2));
          }}
        />
      )}
    </section>
  );
};

export default MoviesCardList;
