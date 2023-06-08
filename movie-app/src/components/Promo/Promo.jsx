import globus from '../../images/globus.png';
import '../Promo/Promo.css';

function Promo() {
  return (
    <section aria-label="стартовая страница  «О проекте»" className="promo">
      <img className="promo__illustration" src={globus} alt="Логотип веба в форме глобуса" />
      <div className="promo__context">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className='button button_type_about' ><a className="promo__link" href="#aboutme">Узнать больше</a></button>
      </div>
    </section>
  );
}

export default Promo;
