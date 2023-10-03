import './MoviesCardList.css';
import Card from '../Card/Card';
import temporaryPic from '../../images/1.jpg';
const temporaryName = 'Бег это свобода';
const temporaryDur = "1ч 17м";

function MoviesCardList() {
  return (
    <section className='cardlist'>
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
    </section>
  )
}

export default MoviesCardList;