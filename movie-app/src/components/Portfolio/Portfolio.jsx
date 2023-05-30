import icon from '../../images/icon-link.png'
import '../Portfolio/Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio content__box-white">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__description">Статичный сайт</p>
          <a href="#icon" className="portfolio__link">
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" /></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__description"> Адаптивный сайт</p>
          <a href="#icon" className="portfolio__link">
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" /></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__description">Одностраничное приложение</p>
          <a href="#icon" className="portfolio__link">
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" /></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
