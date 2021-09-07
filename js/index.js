const burgerBtn = document.querySelector(".nav-btn");
const burgerMenu = document.querySelector(".main-nav");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active-menu");
});

const mapOpen = document.querySelector(".btn-map");
const modal = document.querySelector(".modal");
const mapClose = document.querySelector(".close");
const map = document.querySelector(".map");

mapOpen.addEventListener("click", () => {
  modal.classList.add("active");
  map.classList.add("active");
});

mapClose.addEventListener("click", () => {
  modal.classList.remove("active");
  map.classList.remove("active");
});
