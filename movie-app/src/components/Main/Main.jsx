import globus from '../../images/globus.png';
import '../Main/Main.css'

function Main() {
  return (
   <main className="content">
        <section aria-label="учебный проект студента" className="main-page">
          <img className="main-page__illustration" src={globus} alt="Логотип веба в форме глобуса" />
          <h1 className="main-page__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="main-page__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button><a className="main-page__link" href="#">Узнать</a></button>
        </section>
      </main>
  );
}

export default Main;
