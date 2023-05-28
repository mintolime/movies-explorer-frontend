import '../Main/Main.css'
import Promo from '../Promo/Promo';
import AboutProgect from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProgect />
      <Techs />
    </main>
  );
}

export default Main;
