const moviesContainer = document.querySelector('.movies'); 
async function fetchMovies() {
    const response = await fetch(
      `https://desfarik.github.io/star-wars/api/film/all.json`
    );
    let movies = await response.json();
    console.log(movies)
    return movies;
  }
  fetchMovies()