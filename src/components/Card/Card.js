import "./Card.css";

function Card({
  card,
  savedMovies,
  isSavedMovies,
  saved,
  onSaveClick,
  onDeleteClick,
}) {

  function onDelete() {
    onDeleteClick(card);
  }

  function onSave() {
    if (saved) {
      onDeleteClick(savedMovies.find((movie) => movie.movieId === card.id));
    } else {
      onSaveClick(card);
    }
  }

  let cardButton;
  if (isSavedMovies) {
    cardButton = (<button type="button" className="card__button card__delete-button" onClick={onDelete}>&#10006;</button>);
  } else if (saved) {
    cardButton = (<button type="button" className="card__button card__save-button card__save-button_active" onClick={onSave}></button>);
  } else {
    cardButton = (<button type="button" className="card__button card__save-button" onClick={onSave}>Сохранить</button>);
  }

  return (
    <>
      <li className="card">
        {cardButton}
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img className="card__image"
            src={isSavedMovies ? card.image : "https://api.nomoreparties.co" + card.image.url}
            alt={card.nameRU}
          />
        </a>
        <article className="card__text-area">
          <h2 className="card__title">{card.nameRU}</h2>
          <p className="card__duration">{`${Math.floor(card.duration / 60) + "ч"
            } ${(card.duration % 60) + "м"}`}</p>
        </article>
      </li>
    </>
  );
}

export default Card;
