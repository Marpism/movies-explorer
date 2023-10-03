import '../Form.css'
import Form from '../Form';

function RegisterForm() {
  return (
    <Form
      title="Добро пожаловать!"
      name="register"
      buttonText="Зарегистрироваться"
    // onSubmit=
    >
      <label htmlFor="username" className='form__input-label'>Имя</label>
      <input
        className="form__input"
        placeholder="Пупа2000"
        type="text"
        name="username"
        required
      // onChange={handleEmailChange}
      // value={email || ''}
      ></input>
      <span className='input__error'></span>
      <label for="email" className='form__input-label'>E-mail</label>
      <input
        className="form__input"
        placeholder="ya@ya.ru"
        type="email"
        name="email"
        required
      // onChange={handleEmailChange}
      // value={email || ''}
      ></input>
      <span className='input__error'></span>

      <label htmlFor="password" className='form__input-label'>Пароль</label>
      <input
        className="form__input"
        placeholder="12345"
        type="password"
        name="password"
        required
      // onChange={handlePasswordChange}
      // value={password || ''}
      ></input>

    </Form>
  )
}

export default RegisterForm;