import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function CardList({
  cards,
  savedMovies,
  isSavedMovies,
  isLoading,
  isNotFound,
  isApiError,
  onSaveClick,
  onDeleteClick,
}) {
  const [movieCount, setMovieCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMovieCount(12);
        setColumnCount(3);
      } else if (window.innerWidth >= 580) {
        setMovieCount(8);
        setColumnCount(2);
      } else {
        setMovieCount(5);
        setColumnCount(2);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function loadMoreMovies() {
    setMovieCount(movieCount + columnCount);
  }

  function isSaved(savedMovies, movie) {
    return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && !isApiError && "Ничего не найдено"}
      {isApiError && !isLoading &&
        `Во время запроса произошла ошибка. 
      Возможно, проблема с соединением или сервер недоступен. 
      Подождите немного и попробуйте ещё раз`}
      <>
        <ul className="cardlist">
          {cards.slice(0, movieCount).map((card) => (
            <Card
              card={card}
              key={isSavedMovies ? card.movieId : card.id}
              isSavedMovies={isSavedMovies}
              saved={isSaved(savedMovies, card)}
              savedMovies={savedMovies}
              onSaveClick={onSaveClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </ul>
      </>
      {cards.length > movieCount && <Loader loadMoreMovies={loadMoreMovies} />}
    </section>
  );
}

export default CardList;
