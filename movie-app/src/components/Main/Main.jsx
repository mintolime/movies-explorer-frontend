import '../Main/Main.css'
import Promo from '../Promo/Promo';
import AboutProgect from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProgect />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
