import '../Form.css'
import Form from '../Form';
import { useState } from 'react';

function LoginForm({ onLogin, inputError }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <Form
      title="Рады видеть!"
      name="login"
      buttonText="Войти"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className='form__input-label'>e-mail</label>
      <input
        className="form__input"
        placeholder="Введите e-mail"
        type="email"
        name="email"
        minLength={2}
        maxLength={30}
        required
      onChange={handleEmailChange}
      value={email || ''}
      ></input>

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

export default LoginForm;