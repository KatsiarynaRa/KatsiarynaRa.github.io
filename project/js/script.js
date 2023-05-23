async function getMovies() {
    let response = await fetch(`https://desfarik.github.io/star-wars/api/film/all.json`);
    let json = await response.json();
    return json;
}
showMovies();

async function showMovies() {
  const movies = await getMovies();
    const moviesEl = document.querySelector(".movies");
    movies.forEach((movie)=>{
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `<div class="movie-cover-inner">
      <img
        src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/637fa8eb-1ac5-40ee-9c37-0ba1c794d170/300x450"
        alt="cover"class="movie-cover"/>
      <div class="movie-cover--darkened"></div>
    </div>
    <div class="movie-info">
      <div class="title">
        ${movie.title}
      </div>
      <div class="episode"> <span>Эпизод: </span>${movie.episode_id
      }
      </div>
      <div class="release-date">${movie.release_date}
     
      </div>
      <div class="movie-average movie-average--green">9</div>
    </div>`
    moviesEl.appendChild(movieEl);
    })
    
}