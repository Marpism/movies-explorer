import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__text-area'>
        <p className='footer__copyright'>© 2023</p>
        <div className='footer__navigation'>
          <a href='https://practicum.yandex.ru/' target="_blank" rel='noreferrer' className='footer__link'>Яндекс.Практикум</a>
          <a href='https://github.com/' target="_blank" rel='noreferrer' className='footer__link'>GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;