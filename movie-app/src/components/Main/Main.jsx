import '../Main/Main.css'
import Promo from '../Promo/Promo';
import AboutProgect from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation.';

function Main() {
  return (
    <main className="content">
      <Navigation />
      {/* <Promo /> */}
      {/* <AboutProgect /> */}
      <Techs />
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      <Footer />
    </main>
  );
}

export default Main;
