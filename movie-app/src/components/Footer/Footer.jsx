import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content__inner content__inner_footer ">
        <p className="content__about_footer ">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>

      <div className="footer__columns">
        <nav className="footer__links">
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <a href="https://practicum.yandex.ru/" className="page__link footer__link" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/yandex-practicum" className="page__link footer__link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&#169;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
