import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <div className='profile-form__container'>
        <form name="profile-form" className="profile-form">
          <h2 className="profile-form__title">Добро пожаловать, Имя!</h2>
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
        <div className='profile-form__links'>
          <a className='link' href='#'>Редактировать</a>
          <a className='link link_color_red' href='#'>Выйти из аккаунта</a>
        </div>
      </div>
    </>
  )
}

export default Profile;