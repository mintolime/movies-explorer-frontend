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
import { apiDataMain } from '../../utils/api/MainApi';
import { apiAuth } from '../../utils/api/AuthApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const headerView = checkPath(headerRoutes, location);
  const footerView = checkPath(footerRoutes, location);

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  // const [isOwnMovies, setIsOwnMovies] = React.useState([]);
  const [isRegistration, setIsRegistration] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [isMovieSave, setMovieSave] = React.useState(false);
  // const [isLoading,setLoading] = React.useState(false)

  React.useEffect(() => {
    if (isSearchMovies) {
      apiDataMovies
        .getAllData()
        .then(([initialMovies]) => {
          setMovies(initialMovies);
          console.log(initialMovies);
        })
        .catch((err) => {
          console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        });
    }
  }, [isSearchMovies]);

  // React.useEffect(() => {
  //   handleCheckToken();
  // }, []);

  // сделать в одну функцию
  //  React.useEffect(() => {
  //   if(isSearchMovies){
  //     apiDataMain
  //     .getAllData()
  //     .then(([initialOwnMovies]) => {
  //       setIsOwnMovies(initialOwnMovies);
  //       console.log(initialOwnMovies)
  //     })
  //     .catch((err) => {
  //       console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
  //     });
  //   }
  // }, [isSearchMovies]);

  const handleMovieSave = () => {
    setMovieSave(true);
  };

  const handleRegister = (data) => {
    return apiAuth
      .register(data)
      .then((res) => {
        setIsRegistration(true);
        console.log(res);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleAuthorization = (data) => {
    apiAuth
      .authorize(data)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        console.log(res);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  // const handleCheckToken = () => {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     // проверим токен
  //     apiAuth
  //       .checkToken(jwt)
  //       .then((res) => {
  //         if (res) {
  //           setIsLoggedIn(true);
  //           navigate('/', { replace: true });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
  //       });
  //   }
  // };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setIsLoggedIn(false);
  };

  const handleSearchMovies = () => {
    setSearchMovies(true);
  };

  // console.log(isSearchMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {headerView && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies movies={movies} onSearch={handleSearchMovies} onSave={handleMovieSave} />
          }
        />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register onRegister={handleRegister} />} />
        <Route path="/signin" element={<Login onAuthorization={handleAuthorization} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {footerView && <Footer />}
    </CurrentUserContext.Provider>
  );
}

export default App;
