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
        placeholder="Введите имя"
        type="text"
        name="username"
        required
        minLength={2}
        maxLength={30}
      // onChange={handleEmailChange}
      // value={email || ''}
      ></input>
      <span className='input__error'></span>
      <label htmlFor="email" className='form__input-label'>E-mail</label>
      <input
        className="form__input"
        placeholder="Введите e-mail"
        type="email"
        name="email"
        required
        minLength={2}
        maxLength={30}
      // onChange={handleEmailChange}
      // value={email || ''}
      ></input>
      <span className='input__error'></span>

      <label htmlFor="password" className='form__input-label'>Пароль</label>
      <input
        className="form__input"
        placeholder="Введите пароль"
        type="password"
        name="password"
        required
        minLength={6}
        maxLength={30}
      // onChange={handlePasswordChange}
      // value={password || ''}
      ></input>

    </Form>
  )
}

export default RegisterForm;