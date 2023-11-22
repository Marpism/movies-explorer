
class MoviesApi {
  constructor(options) {
    this._url = options.url
    this._headers = options.headers
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getAllMovies() {
    return fetch(this._url + '/beatfilm-movies', {
      method: 'GET',
      headers: this._headers
    })
      .then(this._getResponseData);
  }

}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;


