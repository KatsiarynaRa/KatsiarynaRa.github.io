function changeView(){
   const movies = document.querySelector('.movies')
    const movie = document.querySelectorAll('.movie')
    const btns = document.querySelectorAll('.view-changer')
    movies.classList.toggle('view-list');
    movie.forEach((element) => element.classList.toggle("list"));
    btns.forEach((element) => element.classList.toggle("disable"));
}
