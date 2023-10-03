import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <div className='notfound-page'>
        <span className='notfound-header'>404</span>
        <span className='notfound-text'>Страница не найдена</span>
      </div>
      <Link to='/' className='notfound-link'>Назад</Link>
    </>
  )
}

export default NotFoundPage;