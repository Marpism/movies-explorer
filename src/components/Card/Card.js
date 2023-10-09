import './Card.css'

function Card({ name, link, duration }) {
  return (
    <li className='card'>
      <button type='button' className='card__save-button'>Сохранить</button>
      <img className="card__image"
        src={link}
        alt={name}
      />
      <article className='card__text-area'>
        <h2 className='card__title'>{name}</h2>
        <p className='card__duration'>{duration}</p>
      </article>
    </li>
  )
}

export default Card;