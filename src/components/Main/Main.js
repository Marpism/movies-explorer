import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Loader from '../Loader/Loader';

function Main() {
  return (
    <>
      <Header />
      <main className='content'>
        <SearchForm />
        <div className='line'></div>
        <MoviesCardList />
        <Loader />
        <Footer />
      </main>
    </>
  )
}

export default Main;