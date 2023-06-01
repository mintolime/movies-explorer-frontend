import portfolio from '../../images/portfolio.jpg';
import '../AboutMe/AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me content__box-white'>
      <div className="content__inner">
        <p className="content__about">Студент</p>
      </div>
      <article className="about-me_box">
        <img className="about-me__image" src={portfolio} alt="персональная фотография" />
        <div className="about-me__brief">
          <h1 className="about-me__title">Евгения</h1>
          <p className="about-me__subtitle">Фронтенд-разработчица, 26 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__link" href="#git">
            Github
          </a>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
