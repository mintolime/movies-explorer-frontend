import React, { useCallback } from "react";
import { apiDataMovies } from "../utils/api/MoviesApi";
import { SHORT_DURATION } from "../utils/constants";


export const useMovies = (fetchMovies) => {
  const [state, setState] = React.useState({
    loading: false,
    movies: [],
    error: null,
  })

  const [search, setSearch] = React.useState('')
  const [shortMovies, setShortMovies] = React.useState(false)

  React.useEffect(() => {
    // if (!search) { return }

    setState((state) => ({ ...state, loading: true }));

    const handleFetchMovies = async () => {
      try {
        const movies = await fetchMovies();
        setState((state) => ({
          ...state,
          movies, // записываем массив movies в состояние
        }));
      } catch (error) {
        console.log(error)
        setState((state) => ({
          ...state,
          error: error.status,
          loading: false,
        }));
      }
      finally {
        setState((state) => ({
          ...state,
          loading: false,
        }))
      }
    };

    handleFetchMovies();
  }, []);

  const filteredMovies = React.useMemo(() => {
    const { movies } = state;
    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameEN, nameRU, duration } = movie;
     const searched = search && (nameEN.toLowerCase().trim().includes(search) || nameRU.toLowerCase().trim().includes(search));
      const short = shortMovies && duration < SHORT_DURATION;

      if (search && shortMovies) {
        if (searched && short) {
          result.push(movie);
        }
      }
      if (search && !shortMovies) {
        if (searched) {
          result.push(movie);
        }
      }

      if (!search && shortMovies) {
        if (short) {
          result.push(movie);
        }
      }
    }

    return result;
  }, [search, shortMovies, state.movies]);

  const notFound = (search || shortMovies) && filteredMovies.length === 0;

  const handleSetSearch = useCallback((value) => {
    if (!value) {
      setState((state) => ({
        ...state,
        error: 'Нужно ввести ключевое слово',
      }))
      setSearch('')
    }
    setSearch(value)
  }, [])

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked)
  }, [])

  console.log({ state, filteredMovies, search, shortMovies, notFound })
  return {
    searchValue: search,
    movies: filteredMovies,
    error: state.error,
    setSearch: handleSetSearch,
    notFound: notFound,
    handleSetShortMovies,
  }
}


