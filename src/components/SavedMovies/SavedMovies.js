import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardList from '../CardList/CardList';
import SearchForm from '../SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { filterMovies } from '../../utils/utils';

function SavedMovies({ savedMovies, onDeleteClick, isLoggedIn }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShorts, setIsShorts] = useState(false);

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies])

  function onToggleClick() {
    setIsShorts(!isShorts);
  }

  function savedSearch(request) {
    const savedMoviesFiltered = filterMovies(savedMovies, request, isShorts);
    setFilteredMovies(savedMoviesFiltered);

    savedMoviesFiltered.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
  }
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="content">
        <SearchForm
          onSearch={savedSearch}
          isShorts={isShorts}
          onToggle={onToggleClick}
          isSavedMovies={true} />
        <CardList
          cards={filteredMovies}
          savedMovies={savedMovies}
          isSavedMovies={true}
          isNotFound={isNotFound}
          onDeleteClick={onDeleteClick} />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;
