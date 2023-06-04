import './App.css';
import '../../../src/index.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

function App() {
  return (
    <div className="page">
      <Header />
      {/* <Main /> */}
      <Movies />
      {/* <Login /> */}
        <Footer />
    </div>
  );
}

export default App;
