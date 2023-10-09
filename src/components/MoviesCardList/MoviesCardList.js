import './MoviesCardList.css';
import Card from '../Card/Card';
import temporaryPic from '../../images/1.jpg';
const temporaryName = 'Бег это свобода';
const temporaryDur = "1ч 17м";

function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cardlist'>
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
        <Card
          name={temporaryName}
          link={temporaryPic}
          duration={temporaryDur}
        />
      </ul>
    </section>
  )
}

export default MoviesCardList;