import '../Form.css'
import Form from '../Form';
import { useState } from 'react';
import { EMAIL_REGEXP } from "../../../utils/constants.js";

function RegisterForm({ onRegistration, inputError }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (EMAIL_REGEXP.test(email)) {
      setEmailValidationError('');
      onRegistration(name, email, password);
    } else {
      setEmailValidationError('Введён некорректный email');
    }
  }

  return (
    <Form
      title="Добро пожаловать!"
      name="register"
      buttonText="Зарегистрироваться"
    onSubmit={handleSubmit}
    >
      <label htmlFor="username" className='form__input-label'>Имя</label>
      <input
        className="form__input"
        placeholder="Введите имя"
        type="text"
        name="username"
        required
        minLength={2}
        maxLength={30}
      onChange={handleNameChange}
      value={name || ''}
      ></input>
      
      <label htmlFor="email" className='form__input-label'>E-mail</label>
      <input
        className="form__input"
        placeholder="Введите e-mail"
        type="email"
        name="email"
        required
        minLength={2}
        maxLength={30}
      onChange={handleEmailChange}
      value={email || ''}
      ></input>
      
      <p className='input__error'>{emailValidationError}</p>

      <label htmlFor="password" className='form__input-label'>Пароль</label>
      <input
        className="form__input"
        placeholder="Введите пароль"
        type="password"
        name="password"
        required
        minLength={6}
        maxLength={30}
      onChange={handlePasswordChange}
      value={password || ''}
      ></input>

      <p className='input__error'>{inputError}</p>

    </Form>
  )
}

export default RegisterForm;