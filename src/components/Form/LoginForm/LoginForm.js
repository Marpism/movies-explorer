import '../Form.css'
import Form from '../Form';

function LoginForm() {
  return (
    <Form
      title="Рады видеть!"
      name="login"
      buttonText="Войти"
    // onSubmit=
    >
      <label htmlFor="email" className='form__input-label'>E-mail</label>
      <input
        className="form__input"
        placeholder="ya@ya.ru"
        type="email"
        name="email"
        required
      // onChange={handleEmailChange}
      // value={email || ''}
      ></input>

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

export default LoginForm;