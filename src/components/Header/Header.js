// import React from "react";
import { useState } from "react";
import logo from "../../images/logo.svg"
import "./Header.css"
import { Link, NavLink, useLocation } from 'react-router-dom';
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header() {

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const location = useLocation();

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleClose() {
    setIsBurgerOpen(false);
  }


  return (
    <header className={location.pathname !== '/' ? 'header' : 'header header_theme_pink'}>
      <div className='header-container'>
        <Link to="/">
          <img src={logo} className="header__logo" alt="Логотип" />
        </Link>
        <button type="button" className="header__burger-button" onClick={handleBurgerClick}></button>
        <div className="menu">
          <nav className="menu__navigation">
            <NavLink to="/movies"
              className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}
            >Фильмы</NavLink>
            <NavLink to="/saved-movies"
              className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}
            >Сохранённые фильмы</NavLink>
          </nav>
          <NavLink to="/profile">
            <button className="menu__button">Аккаунт</button>
          </NavLink>
        </div>
      </div>
      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={handleClose} />
    </header>
  )
}

export default Header;