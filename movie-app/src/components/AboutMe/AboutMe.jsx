import portfolio from '../../images/portfolio.jpg';
import '../AboutMe/AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me content__box-white'>
      <div className="content__inner">
        <p className="content__about">Студент</p>
      </div>
      <article className="about-me_box">
        <img className="about-me__image" src={portfolio} alt="Логотип веба в форме глобуса" />
        <div className="about-me__brief">
          <h1 className="about-me__title">Евгения</h1>
          <p className="about-me__subtitle">Фронтенд-разработчица, 26 лет</p>
          <p className="about-me__text">Фронтенд-разработчица, 26 лет</p>
          <a className="about-me__link" href="#git">
            Github
          </a>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
