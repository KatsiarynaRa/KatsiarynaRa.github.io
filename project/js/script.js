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
      movieEl.classList.add("link");
      const coverUrl = covers.find(cover=>cover.id ===movie.id).src;

      movieEl.innerHTML = `<a href="./film-discription.html"><div class="movies"></div><div class="movie-cover-inner">
      <img
        src="${coverUrl}"
        alt="cover"class="movie-cover"/>
      <div class="movie-cover--darkened"></div>
    </div>
    <div class="movie-info">
      <div class="title">
        ${movie.title}
      </div>
      <div class="episode"> <span>Episod:</span>${movie.episode_id
      }
      </div>
      <div class="release-date">${movie.release_date.slice(0, 4)}
     
      </div>
     
    </div></div></a>`
    moviesEl.appendChild(movieEl);
    })
    
}