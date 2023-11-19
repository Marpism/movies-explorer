import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";
import {
  DESKTOP_MIN_WIDTH,
  TABLET_MIN_WIDTH,
  DESKTOP_MOVIE_COUNT,
  TABLET_MOVIE_COUNT,
  MOBILE_MOVIE_COUNT,
  DESKTOP_COLUMN_COUNT,
  TABLET_COLUMN_COUNT,
  MOBILE_COLUMN_COUNT,
} from "../../utils/constants.js";

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
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
        setMovieCount(DESKTOP_MOVIE_COUNT);
        setColumnCount(DESKTOP_COLUMN_COUNT);
      } else if (window.innerWidth >= TABLET_MIN_WIDTH) {
        setMovieCount(TABLET_MOVIE_COUNT);
        setColumnCount(TABLET_COLUMN_COUNT);
      } else {
        setMovieCount(MOBILE_MOVIE_COUNT);
        setColumnCount(MOBILE_COLUMN_COUNT);
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
