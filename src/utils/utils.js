function filterByName(movie, request) {
  if (movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
    movie.nameEN.toLowerCase().includes(request.toLowerCase())) {
    return true
  };
}

function filterByDuration(movie) {
  return movie.duration <= 40;
}

export function filterMovies(data, request, isShorts) {
  if (isShorts) {
    return data.filter((movie) => filterByDuration(movie) && filterByName(movie, request));
  } else {
    return data.filter((movie) => filterByName(movie, request));
  }
}