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
      const movieEl = document.createElement("a");
      movieEl.classList.add("movie");
      const coverUrl = covers.find(cover=>cover.id ===movie.id).src;

      movieEl.innerHTML = `<div class="movie-cover-inner">
      <img
        src="${coverUrl}"
        alt="cover"class="movie-cover"/>
      <div class="movie-cover--darkened"></div>
    </div>
    <div class="movie-info">
      <div class="title">
        ${movie.title}
      </div>
      <div class="episode"> <span>Эпизод:</span>${movie.episode_id
      }
      </div>
      <div class="release-date">${movie.release_date}
     
      </div>
      <div class="movie-average movie-average--green">9</div>
    </div>`
    moviesEl.appendChild(movieEl);
    })
    
}