import portfolio from '../../images/portfolio.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me content__box-main' id='aboutme'>
      <div className="content__inner">
        <p className="content__about">Студент</p>
      </div>
      <article className="about-me__box">
        <img className="about-me__image" src={portfolio} alt="персональная фотография" />
        <div className="about-me__brief">
          <h1 className="about-me__title">Евгения</h1>
          <p className="about-me__subtitle">Фронтенд-разработчица, 26 лет</p>
          <p className="about-me__text">
          Я проживаю ,в богатом природой, городе Красноярск.
          На данный момент работаю инженером технической группы,свободное время посвящаю обучению и фотосъемке.
          Путь в разработке начался в середине 2022 г., за это время удалось усилить свои навыки во фронтенд-разработке.
          После окончания планирую также развиваться в этой области.
          </p>
          <a className="page__link about-me__link" href="https://github.com/mintolime" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
