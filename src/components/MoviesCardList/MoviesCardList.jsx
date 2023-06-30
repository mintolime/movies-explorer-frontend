import "../MoviesCardList/MoviesCardList.css";
// import { moviesData } from '../../utils/movies';
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import { useResize } from "../../hooks/useResize";
import React from "react";

function MoviesCardList({ moviesData,savedMovies, searchActive, onSaveMovie, onDeleteMovie }) {
  const size = useResize();
  // стейт отображает количество карточек в зависимости от размера экрана 
  const [moviesToShow, setMoviesToShow] = React.useState(
    size.isScreenSm ? 5 : size.isScreenMd ? 8 : size.isScreenXl ? 12 : 0
  );
  
  // тут он у нас отслеживает хук изменения страницы
  const handleLoadMore = () => {
    if (size.isScreenSm || size.isScreenMd) {
      setMoviesToShow(moviesToShow + 2);
    } else if (size.isScreenXl) {
      setMoviesToShow(moviesToShow + 3);
    }
  };

  return (
    <section className="movies" aria-label="галерея фильмов пользователя">
      <ul className="movies__list">
        {moviesData?.slice(0, moviesToShow).map((movie) => (
          <MoviesCard
            movie={movie}
            savedMovies={savedMovies}
            key={movie.id || movie.movieId}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
     {searchActive && moviesData.length > moviesToShow && (
        <Button
          btnClass="button_type_more"
          btnType="button"
          btnText="Ещё"
          onClick={handleLoadMore}
        />
      )}
    </section>
  );
}

export default MoviesCardList;
