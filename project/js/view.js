let viewBtn = document.querySelector("#view-changer");
let movies = document.querySelector(".movies");
let movie = document.querySelector(".movie");

viewBtn.addEventListener("click", function () {
  if (
    viewBtn.innerHTML ==
    '<span class="material-symbols-outlined sorting-btn">calendar_view_month</span>'
  ) {
    movies.style.flexDirection = "row";
    movies.style.justifyContent = "space-around";
      viewBtn.innerHTML =
      '<span class="material-symbols-outlined sorting-btn">table_rows_narrow</span>';
  } else {
    movies.style.flexDirection = "column";
    movies.style.alignItems = "center";

    
    viewBtn.innerHTML =
      '<span class="material-symbols-outlined sorting-btn">calendar_view_month</span>';
  }
});
