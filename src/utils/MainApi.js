class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
    .then(this._getResponseData)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        return res;
      }
    })
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({ email, password })
    })
      .then(this._getResponseData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          return res;
        }
      })
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(this._getResponseData);
  }

  _getHeaders() {
    const token = localStorage.getItem('jwt');

    return {
      'Authorization': `Bearer ${token}`,
      ...this._headers};
  }

  getUserData() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._getHeaders()
    })
      .then(this._getResponseData);
  }

  patchUserData(name, email) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._getResponseData);
  }

  saveMovie(data) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country, 
        director: data.director, 
        duration: data.duration, 
        year: data.year, 
        description: data.description, 
        image: `https://api.nomoreparties.co${data.image.url}`, 
        trailerLink: data.trailerLink, 
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU, 
        nameEN: data.nameEN
      })
    })
      .then(this._getResponseData)
      .catch((err) => console.log(err))
  }

  deleteMovie(id) {
    return fetch(this._url + `/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then(this._getResponseData)
  }

  getMovies() {
    return fetch(this._url + '/movies', {
      method: 'GET',
      headers: this._getHeaders()
    })
      .then(this._getResponseData);
  }
 }

const mainApi = new MainApi({
  url: 'https://api.marymary.nomoredomainsicu.ru',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default mainApi;