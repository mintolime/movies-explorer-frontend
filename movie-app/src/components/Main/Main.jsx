import '../Main/Main.css'
import Promo from '../Promo/Promo';
import AboutProgect from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';


function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProgect />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
