import icon from '../../images/icon-link.svg';
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio page__box-main">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href=" https://mintolime.github.io/how-to-learn/"
            className="portfolio__link page__link"
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__description">Статичный сайт</p>
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://mintolime.github.io/russian-travel/"
            className="portfolio__link page__link "
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__description">Адаптивный сайт</p>
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://mesto-react-zeta.vercel.app/"
            className="portfolio__link page__link "
            target="_blank"
            rel="noreferrer">
            <p className="portfolio__description">Одностраничное приложение</p>
            <img src={icon} alt="иконка ссылки на проект портфолио" className="portfolio__icon" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
