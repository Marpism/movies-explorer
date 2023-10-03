import './Card.css'

function Card({ name, link, duration }) {
  return (
    <div className='card'>
      <button type='button' className='card__save-button'>Сохранить</button>
      <img className="card__image"
        src={link}
        alt={name}
      />
      <div className='card__text-area'>
        <h2 className='card__title'>{name}</h2>
        <p className='card__duration'>{duration}</p>
      </div>
    </div>
  )
}

export default Card;