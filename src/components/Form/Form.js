import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Form({ title, name, children, buttonText, onSubmit }) {
  return (
    <div className="form">
      <header className='form__header'>
        <Link to="/">
          <img src={logo} className="header__logo" alt="Логотип" />
        </Link>

      </header>
      <div className='form__container'>
        <form name={`${name}-form`} onSubmit={onSubmit}>
          <fieldset className="form__fieldset">
            <h2 className="form__title">{title}</h2>
            {children}
            <button type="submit" name="submit" className="form__submit-button">{buttonText || 'Войти'}</button>
          </fieldset>
        </form>
      </div>
      <span className='form__link-caption'>Уже зарегистрированы? <Link className='form__link' to="/signin">Войти</Link></span>
    </div>
  )
}

export default Form;
