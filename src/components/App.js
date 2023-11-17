import './App.css';
import Main from "./Main/Main";
import LoginForm from './Form/LoginForm/LoginForm'
import RegisterForm from './Form/RegisterForm/RegisterForm';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import mainApi from '../utils/MainApi';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [inputError, setInputError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  function handleRegistration(name, email, password) {
    setInputError('');
    mainApi.register(name, email, password)
      .then(() => {
        setIsLoggedIn(true)
      })
      .catch((err) => {
        if (err.status === 409) {
          setInputError('Пользователь с таким email уже существует')
        } else {
          setInputError('При регистрации пользователя произошла ошибка')
        }
      })
  }

  function handleLogin(email, password) {
    setInputError('');
    mainApi.login(email, password)
      .then(() => {
        setIsLoggedIn(true)
        navigate('/', { replace: true })
      })
      .catch((err) => {
        if (err.status === 401) {
          setInputError('Неправильный логин или пароль')
        } else {
          setInputError('При авторизации произошла ошибка')
        }
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          setCurrentUser(res)
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getMovies()
        .then((data) => {
          setSavedMovies(data.data.reverse())
        })
        .catch(err => console.log(err))
    }
  }, [isLoggedIn]);


  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/', { replace: true });
  }

  function handleProfileSubmit(name, email) {
    setInputError('');
    mainApi.patchUserData(name, email)
    .catch((err) => {
      if (err.status === 409) {
        setInputError('Пользователь с таким email уже существует')
      } else {
        setInputError('При обновлении профиля произошла ошибка')
      }
    })
  }

  function handleSaveClick(card) {
    mainApi.saveMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleDeleteClick(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== card._id))
      })
      .catch(err => console.log(err));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main
            isLoggedIn={isLoggedIn}
          />} />
          <Route path="/signup" element={<RegisterForm
            onRegistration={handleRegistration}
            inputError={inputError}
          />} />
          <Route path="/signin" element={<LoginForm
            onLogin={handleLogin}
            inputError={inputError}
          />} />
          <Route exact path="/movies" element={<ProtectedRoute
            isLoggedIn={isLoggedIn}
            element={Movies}
            savedMovies={savedMovies}
            onSaveClick={handleSaveClick}
            onDeleteClick={handleDeleteClick}
          />} />
          <Route exact path="/saved-movies" element={<ProtectedRoute
            isLoggedIn={isLoggedIn}
            element={SavedMovies}
            savedMovies={savedMovies}
            onDeleteClick={handleDeleteClick}
          />} />
          <Route exact path="/profile" element={<ProtectedRoute
            isLoggedIn={isLoggedIn}
            element={Profile}
            handleSignOut={handleSignOut}
            handleSubmit={handleProfileSubmit}
            inputError={inputError}
          />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
