import './SearchForm.css';
import searchIcon from '../../images/search_icon.svg';
import { useState, useEffect } from 'react'

function SearchForm({ onSearch, onToggle, isShorts, isSavedMovies }) {
  const [request, setRequest] = useState('')

  useEffect(() => {
    if (!isSavedMovies && localStorage.getItem('searchRequest')) {
      setRequest(localStorage.getItem('searchRequest'));
    }
  }, [isSavedMovies])

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(request);
  }

  function handleRequestChange(e) {
    setRequest(e.target.value);
  }

  return (
    <section className='search'>
      <div className='search-container'>
        <form name="search-form" className="search-form" onSubmit={handleSubmit}>
          <img className='search-form__icon' alt="" src={searchIcon} />
          <input
            type='text'
            name='search'
            className='search-form__input'
            placeholder='Фильм'
            defaultValue={request || ''}
            onChange={handleRequestChange}
          />
          <div className='search-form__buttons'>
            <button className='search-form__submit-button' type='submit'>
              Найти
            </button>
            <div className='search-form__line'></div>

          </div>
          <span className='form-input-search-error'>
          </span>
          <label className='search-form__label'>Короткометражки
            <button type='checkbox'
              className={`search-form__toggle-button ${isShorts ? `search-form__toggle-button_on` : ``}`}
              onClick={onToggle}
            >
            </button>
          </label>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;