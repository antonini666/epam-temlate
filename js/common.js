// const menuBtn = document.querySelector(".menu__btn");
// const headerNav = document.querySelector(".header__navigation");
// const logo = document.querySelector(".logo");

// let mql = window.matchMedia("(max-width: 768px)");

// function screenTest(e) {
//   if (e.matches) {
//     logo.innerHTML = "TL";
//   } else {
//     logo.innerHTML = "Template";
//   }
// }

// mql.addListener(screenTest);

// menuBtn.addEventListener("click", () => {
//   headerNav.classList.toggle("d-flex");
//   document.body.classList.toggle("overflow");
//   menuBtn.classList.toggle("open");
// });

// const search = document.getElementById("search");
// const borderSearch = document.querySelector(".border");

// search.addEventListener("focus", () => {
//   borderSearch.classList.add("border--active");
// });

// search.addEventListener("blur", () => {
//   borderSearch.classList.remove("border--active");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   currentItem();
// });

// function currentItem() {
//   let itemsOffer = JSON.parse(localStorage.getItem("offer"));
//   let itemsOther = JSON.parse(localStorage.getItem("items"));
//   let bag = document.querySelector(".bag-amount");
//   let bagPrice = document.querySelector(".bag-price");

//   let itemsPrice = 0;

//   function bagPriceRender(items) {
//     if (items) {
//       bag.innerHTML = +bag.innerHTML + items.length;
//       items.map(item => {
//         item.discountedPrice
//           ? (itemsPrice += item.discountedPrice)
//           : (itemsPrice += item.price);
//       });
//     }
//   }
//   bagPriceRender(itemsOffer);
//   bagPriceRender(itemsOther);

//   if (itemsOffer && itemsOffer.length === 2) {
//     bagPrice.innerHTML = `£${(itemsPrice - 15).toFixed(2)}`;
//   } else {
//     bagPrice.innerHTML = `£${itemsPrice.toFixed(2)}`;
//   }

//   const itemsLink = document.querySelectorAll("[data-id]");
//   if (itemsLink.length === 0) {
//     return;
//   } else {
//     for (let i = 0; i < itemsLink.length; i++) {
//       itemsLink[i].addEventListener("click", () => {
//         let currentItemId = itemsLink[i].getAttribute("data-id");
//         localStorage.setItem("item", JSON.stringify(currentItemId));
//       });
//     }
//   }

//   let currentItems = [];

//   if (localStorage.getItem("items") === null) {
//     localStorage.setItem("items", JSON.stringify(currentItems));
//   }
// }

document.addEventListener("DOMContentLoaded", currentItem());

var menuBtn = document.querySelector(".menu__btn");
var headerNav = document.querySelector(".header__navigation");

menuBtn.addEventListener("click", function() {
  headerNav.classList.toggle("d-flex");
  document.body.classList.toggle("overflow");
  menuBtn.classList.toggle("open");
});
var search = document.getElementById("search");
var borderSearch = document.querySelector(".border");
search.addEventListener("focus", function() {
  borderSearch.classList.add("border--active");
});
search.addEventListener("blur", function() {
  borderSearch.classList.remove("border--active");
});

function currentItem() {
  var itemsOffer = JSON.parse(localStorage.getItem("offer"));
  var itemsOther = JSON.parse(localStorage.getItem("items"));
  var bag = document.querySelector(".bag-amount");
  var bagPrice = document.querySelector(".bag-price");
  var itemsPrice = 0;

  function bagPriceRender(items) {
    if (items) {
      bag.innerHTML = +bag.innerHTML + items.length;
      items.map(function(item) {
        item.discountedPrice
          ? (itemsPrice += item.discountedPrice)
          : (itemsPrice += item.price);
      });
    }
  }

  bagPriceRender(itemsOffer);
  bagPriceRender(itemsOther);

  if (itemsOffer && itemsOffer.length === 2) {
    bagPrice.innerHTML = "\xA3" + (itemsPrice - 15).toFixed(2);
  } else {
    bagPrice.innerHTML = "\xA3" + itemsPrice.toFixed(2);
  }

  var itemsLink = document.querySelectorAll("[data-id]");

  if (itemsLink.length === 0) {
    return;
  } else {
    var _loop = function _loop(i) {
      itemsLink[i].addEventListener("click", function() {
        var currentItemId = itemsLink[i].getAttribute("data-id");
        localStorage.setItem("item", JSON.stringify(currentItemId));
      });
    };

    for (var i = 0; i < itemsLink.length; i++) {
      _loop(i);
    }
  }

  var currentItems = [];

  if (localStorage.getItem("items") === null) {
    localStorage.setItem("items", JSON.stringify(currentItems));
  }
}
