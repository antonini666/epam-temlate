const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__navigation");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("d-flex");
  document.body.classList.toggle("overflow");
  menuBtn.classList.toggle("open");
});

const search = document.getElementById("search");
const borderSearch = document.querySelector(".border");

search.addEventListener("focus", () => {
  borderSearch.classList.add("border--active");
});

search.addEventListener("blur", () => {
  borderSearch.classList.remove("border--active");
});

let itemsLocal = JSON.parse(localStorage.getItem("offer"));
const bag = document.querySelector(".bag-amount");
bag.innerHTML = `(${itemsLocal.length})`;

document.addEventListener("DOMContentLoaded", () => {
  currentItem();
});

function currentItem() {
  const itemsLink = document.querySelectorAll("[data-id]");
  for (let i = 0; i < itemsLink.length; i++) {
    itemsLink[i].addEventListener("click", () => {
      let currentItemId = itemsLink[i].getAttribute("data-id");
      localStorage.setItem("item", JSON.stringify(currentItemId));
    });
  }
}
