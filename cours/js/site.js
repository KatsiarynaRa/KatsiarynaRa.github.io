let currentImageIndex = 0;
const IMAGE_COUNT = 3;
const IMAGE_WIDTH = 290;

function changeIndicators() {
  const prev = document.querySelector(".indicator.active");
  prev.classList.remove("active");

  const selector = `.indicator:nth-child(${currentImageIndex + 1})`;
  const indicator = document.querySelector(selector);
  indicator.classList.add("active");
}

function goToNext(step) {
  currentImageIndex = currentImageIndex + step;
  const offset = IMAGE_WIDTH * currentImageIndex;
  const imageContainer = document.querySelector(".inner-image-container");
  imageContainer.style.transform = `translateX(-${offset}px)`;
  disableButtons();
  changeIndicators();
}

function goToElement(elementIndex) {
  currentImageIndex = elementIndex;
  const offset = IMAGE_WIDTH * currentImageIndex;
  const imageContainer = document.querySelector(".inner-image-container");
  imageContainer.style.transform = `translateX(-${offset}px)`;
  disableButtons();
  changeIndicators();
}

function disableButtons() {
  const [prev, next] = document.querySelectorAll(".carousel-nav-button");
  if (currentImageIndex === 0) {
    prev.setAttribute("disabled", "true");
  } else {
    prev.removeAttribute("disabled");
  }
  if (currentImageIndex + 1 === IMAGE_COUNT) {
    next.setAttribute("disabled", "true");
  } else {
    next.removeAttribute("disabled");
  }
}
showTab(1);

function showTab(tabNumber = 1) {
  const previousContent = document.querySelector(".tab-content.shown");
  if (previousContent) {
    previousContent.classList.remove("shown");
  }
  const tabContent = document.querySelector(`.tab-content-${tabNumber}`);
  tabContent.classList.add("shown");
}

$(".back-to-top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 800);
});

function openDialog() {
  const dialog = document.querySelector('.dialog-container')
  dialog.classList.add('shown');
}

function closeDialog() {
  const dialog = document.querySelector('.dialog-container')
  dialog.classList.remove('shown');
}