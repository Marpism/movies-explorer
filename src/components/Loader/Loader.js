import './Loader.css'

function Loader({loadMoreMovies}) {

  return (
    <section className='loader'>
      <button type='button' className='loader__button' onClick={() => loadMoreMovies()}>Ещё</button>
    </section>
  )
}

export default Loader;