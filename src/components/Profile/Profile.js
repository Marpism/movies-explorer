import './Profile.css';
import Header from '../Header/Header';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEXP } from "../../utils/constants.js";

function Profile({ handleSignOut, handleSubmit, isLoggedIn, inputError }) {

  const currentUser = useContext(CurrentUserContext);

  const [isNotEditable, setIsNotEditable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    setName(currentUser.data.name);
    setEmail(currentUser.data.email)
  }, [currentUser.data.name, currentUser.data.email]);
  
  useEffect(() => {
    if (name === currentUser.data.name && email === currentUser.data.email) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [name, email, currentUser.data.name, currentUser.data.email]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleEditClick() {
    setIsNotEditable(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (EMAIL_REGEXP.test(email)) {
      setEmailValidationError('');
      handleSubmit(name, email);
      setIsNotEditable(true);
    } else {
      setEmailValidationError('Введён некорректный email');
    }
  }

  function onSignOut() {
    handleSignOut()
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <main className='profile-form__container'>
        <section>
          <form name="profile-form" className="profile-form">
            <h1 className="profile-form__title">Привет, {name}!</h1>
            <fieldset className="profile-form__fieldset">
              <div className='profile-form__input-container'>
                <label htmlFor="name" className='profile-form__input-label'>Имя</label>
                <input
                  className="profile-form__input"
                  value={name}
                  type="text"
                  name="name"
                  minLength={2}
                  maxLength={30}
                  onChange={handleNameChange}
                  disabled={isNotEditable}
                ></input>
              </div>
              <div className='profile-form__split-line'></div>
              <div className='profile-form__input-container'>
                <label htmlFor="email" className='profile-form__input-label'>E-mail</label>
                <input
                  className="profile-form__input"
                  value={email}
                  type="email"
                  name="email"
                  minLength={2}
                  maxLength={30}
                  onChange={handleEmailChange}
                  disabled={isNotEditable}
                ></input>
              </div>
              <p className='input__error'>{emailValidationError}</p>
              <p className='input__error'>{inputError}</p>
              <button type="submit" name="submit" className={isNotEditable ? "form__submit-button invisible" : "form__submit-button"} onClick={onSubmit} disabled={submitDisabled}>Сохранить</button>
            </fieldset>
          </form>
        </section>
        <div className={isNotEditable ? 'profile-form__links' : 'profile-form__links invisible'}>
          <button type='button' className='link' onClick={handleEditClick}>Редактировать</button>
          <button type='button' className='link link_color_red' onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
      </main>
    </>
  )
}

export default Profile;