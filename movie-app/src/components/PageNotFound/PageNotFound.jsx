import '../PageNotFound/PageNotFound.css'

function PageNotFound() {
  return (
    <div className='not-found'>

    <div className="not-found__inner">
     <h2 className="not-found__heading">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
    </div>
       <button className='button button_type_back'>Назад</button>
    </div>
  );
}

export default PageNotFound;
