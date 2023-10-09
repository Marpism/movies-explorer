
import './App.css';
import Main from "./Main/Main";
import LoginForm from './Form/LoginForm/LoginForm'
import RegisterForm from './Form/RegisterForm/RegisterForm';
import Landing from './Landing/Landing';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies" element={<Main />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="//saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




