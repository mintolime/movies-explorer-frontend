import './AboutProject.css';

function AboutProgect() {
  return (
    <article aria-label="компонент с описанием дипломного проекта" className="about-project content__box-main">
      <div className="content__inner">
        <p className='content__about'>О проекте</p>
      </div>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>

        <li className="about-project__item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__result">
        <p className="about-project__week about-project__week_black">1 неделя</p>
        <p className="about-project__week">4 недели</p>
        <p className="about-project__web">Back-end</p>
        <p className="about-project__web">Front-end</p>
      </div>
    </article>
  );
}

export default AboutProgect;
