import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

import { headerRoutes, footerRoutes, apiBdMainData } from '../../utils/config';
import { checkPath } from '../../utils/functions';
import { apiDataMovies } from '../../utils/api/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { MainApi } from '../../utils/api/MainApi';
import { Auth } from '../../utils/api/AuthApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerView = checkPath(headerRoutes, location);
  const footerView = checkPath(footerRoutes, location);

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [isMovieSave, setMovieSave] = React.useState([]);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = React.useState(false);
  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [isInputDisabled, setIsInputDisabled] = React.useState(false);

  const apiDataMain = new MainApi({
    url: apiBdMainData,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });

  const apiAuth = new Auth({
    url: apiBdMainData,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  // запрос к апи на получение фильмов и юзера из бэка
  React.useEffect(() => {
    isLoggedIn &&
      apiDataMain
        .getAllData()
        .then(([userData, savedMovies]) => {
          setMovieSave(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(
            `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
          );
        });
  }, [isLoggedIn]);

  //тут я пытаюсь достать фильмы из апи бестмуви
  React.useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
      } else {
        apiDataMovies
          .getAllMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((err) => {
            console.log(
              `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
            );
          });
      }
    }
  }, [isLoggedIn]);

  // проверка токена
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // проверим токен
      apiAuth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.log(
            `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
          );
        });
    }
  }, []);

  React.useEffect(() => {
    isLoggedIn && localStorage.setItem('savedMovies', JSON.stringify(isMovieSave));
  }, [isMovieSave, isLoggedIn]);

  // для попапа на открытие
  const handleOpenPopupSuccess = () => {
    setIsInfoTooltipOpen(true);
    // также блокируем при запросе импут,что не позволит ввести юзеру данные
    setIsInputDisabled(true);
  };

  // для попапа на закрытие
  const closePopup = () => {
    setIsInfoTooltipOpen(false);
    // при закрытии обратно разблокируем
    setIsInputDisabled(false);
  };
  
  // тут фильм сохрани
  const handleSaveMovie = (movie, isLiked, id) => {
    if (isLiked) {
      handleDeleteMovie(id);
    } else {
      apiDataMain
        .saveMovie(movie)
        .then((res) => {
          setMovieSave([...isMovieSave, res]);
        })
        .catch((error) => console.log(error));
    }
  };

  // тут фильм удали
  const handleDeleteMovie = (id) => {
    const savedMoviesData = JSON.parse(localStorage.getItem('searchedSavedMovies'));

    apiDataMain
      .deleteMovie(id)
      .then(() => {
        const updatedSavedMovies = isMovieSave.filter((movie) => movie._id !== id);
        setMovieSave(updatedSavedMovies);

        if (savedMoviesData) {
          const updatedSavedMoviesData = savedMoviesData.filter((movie) => movie._id !== id);
          localStorage.setItem('searchedSavedMovies', JSON.stringify(updatedSavedMoviesData));
        }
      })
      .catch((error) => {
        console.log(`Ошибка запроса: ${error.status}, сообщение: ${error.message} 😔`);
      });
  };

  const handleUpdateUser = (data) => {
    apiDataMain
      .updateUserData(data)
      .then((data) => {
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    apiAuth
      .register(name, email, password)
      .then((res) => {
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        handleAuthorization({ email, password });
        navigate('/movies');
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleAuthorization = ({ email, password }) => {
    apiAuth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          navigate('/movies');
          setIsSuccessResponse(true);
          handleOpenPopupSuccess();
        }
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setIsLoggedIn(false);
    // для очистки локального хранилища после выхода из приложения
    localStorage.clear();
  };

  // отрефакторить чисто нужен для того, чтобы на кнопочку нажать и фильмы появились.
  const handleSearchMovies = () => {
    setSearchMovies(true);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {headerView && <Header isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                isLoggedIn={isLoggedIn}
                movies={movies}
                savedMovies={isMovieSave}
                searchActive={isSearchMovies}
                onSearch={handleSearchMovies}
                onSaveMovie={handleSaveMovie}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                movies={movies}
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                savedMovies={isMovieSave}
                searchActive={isSearchMovies}
                onSearch={handleSearchMovies}
                onDeleteMovie={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                isOpen={isInfoTooltipOpen}
                isLoggedIn={isLoggedIn}
                isInputDisabled={isInputDisabled}
                onLogout={handleLogout}
                onUpdateUser={handleUpdateUser}
                isCorrectResponse={isSuccessResponse}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                onRegister={handleRegister}
                isInputDisabled={isInputDisabled}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                onAuthorization={handleAuthorization}
                isInputDisabled={isInputDisabled}
              />
            }
          />
          <Route path="*" element={<PageNotFound isLoggedIn={isLoggedIn} />} />
        </Routes>
        {footerView && <Footer />}
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isCorrectResponse={isSuccessResponse}
          isError={errorMessage}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
