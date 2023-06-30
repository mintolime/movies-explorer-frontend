import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";

import { headerRoutes, footerRoutes } from "../../utils/constants";
import { checkPath } from "../../utils/functions";
import { apiDataMovies } from "../../utils/api/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { MainApi } from "../../utils/api/MainApi";
import { Auth } from "../../utils/api/AuthApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerView = checkPath(headerRoutes, location);
  const footerView = checkPath(footerRoutes, location);

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [isMovieSave, setMovieSave] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = React.useState(false);

  const apiDataMain = new MainApi({
    url: "https://api.mintolime-movies.nomoredomains.rocks",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const apiAuth = new Auth({
    url: "https://api.mintolime-movies.nomoredomains.rocks",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

// запрос к апи на получение фильмов и юзера из бэка
  React.useEffect(() => {
    isLoggedIn &&
      apiDataMain
        .getAllData()
        .then(([userData, savedMovies]) => {
          setMovieSave(savedMovies);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          setCurrentUser(userData);
          console.log(userData);
          // console.log(res)
          console.log(savedMovies);
        })
        .catch((err) => {
          console.log(
            `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
          );
        });
  }, [isLoggedIn]);

//тут я пытаюсь достать фильмы из апи бестмуви 
  React.useEffect(() => {
    if (localStorage.getItem("movies")) {
      setMovies(JSON.parse(localStorage.getItem("movies")));
    }
    if (isLoggedIn) {
      setIsLoading(true);
      // выставляем задержку в одну секунду для отображения лоудера
      const timeoutId = setTimeout(async () => {
        try {
          try {
            const [movies] = await apiDataMovies.getAllData();
            setMovies(movies);
            localStorage.setItem("movies", JSON.stringify(movies));
          } catch (err) {
            console.log(
              `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
            );
          }
        } finally {
          setIsLoading(false);
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn]);

  // проверка токена
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
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
            `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
          );
        });
    }
  }, []);

// это авторское, понимаешь да
  React.useEffect(() => {
    isLoggedIn &&
      localStorage.setItem("savedMovies", JSON.stringify(isMovieSave));
  }, [isMovieSave, isLoggedIn]);

// для попапа на открытие
  const handleOpenPopupSuccess = () => {
    setIsInfoTooltipOpen(true);
  };

// для попапа на закрытие
  const closePopup = () => {
    setIsInfoTooltipOpen(false);
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
    apiDataMain
      .deleteMovie(id)
      .then(() => {
        const newSavedMovies = isMovieSave.filter((movie) => movie._id !== id);

        setMovieSave(newSavedMovies);
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
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
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
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
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
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

        localStorage.setItem("jwt", data.token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`
        );
        handleOpenPopupSuccess();
        setIsSuccessResponse(false);
        setErrorMessage(err.errorText);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/signin", { replace: true });
    setIsLoggedIn(false);
    // для очистки локального хранилища после выхода из приложения
    localStorage.clear();
  };

  // отрефакторить чисто нужен для того, чтобы на кнопочку нажать и фильмы появились. временно убрала
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
              savedMovies={isMovieSave}
              searchActive={isSearchMovies}
              isLoadingActive={isLoading}
              // onSearch={handleSearchMovies}
              onSaveMovie={handleSaveMovie}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              movies={isMovieSave}
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
              savedMovies={isMovieSave}
              // onSearch={handleSearchMovies}
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
              onLogout={handleLogout}
              onUpdateUser={handleUpdateUser}
              isCorrectResponse={isSuccessResponse}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        />
        <Route
          path="/signin"
          element={<Login onAuthorization={handleAuthorization} />}
        />
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
