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
import { MainApi } from '../../utils/api/MainApi';
import { Auth } from '../../utils/api/AuthApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useMovies } from '../../hooks/useMovies';
// import {} from

function App() {
  const location = useLocation();
  const navigate = useNavigate();


  const headerView = checkPath(headerRoutes, location);
  const footerView = checkPath(footerRoutes, location);

  const [currentUser, setCurrentUser] = React.useState({});
  // const [movies, setMovies] = React.useState([]);
  const [isOwnMovies, setIsOwnMovies] = React.useState([]);
  // const [isRegistration, setIsRegistration] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // const [isSearchMovies, setSearchMovies] = React.useState(false);
  // const [isMovieSave, setMovieSave] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = React.useState(false);

  const apiDataMain = new MainApi({
    url: 'https://api.mintolime-movies.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });

  const apiAuth = new Auth({
    url: 'https://api.mintolime-movies.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const { handleSetSearch, handleSetShortMovies, movies,setSearch,error,searchValue,notFound} = useMovies(apiDataMovies.getAllMovies);
  // React.useEffect(() => {
  //   isLoggedIn &&
  //     apiDataMain
  //       .getAllData()
  //       .then(([userData, initialOwnMovies]) => {
  //         setIsOwnMovies(initialOwnMovies);
  //         setCurrentUser(userData);
  //         // console.log(userData)
  //         // console.log(res)
  //         // console.log(initialOwnMovies);
  //       })
  //       .catch((err) => {
  //         console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
  //       });
  // }, [isLoggedIn]);

  // console.log(movies,'movieapp')

  // React.useEffect(() => {
  //   if (isSearchMovies) {
  //     setIsLoading(true);
  //     // выставляем задержку в одну секунду для отображения лоудера
  //     const timeoutId = setTimeout(() => {
  //       apiDataMovies
  //         .getAllData()
  //         .then(([initialMovies]) => {
  //           setMovies(initialMovies);
  //           // console.log(initialMovies);
  //         })
  //         .catch((err) => {
  //           console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //     }, 1000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [isSearchMovies]);

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
          console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        });
    }
  }, []);

  const handleOpenPopupSuccess = () => {
    setIsInfoTooltipOpen(true);
  };

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  const handleSaveMovie = (movie) => {
    const isLiked = movies.some((i) => i._id === currentUser._id);
    apiDataMain
      .saveMovie(movie)
      .then((res) => {
        console.log(res);
        setIsOwnMovies(res);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleDeleteMovie = (movie) => {
    apiDataMain
      .deleteMovie(movie._id)
      .then(() => {
        setIsOwnMovies((state) => state.filter((item) => (item._id === movie._id ? '' : item)));
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

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
        console.log(`Что-то пошло не так: ошибка запроса ${err.status}  😔`);
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleRegister = (data) => {
    apiAuth
      .register(data)
      .then((res) => {
        // setIsRegistration(true);
        setIsSuccessResponse(true);
        handleOpenPopupSuccess();
        console.log(res);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err.status}  😔`);
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
        console.log(`Что-то пошло не так: ошибка запроса ${err.status}  😔`);
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setIsLoggedIn(false);
  };

  // отрефакторить
  // const handleSearchMovies = () => {
  //   setSearchMovies(true);
  // };

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
              movies={movies}
              isLoadingActive={isLoading}
              onSaveMovie={handleSaveMovie}
              setSearch={setSearch}
              onChangeFilter={handleSetShortMovies}
              isError={error}
              isNotFound={notFound}
              isSearchValue={searchValue}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
              movies={isOwnMovies}
              onSearch={handleSetSearch}
              onDeleteMovie={handleDeleteMovie}
              onChangeFilter={handleSetShortMovies}
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
