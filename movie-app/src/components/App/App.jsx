import { Routes, Route,useLocation } from 'react-router-dom';

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

import { headerRoutes,footerRoutes } from '../../utils/constants';
import { checkPath } from '../../utils/functions';

function App() {
  const location = useLocation();
  const headerView = checkPath(headerRoutes,location); 
  const footerView = checkPath(footerRoutes,location); 
  // console.log('проверка',checkPath(headerRoutes,location))
  // console.log('локация',location)
  return (
    <>
     {headerView && <Header /> } 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {footerView && <Footer/> } 
    </>
  );
}

export default App;
