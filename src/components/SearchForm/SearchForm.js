import './SearchForm.css';
import searchIcon from '../../images/search_icon.svg';

function SearchForm({ onSubmit }) {
  return (
    <section className='search'>
      <div className='search-container'>
        <form name="search-form" className="search-form" onSubmit={onSubmit}>
          <img className='search-form__icon' src={searchIcon} />
          <input
            type='text'
            name='search'
            // id="form-input-avatar"
            className='search-form__input'
            // required
            // ref={avatarRef}
            placeholder="Фильм"
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
            <button type='button'
              className='search-form__toggle-button'>
            </button>
          </label>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;