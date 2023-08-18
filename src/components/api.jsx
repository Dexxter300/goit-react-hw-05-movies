const key = 'a7847a7111d49121298d04d56ec9460a';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzg0N2E3MTExZDQ5MTIxMjk4ZDA0ZDU2ZWM5NDYwYSIsInN1YiI6IjY0ZGM3OWQ0ZDEwMGI2MTRiNWY2YjlmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2495hNu_tPV7ATn8vHZ3gQxpzZA5UQFueIAJcgSG4A',
  },
};

export async function getTrends() {
  const result = await fetch(
    // 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    'https://api.themoviedb.org/3/trending/all/week',
    options
  );
  return result;
}

export async function findMovie(movieId) {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  const movie = await result.json();
  return movie;
}

export async function getCast(movieId) {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  const cast = await result.json();
  return cast;
}

export async function getReviews(movieId) {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  const reviews = await result.json();
  return reviews;
}

export async function findMovieByName(query) {
  const result = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  const movie = await result.json();
  return movie;
}
