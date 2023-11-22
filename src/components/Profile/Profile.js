import './Profile.css';
import Header from '../Header/Header';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEXP } from "../../utils/constants.js";
import mainApi from '../../utils/MainApi';

function Profile({ handleSignOut, handleSubmit, isLoggedIn, inputError }) {

  const currentUser = useContext(CurrentUserContext);

  const [isNotEditable, setIsNotEditable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameValidationError, setNameValidationError] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
    
    if (e.target.value.length > 1) {
      setNameValidationError('');
    } else {
      setNameValidationError('Имя не может быть короче 2 букв');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    
    if (EMAIL_REGEXP.test(e.target.value)) {
      setEmailValidationError('');
    } else {
      setEmailValidationError('Введён некорректный email');
    }
  }

  useEffect(() => {
    if (currentUser.data) {
      setName(currentUser.data.name);
      setEmail(currentUser.data.email);
    }
  }, [currentUser]);
  
  useEffect(() => {
    if (currentUser.data) {
    if ((name === currentUser.data.name && email === currentUser.data.email)
      || !EMAIL_REGEXP.test(email) || name.length < 2) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }
  }, [name, email, currentUser]);

  function handleEditClick() {
    setIsNotEditable(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (EMAIL_REGEXP.test(email)) {
      setEmailValidationError('');
      handleSubmit(name, email);
      setIsNotEditable(true);
      setName(name);
      setEmail(email)
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
            <h1 className="profile-form__title">Привет, {currentUser.data ? currentUser.data.name : ''}!</h1>
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
              <p className='input__error'>{nameValidationError}</p>
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