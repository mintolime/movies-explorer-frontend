import portfolio from '../../images/portfolio.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me page__box-main" id="aboutme" aria-label="блок о студенте">
      <div className="page__inner">
        <p className="page__about">Студент</p>
      </div>
      <article className="about-me__box">
        <img className="about-me__image" src={portfolio} alt="персональная фотография" />
        <div className="about-me__brief">
          <h1 className="about-me__title">Евгения</h1>
          <p className="about-me__subtitle">Фронтенд-разработчица</p>
          <p className="about-me__text">
            На данной странице вы можете познакомиться с моим учебным проектом.
            Он сделан в рамках проектной работы по курсу "Веб-разработчик"
          </p>
          <ul className="about-me__links">
            <li>
              <a
                className="page__link about-me__link"
                href="https://github.com/mintolime"
                target="_blank"
                rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a
                className="page__link about-me__link"
                href="https://unsplash.com/@mintolime"
                target="_blank"
                rel="noreferrer">
                Unsplash
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
