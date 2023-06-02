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
      const coverUrl = covers.find(cover=>cover.id===movie.episode_id
        ).src;

      movieEl.innerHTML = `<a href ="./film-discription.html" class="movie-cover-inner">
      <img
        src="${coverUrl}"
        alt="cover"class="movie-cover"/>
      <div class="movie-cover--darkened"></div>
    </a>
    <div class="movie-info">
      <div class="title">
        ${movie.title}
      </div>
      <div class="episode"data-lang-key="Episode"> <span >Episode: </span>${movie.episode_id
      }
      </div>
      <div class="release-date">${movie.release_date.slice(0, 4)}

      </div>

    </div>`
    moviesEl.appendChild(movieEl);
    })

}
async function fetchMovies() {
  const response = await fetch(
    `https://desfarik.github.io/star-wars/api/film/all.json`
  );
  let movies = await response.json();
  console.log(movies)
  return movies;
}
fetchMovies()

async function renderMovies(sortingValue) {
const listOfMovies = await fetchMovies();

  function sorting() {
  let temp = JSON.parse(JSON.stringify(array));
  temp.forEach(item=>{
    item.episode_id = +item.episode_id.replace(/\D/g, '');
  })
temp.sort((a,b)=>a.episode_id > b.episode_id ? 1:-1 );
console.log(temp);

  sorting(sortingValue);

moviesContainer.innerHTML = '';
listOfMovies.forEach(element => {
  const movieItem = document.createElement('div');
  movieItem.classList.add('movie-item');
  movieItem.innerHTML =
  `<a href="./episode.html?episode=${element.episode_id}" class="episode-link">
        <img src="images/episode${element.episode_id}.jpeg" alt="${element.title}" class="movie-poster">
        <div class="movie-details">
          <div class="movie-number">Episode ${element.episode_id}</div>
          <div class="movie-title">${element.title}</div>
          <div class="movie-year">Year: ${element.release_date.slice(0,4)}</div>
        </div>
  </a>
  `
  moviesContainer.append(movieItem);
})

}

async function sortingByEpisodNumber(array){

  let temp = JSON.parse(JSON.stringify(array));
  temp.forEach(item=>{
    item.episode_id = +item.episode_id.replace(/\D/g, '');
  })
  temp.sort((a,b)=>a.episode_id > b.episode_id ? 1:-1 );
console.log(temp);
}
sortingByEpisodNumber(movies);
const moviesContainer = document.querySelector('.movies');
