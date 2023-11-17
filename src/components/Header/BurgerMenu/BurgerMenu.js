import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

function BurgerMenu({ isOpen, onClose, isLoggedIn }) {

  return (
    <div className={`burger-menu__popup ${isOpen ? `burger-menu__popup_opened` : ""}`}>
              {isLoggedIn ? 
        (
          <div className='burger-menu__container'>
          <nav className='burger-menu__navigation'>
            <button type="button" className="burger-menu__close-button" onClick={onClose}></button>
            <NavLink to="/"
              className={({ isActive }) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}
            >Главная</NavLink>
            <NavLink to="/movies"
              className={({ isActive }) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}
            >Фильмы</NavLink>
            <NavLink to="/saved-movies"
              className={({ isActive }) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}
            >Сохранённые фильмы</NavLink>
          </nav>
          <NavLink to="/profile">
            <button className="burger-menu__button">Аккаунт</button>
          </NavLink>
        </div>
        ) : 
        (
          <div className='burger-menu__container'>
          <nav className='burger-menu__navigation'>
            <button type="button" className="burger-menu__close-button" onClick={onClose}></button>
            <NavLink to="/signup"
              className={({ isActive }) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}
            >Регистрация</NavLink>
            <NavLink to="/signin"
              className={({ isActive }) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}
            >Войти</NavLink>
          </nav>
        </div>
        )}
    </div>
  )
}

export default BurgerMenu;