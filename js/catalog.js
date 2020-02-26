// const itemsWrap = document.querySelector(".main__items");

// const itemCatalog = window.catalog
//   .filter(item => {
//     return item.category === "women" && item.fashion === "Casual style";
//   })
//   .sort((data1, data2) => {
//     return new Date(data2.dateAdded) - new Date(data1.dateAdded);
//   });

// const mqls = [
//   window.matchMedia("(max-width: 768px)"),
//   window.matchMedia("(max-width: 1024px)")
// ];

// function mediaqueryresponse(mql) {
//   if (mqls[0].matches) {
//     itemRender(0, 2);
//   } else if (mqls[1].matches) {
//     itemRender(0, 3);
//   }
//   if (!mqls[0].matches && !mqls[1].matches) {
//     itemRender(0, 4);
//   }
// }

// for (let i = 0; i < mqls.length; i++) {
//   mediaqueryresponse(mqls[i]);
//   mqls[i].addListener(mediaqueryresponse);
// }

// function itemRender(first, second) {
//   itemsWrap.innerHTML = "";
//   itemCatalog.slice(first, second).forEach((item, id) => {
//     let template = `
//     <div class="main__item product-item ${
//       item.hasNew ? "product-item--new" : ""
//     }">
//       <a href="item.html">
//         <div class="product-item__image">
//           <img src="${item.thumbnail}" alt="only-skinny-jeans">
//         </div>
//         <div class="product-item__desc">
//           <div class="product-item__title">${item.title}</div>
//         </div>
//       </a>
//       <div class="product-item__price">£${item.price}</div>
//     </div>`;

//     itemsWrap.innerHTML += template;
//   });

//   itemsWrap.innerHTML += `<div class="main__item sale-notice">
//     <h3 class="sale-notice__title">Last weekend <span>extra 50%</span> off on all reduced boots and shoulder
//       bags</h3>
//     <p class="sale-notice__desc">This offer is valid in-store and online. Prices displayed reflect this
//       additional discount. This offer ends at 11:59 GMT on March 1st 2019</p>
//   </div>`;

//   itemCatalog.slice(second).forEach((item, id) => {
//     let template = `
//     <div class="main__item product-item ${
//       item.hasNew ? "product-item--new" : ""
//     }">
//       <a href="item.html">
//         <div class="product-item__image">
//           <img src="${item.thumbnail}" alt="only-skinny-jeans">
//         </div>
//         <div class="product-item__desc">
//           <div class="product-item__title">${item.title}</div>
//         </div>
//       </a>
//       <div class="product-item__price">£${item.price}</div>
//     </div>`;

//     itemsWrap.innerHTML += template;
//   });
// }

//////////////////////////////////
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

var itemsWrap = document.querySelector(".main__items");
var itemCatalog = window.catalog
  .filter(function(item) {
    return item.category === "women" && item.fashion === "Casual style";
  })
  .sort(function(data1, data2) {
    return new Date(data2.dateAdded) - new Date(data1.dateAdded);
  });
var mqls = [
  window.matchMedia("(max-width: 768px)"),
  window.matchMedia("(max-width: 1024px)")
];

function mediaqueryresponse(mql) {
  if (mqls[0].matches) {
    itemRender(0, 2);
  } else if (mqls[1].matches) {
    itemRender(0, 3);
  }

  if (!mqls[0].matches && !mqls[1].matches) {
    itemRender(0, 4);
  }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addListener(mediaqueryresponse);
}

function itemRender(first, second) {
  itemsWrap.innerHTML = "";
  itemCatalog.slice(first, second).forEach(function(item, id) {
    var template =
      '\n    <div class="main__item product-item ' +
      (item.hasNew ? "product-item--new" : "") +
      '">\n      <a href="item.html">\n        <div class="product-item__image">\n          <img src="' +
      item.thumbnail +
      '" alt="only-skinny-jeans">\n        </div>\n        <div class="product-item__desc">\n          <div class="product-item__title">' +
      item.title +
      '</div>\n        </div>\n      </a>\n      <div class="product-item__price">\xA3' +
      item.price +
      "</div>\n    </div>";
    itemsWrap.innerHTML += template;
  });
  itemsWrap.innerHTML +=
    '<div class="main__item sale-notice">\n    <h3 class="sale-notice__title">Last weekend <span>extra 50%</span> off on all reduced boots and shoulder\n      bags</h3>\n    <p class="sale-notice__desc">This offer is valid in-store and online. Prices displayed reflect this\n      additional discount. This offer ends at 11:59 GMT on March 1st 2019</p>\n  </div>';
  itemCatalog.slice(second).forEach(function(item, id) {
    var template =
      '\n    <div class="main__item product-item ' +
      (item.hasNew ? "product-item--new" : "") +
      '">\n      <a href="item.html">\n        <div class="product-item__image">\n          <img src="' +
      item.thumbnail +
      '" alt="only-skinny-jeans">\n        </div>\n        <div class="product-item__desc">\n          <div class="product-item__title">' +
      item.title +
      '</div>\n        </div>\n      </a>\n      <div class="product-item__price">\xA3' +
      item.price +
      "</div>\n    </div>";
    itemsWrap.innerHTML += template;
  });
}

var navLinks = document.querySelectorAll(".header__navigation a");
var nav = document.querySelector(".navigation");
var currentTarget;
var booleanCounter = true;

var _loop = function _loop(_i) {
  var filter = document.querySelector(".filters-off");

  navLinks[_i].addEventListener("click", function(e) {
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

for (var _i = 0; _i < navLinks.length; _i++) {
  _loop(_i);
}

var filters = document.querySelectorAll(".filter__drop");

var _loop2 = function _loop2(_i2) {
  filters[_i2].addEventListener("click", function(e) {
    var target = e.target;

    var filter = document.querySelectorAll(".filter")[_i2];

    var filterName = document.querySelectorAll(".filter__name")[_i2];

    var filterStyle = document.querySelectorAll(".filter__style")[_i2];

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

for (var _i2 = 0; _i2 < filters.length; _i2++) {
  _loop2(_i2);
}
