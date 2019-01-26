const menuButton = document.querySelector(".navigation__btn");
const navigationList = document.querySelector(".navigation__list");

menuButton.addEventListener("click", showMenu);

function showMenu() {
  navigationList.classList.toggle("navigation__list--active");
  menuButton.classList.toggle("navigation__btn--active");
}
