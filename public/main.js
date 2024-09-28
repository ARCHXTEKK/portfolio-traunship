const burgerBtn = document.querySelector(".header__burger-btn");
const headerNav = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", (e) => {
  headerNav.classList.toggle("header__nav--active");
});
