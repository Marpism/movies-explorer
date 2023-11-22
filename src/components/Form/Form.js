import './Form.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Form({ title, name, children, buttonText, onSubmit, submitDisabled}) {

  const location = useLocation();

  const signupLink = <span className='form__link-caption'>Уже зарегистрированы? <Link className='form__link' to="/signin">Войти</Link></span>;
  const signinLink = <span className='form__link-caption'>Ещё не зарегистрированы? <Link className='form__link' to="/signup">Регистрация</Link></span>

  return (
    <div className="form">
      <header className='form__header'>
        <Link to="/">
          <img src={logo} className="header__logo" alt="Логотип" />
        </Link>
      </header>
      <section className='form__container'>
        <form name={`${name}-form`} onSubmit={onSubmit}>
          <fieldset className="form__fieldset">
            <h1 className="form__title">{title}</h1>
            {children}
            <button type="submit" name="submit" className="form__submit-button" disabled={submitDisabled}>{buttonText || 'Войти'}</button>
          </fieldset>
        </form>
      </section>
      <div className='form__link-toggle'>
        {location.pathname !== '/signin' ? 
          signupLink : 
          signinLink}
      </div>
    </div>
  )
}

export default Form;
