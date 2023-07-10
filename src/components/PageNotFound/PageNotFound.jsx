import { Link, useNavigate } from 'react-router-dom';

import '../PageNotFound/PageNotFound.css';
import PreloaderPage from '../PreloaderPage/PreloaderPage';

function PageNotFound({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <section className="not-found">
     <PreloaderPage/>
      {/* <div className="not-found__inner">
        <div className="not-found__text">
          <h2 className="not-found__heading">404</h2>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <Link
          className="not-found__link"
          onClick={() => {
            isLoggedIn ? navigate(-2) : navigate(-1);
          }}>
          Назад
        </Link>
      </div> */}
    </section>
  );
}

export default PageNotFound;
