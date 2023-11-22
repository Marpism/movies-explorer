import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardList from '../CardList/CardList';
import SearchForm from '../SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import { filterMovies } from '../../utils/utils'

function Movies({ onSaveClick, onDeleteClick, savedMovies, isLoggedIn }) {

  const [isLoading, setIsLoading] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const [isApiError, setisApiError] = useState(false)

  const [isShorts, setIsShorts] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState([])

  function onToggleClick() {
    setIsShorts(!isShorts);
  }

  useEffect(() => {
    if (localStorage.getItem('filteredMovies')) {
      const lastMovies = JSON.parse(localStorage.getItem('filteredMovies'));
      setFilteredMovies(lastMovies);
      lastMovies.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
    }
  }, [])

  useEffect(() => {
    localStorage.getItem('isShorts') === 'true' ? setIsShorts(true) : setIsShorts(false);
  }, [isShorts])

  function renderAndUpdateLocalStorage(allMovies, request, isShorts) {
    const filteredData = filterMovies(allMovies, request, isShorts);
    setFilteredMovies(filteredData);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredData));
    localStorage.setItem('searchRequest', request);
    localStorage.setItem('isShorts', isShorts);

    filteredData.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
  }


  function handleSearch(request) {
    if (localStorage.getItem('allMovies')) {
      renderAndUpdateLocalStorage(JSON.parse(localStorage.getItem('allMovies')), request, isShorts);
    } else {
      setIsLoading(true);
      moviesApi.getAllMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          renderAndUpdateLocalStorage(data, request, isShorts);
          setisApiError(false);
        }).catch((err) => {
          console.log(err);
          setisApiError(true);
        })
        .then(() => setIsLoading(false))
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="content">
        <SearchForm
          onSearch={handleSearch}
          onToggle={onToggleClick}
          isShorts={isShorts}
          isSavedMovies={false} />
        <CardList
          cards={filteredMovies}
          savedMovies={savedMovies}
          isSavedMovies={false}
          isLoading={isLoading}
          isNotFound={isNotFound}
          isApiError={isApiError}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick} />
      </section>
      <Footer />
    </>
  )
}

export default Movies;
