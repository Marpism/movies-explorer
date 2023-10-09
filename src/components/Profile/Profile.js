import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <Header />
      <main className='profile-form__container'>
        <section>
          <form name="profile-form" className="profile-form">
            <h1 className="profile-form__title">Привет, Имя!</h1>
            <fieldset className="profile-form__fieldset">
              <div className='profile-form__input-container'>
                <label htmlFor="name" className='profile-form__input-label'>Имя</label>
                <input
                  className="profile-form__input"
                  value="Юзер"
                  type="text"
                  name="name"
                  // required
                  disabled
                ></input>
              </div>
              <div className='profile-form__split-line'></div>
              <div className='profile-form__input-container'>
                <label htmlFor="email" className='profile-form__input-label'>E-mail</label>
                <input
                  className="profile-form__input"
                  value="ya@ya.ru"
                  type="email"
                  name="email"
                  // required
                  disabled
                ></input>
              </div>
              {/* <button type="submit" name="submit" className="form__submit-button"></button> */}
            </fieldset>
          </form>
        </section>
        <div className='profile-form__links'>
          <a className='link' href='#'>Редактировать</a>
          <Link to="/" className='link link_color_red' >Выйти из аккаунта</Link>
        </div>
      </main>
    </>
  )
}

export default Profile;