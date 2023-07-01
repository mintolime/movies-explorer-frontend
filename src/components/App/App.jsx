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

import { headerRoutes, footerRoutes } from '../../utils/constants';
import { checkPath } from '../../utils/functions';
import { apiDataMovies } from '../../utils/api/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Auth } from '../../utils/api/AuthApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useMovies } from '../../hooks/useMovies';
import { apiDataMain } from '../../utils/api/MainApi';
// import {} from

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerView = checkPath(headerRoutes, location);
  const footerView = checkPath(footerRoutes, location);

  const [currentUser, setCurrentUser] = React.useState({});
  // const [movies, setMovies] = React.useState([]);
  // const [isMovieSave, setMovieSave] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = React.useState(false);

  const apiAuth = new Auth({
    url: 'https://api.mintolime-movies.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  // const { handleSetShortMovies, movies, setSearch, isActiveSearch, error, searchValue, notFound } =
  //   useMovies(apiDataMovies.getAllMovies);

  //   const { movies } = useMovies(apiDataMovies.getAllMovies,'movies');
  // console.log(movies,'mov')
  const {
    initMovies: saveMovies,
    setState: setSaveMovies,
    // setSearch: setSaveSearch,
    // movies:saveFiltered,
    // searchValue: searchSaveMovie,
    // handleSetShortMovies: handleSetSaveShortMovies,
    // isActiveSearch: isActiveSaveSearch,
  } = useMovies(apiDataMain.getAllOwnMovies, 'savedMovies');

  // const {
  //   initMovies: saveMovies,
  //   setState: setSaveMovies,
  //   setSearch: setSaveSearch,
  //   movies:saveFiltered,
  //   searchValue: searchSaveMovie,
  //   handleSetShortMovies: handleSetSaveShortMovies,
  //   isActiveSearch: isActiveSaveSearch,
  // } = useMovies(apiDataMain.getAllOwnMovies);

  // запрос к апи на получение фильмов и юзера из бэка
  // React.useEffect(() => {
  //   isLoggedIn &&
  //     apiDataMain
  //       .getAllData()
  //       .then(([userData, savedMovies]) => {
  //         setMovieSave(savedMovies);
  //         localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  //         setCurrentUser(userData);
  //         console.log(userData);
  //         // console.log(res)
  //         console.log(savedMovies);
  //       })
  //       .catch((err) => {
  //         console.log(
  //           `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
  //         );
  //       });
  // }, [isLoggedIn]);

  React.useEffect(() => {
    isLoggedIn &&
      apiDataMain
        .getUserData()
        .then((userData) => {
          setCurrentUser(userData);
          console.log(userData);
        })
        .catch((err) => {
          console.log(
            `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
          );
        });
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
    isLoggedIn && localStorage.setItem('saveMovies', JSON.stringify(saveMovies));
  }, [saveMovies, isLoggedIn]);

  // для попапа на открытие
  const handleOpenPopupSuccess = () => {
    setIsInfoTooltipOpen(true);
  };

  // для попапа на закрытие
  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  // // тут фильм сохрани
const handleSaveMovie = (movie, isLiked, id) => {
  if (isLiked) {
    handleDeleteMovie(id);
  } else {
    apiDataMain
      .saveMovie(movie)
      .then((res) => {
        setSaveMovies([...saveMovies, res]); // Добавляем новую карточку фильма в массив
        console.log({ saveMovies, res });
      })
      .catch((error) => console.log(error));
  }
};

  // // тут фильм удали
  const handleDeleteMovie = (id) => {
    apiDataMain
      .deleteMovie(id)
      .then(() => {
        const newSavedMovies = saveMovies.filter((movies) => movies._id !== id);
        console.log('delete', newSavedMovies);
        setSaveMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
      });
  };

  // все что ниже работает на ура
  const handleUpdateUser = (data) => {
    apiDataMain
      .updateUserData(data)
      .then((data) => {
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        setCurrentUser(data);
        console.log(data);
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

  const handleRegister = (data) => {
    apiAuth
      .register(data)
      .then((res) => {
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        console.log(res);
        navigate('/signin', { replace: true });
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

  const handleAuthorization = (data) => {
    apiAuth
      .authorize(data)
      .then((data) => {
        setIsLoggedIn(true);
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        console.log(data);

        localStorage.setItem('jwt', data.token);
        navigate('/', { replace: true });
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

  return (
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
              // movies={movies}
              savedMovies={saveMovies}
              // searchActive={isActiveSearch}
              onSaveMovie={handleSaveMovie}
              // setSearch={setSearch}
              // onChangeFilter={handleSetShortMovies}
              // isError={error}
              // isNotFound={notFound}
              // isSearchValue={searchValue}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              component={SavedMovies}
              // movies={movies}
              isLoggedIn={isLoggedIn}
              savedMovies={saveMovies}
              onDeleteMovie={handleDeleteMovie}
              // setSearch={setSaveSearch}
              // onChangeFilter={handleSetSaveShortMovies}
              // isError={error}
              // isNotFound={notFound}
              // isSearchValue={searchSaveMovie}
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
              onLogout={handleLogout}
              onUpdateUser={handleUpdateUser}
              isCorrectResponse={isSuccessResponse}
            />
          }
        />
        <Route path="/signup" element={<Register onRegister={handleRegister} />} />
        <Route path="/signin" element={<Login onAuthorization={handleAuthorization} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {footerView && <Footer />}
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
        isCorrectResponse={isSuccessResponse}
        isError={errorMessage}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
