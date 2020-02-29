const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__navigation");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("d-flex");
  document.body.classList.toggle("overflow");
  menuBtn.classList.toggle("open");
});
