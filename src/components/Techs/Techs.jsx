import '../Techs/Techs.css';

function Techs() {
  return (
    <section className="techs  content__box-main">
      <div className="content__inner content__inner-gray">
        <p className="content__about">Технологии</p>
      </div>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__item-text">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
