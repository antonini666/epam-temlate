// const navLinks = document.querySelectorAll(".header__navigation a");
// const nav = document.querySelector(".navigation");

// let currentTarget;
// let booleanCounter = true;

// for (let i = 0; i < navLinks.length; i++) {
//   let filter = document.querySelector(".filters-off");

//   navLinks[i].addEventListener("click", e => {
//     if (booleanCounter) {
//       currentTarget = e.target;
//       currentTarget.classList.add("active");
//       filter.classList.add("filters");
//       booleanCounter = false;
//     } else if (currentTarget === e.target) {
//       currentTarget.classList.remove("active");
//       filter.classList.remove("filters");
//       booleanCounter = true;
//     } else {
//       currentTarget = e.target;
//       for (let j = 0; j < navLinks.length; j++) {
//         navLinks[j].classList.remove("active");
//         filter.classList.remove("filters");
//       }
//       currentTarget.classList.add("active");
//       filter.classList.add("filters");
//       booleanCounter = false;
//     }
//   });
// }

// const filters = document.querySelectorAll(".filter__drop");

// for (let i = 0; i < filters.length; i++) {
//   filters[i].addEventListener("click", e => {
//     let target = e.target;
//     let filter = document.querySelectorAll(".filter")[i];
//     let filterName = document.querySelectorAll(".filter__name")[i];
//     let filterStyle = document.querySelectorAll(".filter__style")[i];

//     if (target.innerHTML !== "Not selected" && target.tagName.toLowerCase() === "li") {
//       filterName.classList.add("filter__name--active");
//       filterStyle.classList.add("filter__style--active");
//       filter.classList.add("filter--active");
//       filterStyle.innerHTML = target.innerHTML;
//     } else {
//       filterName.classList.remove("filter__name--active");
//       filterStyle.classList.remove("filter__style--active");
//       filter.classList.remove("filter--active");
//     }
//   });
// }

var navLinks = document.querySelectorAll(".header__navigation a");
var nav = document.querySelector(".navigation");
var currentTarget;
var booleanCounter = true;

var _loop = function _loop(i) {
  var filter = document.querySelector(".filters-off");
  navLinks[i].addEventListener("click", function(e) {
    if (booleanCounter) {
      currentTarget = e.target;
      currentTarget.classList.add("active");
      filter.classList.add("filters");
      booleanCounter = false;
    } else if (currentTarget === e.target) {
      currentTarget.classList.remove("active");
      filter.classList.remove("filters");
      booleanCounter = true;
    } else {
      currentTarget = e.target;

      for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
        filter.classList.remove("filters");
      }

      currentTarget.classList.add("active");
      filter.classList.add("filters");
      booleanCounter = false;
    }
  });
};

for (var i = 0; i < navLinks.length; i++) {
  _loop(i);
}

var filters = document.querySelectorAll(".filter__drop");

var _loop2 = function _loop2(_i) {
  filters[_i].addEventListener("click", function(e) {
    var target = e.target;

    var filter = document.querySelectorAll(".filter")[_i];

    var filterName = document.querySelectorAll(".filter__name")[_i];

    var filterStyle = document.querySelectorAll(".filter__style")[_i];

    if (
      target.innerHTML !== "Not selected" &&
      target.tagName.toLowerCase() === "li"
    ) {
      filterName.classList.add("filter__name--active");
      filterStyle.classList.add("filter__style--active");
      filter.classList.add("filter--active");
      filterStyle.innerHTML = target.innerHTML;
    } else {
      filterName.classList.remove("filter__name--active");
      filterStyle.classList.remove("filter__style--active");
      filter.classList.remove("filter--active");
    }
  });
};

for (var _i = 0; _i < filters.length; _i++) {
  _loop2(_i);
}
