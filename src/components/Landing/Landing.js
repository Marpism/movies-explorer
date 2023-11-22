import './Landing.css';
import pic from '../../images/margo.png';

function Landing() {
  return (
      <main className='landing'>
        <section className='landing__header'>
          <div className='landing__banner'>
            <h1 className='landing__title'>Учебный проект студентки факультета Веб-разработки.</h1>
          </div>
          <nav className='landing__menu'>
            <a href='#about-project' className='landing__menu-link'>О проекте</a>
            <a href='#techs' className='landing__menu-link'>Технологии</a>
            <a href='#about-me' className='landing__menu-link'>Студент</a>
          </nav>
        </section>
        <section className='landing__about-project' id="about-project">
          <h2 className='landing__subtitle'>О проекте</h2>
          <div className='landing__about-container'>
            <article className='landing__abouts'>
              <h3 className='landing__about-header'>Дипломный проект включал 5 этапов</h3>
              <p className='landing__about-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </article>
            <article className='landing__abouts'>
              <h3 className='landing__about-header'>На выполнение диплома ушло 5 недель</h3>
              <p className='landing__about-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </article>
          </div>
          <div className='landing__scale-container'>
            < div className='landing__scale_dark'>
              <p className='landing__scale-text_size_s'>1 неделя</p>
            </div>
            <div className='landing__scale_light'>
              <p className='landing__scale-text_size_s'>4 недели</p>
            </div>
            <p className='landing__scale-text_size_m'>Back-end</p>
            <p className='landing__scale-text_size_m'>Front-end</p>
          </div>
        </section>

        <section className='landing__techs' id="techs">
          <h2 className='landing__subtitle'>Технологии</h2>
          <div className='landing__techs-container'>
            <h3 className='landing__title'>7 технологий</h3>
            <p className='landing__techs-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='landing__techs-cards'>
              <li className='landing__techs-card'>HTML</li>
              <li className='landing__techs-card'>CSS</li>
              <li className='landing__techs-card'>JS</li>
              <li className='landing__techs-card'>React</li>
              <li className='landing__techs-card'>Git</li>
              <li className='landing__techs-card'>Express.js</li>
              <li className='landing__techs-card'>MongoDB</li>
            </ul>
          </div>
        </section>

        <section className='landing__about-me' id="about-me">
          <h2 className='landing__subtitle'>Студент</h2>
          <article className='landing__about-me-container'>
            <div className='landing__about-me-text-container'>
              <h3 className='landing__about-me-header'>Марго</h3>
              <p className='landing__about-me-subtitle'>Фронтенд-разработчица, 32 года</p>
              <p className='landing__about-me-text'>Я родилась в Екатеринбурге, уже 11 лет живу в Санкт-Петербурге. Мы с мамой владеем небольшим семейным бизнесом, интернет-магазином украшений. Именно желание самостоятельно дорабатывать и обслуживать наш магазин привело меня в веб-разработку.</p>
              <a href='https://github.com/Marpism' target='__blank' className='landing__about-me-link'>Github</a>
            </div>
            <img className='landing__about-pic' src={pic} alt="Фото студентки"/>
          </article>
        </section>
        <section className='landing__portfolio'>
          <h2 className='landing__portfolio-header'>Портфолио</h2>
          <ul className='landing__portfolio-container'>
            <li className='landing__link-box'>
              <a href='https://github.com/Marpism/how-to-learn' target='__blank' className='landing__portfolio-link'>
                <p className='landing__portfolio-text'>Статичный сайт</p>
                <p className='landing__portfolio-text'>↗</p>
              </a>
            </li>
            <li className='landing__link-box'>
              <a href='https://github.com/Marpism/russian-travel' target='__blank' className='landing__portfolio-link'>
                <p className='landing__portfolio-text'>Адаптивный сайт</p>
                <p className='landing__portfolio-text'>↗</p>
              </a>
            </li>
            <li className='landing__link-box'>
              <a href='https://github.com/Marpism/react-mesto-api-full-gha' target='__blank' className='landing__portfolio-link'>
                <p className='landing__portfolio-text'>Одностраничное приложение</p>
                <p className='landing__portfolio-text'>↗</p>
              </a>
            </li>
          </ul>

        </section>

      </main>
  )
}

export default Landing;