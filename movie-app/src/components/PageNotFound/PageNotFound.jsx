import { Link } from 'react-router-dom';

import '../PageNotFound/PageNotFound.css';

function PageNotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
      <div className="not-found__text">
         <h2 className="not-found__heading">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
  <Link to="/" className="not-found__link">
        Назад
      </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
