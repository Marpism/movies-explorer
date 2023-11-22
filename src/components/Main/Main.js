import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';

function Main({ isLoggedIn }) {
  return (<>
    <Header isLoggedIn={isLoggedIn} />
    <Landing />
    <Footer />
  </>)
}

export default Main;