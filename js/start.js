// const catalog = window.catalog;
// const bestOffer = window.bestOffer;
// const itemsWrap = document.querySelector(".new-arrivals__items");

// const itemCatalog = catalog
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

// function mediaQueryResponse() {
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
//   mediaQueryResponse(mqls[i]);
//   mqls[i].addListener(mediaQueryResponse);
// }

// function itemRender(first, second) {
//   itemsWrap.innerHTML = "";

//   itemCatalog.slice(first, second).forEach((item, id) => {
//     let template = `
//     <div class="new-arrivals__item product-item ${
//       item.hasNew ? "product-item--new" : ""
//     }">
//       <a href="item.html" data-id=${item.id}>
//         <div class="product-item__image">
//           <img src="${item.thumbnail}" alt="only-skinny-jeans">
//         </div>
//         <div class="product-item__desc">
//           <div class="product-item__title">${item.title}</div>
//         </div>
//       </a>
//       <div class="price__wrap">
//       ${
//         item.price === item.discountedPrice || item.discountedPrice === null
//           ? `<div class="product-item__price" data-price="${item.price.toFixed(
//               2
//             )}">£${item.price.toFixed(2)}</div>`
//           : `<div class="product-item__price-old" data-price="${item.price.toFixed(
//               2
//             )}">£${item.price.toFixed(2)}</div>
//         <div class="product-item__price" data-price="${item.discountedPrice.toFixed(
//           2
//         )}">£${item.discountedPrice.toFixed(2)}</div>`
//       } 
//       </div>
//     </div>`;

//     itemsWrap.innerHTML += template;
//   });

//   let itemBlock = null;

//   let items = document.querySelectorAll(".new-arrivals__items .product-item");

//   for (let i = 0; i < items.length; i++) {
//     if (i % second === 0) {
//       itemBlock = document.createElement("div");
//       itemBlock.className = "new-arrivals__block";
//       itemsWrap.appendChild(itemBlock);
//     }

//     itemBlock.appendChild(items[i]);
//   }
// }

// const bestOfferLeftId = bestOffer.left;
// const bestOfferRightId = bestOffer.right;
// const bestOfferDiscount = bestOffer.discount;

// const bestOfferArrayLeft = [];
// const bestOfferArrayRight = [];

// function seacrhBestOffer(arr, recordArr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < catalog.length; k++) {
//       if (catalog[k].id === arr[i]) {
//         recordArr.push(catalog[k]);
//       }
//     }
//   }
// }

// seacrhBestOffer(bestOfferLeftId, bestOfferArrayLeft);
// seacrhBestOffer(bestOfferRightId, bestOfferArrayRight);

// const productSliderWrap = document.querySelectorAll(".product__slider");
// const oldCost = document.querySelector(".total-cost__old-cost");
// const newCost = document.querySelector(".total-cost__new-cost");

// const customOffer = [];
// customOffer[0] = bestOfferArrayLeft[0];
// customOffer[1] = bestOfferArrayRight[0];

// const renderOfferItems = (arr, num, current) => {
//   let currentSlide = 0;
//   let number = !isNaN(num);
//   let currentOldPrice = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let newNum = number ? num : i;
//     productSliderWrap[newNum].innerHTML = "";
//     for (let j = 0; j < arr[newNum].length; j++) {
//       let obj = arr[newNum][j];

//       productSliderWrap[newNum].innerHTML += `
//       <div class="product__slider-item product-item ${
//         obj.hasNew ? "product-item--new" : ""
//       } ${
//         j !== (!isNaN(current) ? current : currentSlide)
//           ? "product__slider-item--hide"
//           : ""
//       }" >
//       <a href="item.html" data-id=${obj.id}>
//         <div class="product-item__image">
//           <img src="${obj.thumbnail}" alt="${obj.title}">
//         </div>
//         <div class="product-item__desc">
//           <div class="product-item__title">${obj.title}</div>
//         </div>
//       </a>
//       <div class='price__wrap'>
//         ${
//           obj.price === obj.discountedPrice || obj.discountedPrice === null
//             ? `<div class="product-item__price" data-price="${obj.price.toFixed(
//                 2
//               )}">£${obj.price.toFixed(2)}</div>`
//             : `<div class="product-item__price-old" data-price="${obj.price.toFixed(
//                 2
//               )}">£${obj.price.toFixed(2)}</div>
//           <div class="product-item__price" data-price="${obj.discountedPrice.toFixed(
//             2
//           )}">£${obj.discountedPrice.toFixed(2)}</div>`
//         }   
//       </div>
      
//     </div>`;
//     }

//     const productItem = productSliderWrap[i].querySelectorAll(
//       ".product__slider-item"
//     );
//     const btnBuy = document.querySelector(".best-offer__btn-add");

//     for (let d = 0; d < productItem.length; d++) {
//       if (!productItem[d].classList.contains("product__slider-item--hide")) {
//         currentOldPrice += +productItem[d]
//           .querySelector(".product-item__price")
//           .innerHTML.slice(1);
//       }
//     }

//     btnBuy.addEventListener("click", () => {
//       localStorage.setItem("offer", JSON.stringify(customOffer));
//       let itemsLocal = JSON.parse(localStorage.getItem("offer"));
//       let itemsOther = JSON.parse(localStorage.getItem("items"));
//       let bag = document.querySelector(".bag-amount");
//       let bagPrice = document.querySelector(".bag-price");

//       let itemsPrice = 0;

//       function bagPriceRender(items) {
//         if (items) {
//           items.map(item => {
//             item.discountedPrice
//               ? (itemsPrice += item.discountedPrice)
//               : (itemsPrice += item.price);
//           });
//         }
//       }
//       bagPriceRender(itemsLocal);
//       bagPriceRender(itemsOther);

//       if (itemsLocal && itemsLocal.length === 2) {
//         bagPrice.innerHTML = `£${(itemsPrice - 15).toFixed(2)}`;
//       } else {
//         bagPrice.innerHTML = `£${itemsPrice.toFixed(2)}`;
//       }
//       bag.innerHTML = `${itemsLocal.length + itemsOther.length}`;
//     });
//   }

//   const itemsLink = document.querySelectorAll(".product__slider-item a");

//   for (let i = 0; i < itemsLink.length; i++) {
//     itemsLink[i].addEventListener("click", () => {
//       let currentItemId = itemsLink[i].getAttribute("data-id");
//       localStorage.setItem("item", JSON.stringify(currentItemId));
//     });
//   }

//   oldCost.innerHTML = `£${currentOldPrice.toFixed(2)}`;
//   newCost.innerHTML = `£${(currentOldPrice - bestOffer.discount).toFixed(2)}`;
// };

// renderOfferItems([bestOfferArrayLeft, bestOfferArrayRight]);

// let currArr = [0, 0];

// const slider = () => {
//   const buttonSilderUp = document.querySelectorAll(".product-item__btn-up");
//   const buttonSilderDown = document.querySelectorAll(".product-item__btn-down");

//   for (let i = 0; i < productSliderWrap.length; i++) {
//     productSliderWrap[i].innerHTML === "";
//     let slides = productSliderWrap[i].querySelectorAll(".product__slider-item");

//     function nextSlide() {
//       goToSlide(currArr[i] + 1);
//     }

//     function previousSlide() {
//       goToSlide(currArr[i] - 1);
//     }

//     function goToSlide(n) {
//       currArr[i] = (n + slides.length) % slides.length;
//     }

//     function slideInfo(num, func) {
//       let number = num;
//       func();
//       const offterArray = [bestOfferArrayLeft, bestOfferArrayRight];
//       customOffer[number] = offterArray[number][currArr[i]];
//       renderOfferItems(offterArray, number, currArr[i]);
//     }

//     buttonSilderUp[i].addEventListener("click", () => {
//       slideInfo(i, nextSlide);
//     });

//     buttonSilderDown[i].addEventListener("click", () => {
//       slideInfo(i, previousSlide);
//     });
//   }
// };

// slider();
var catalog = window.catalog;
var bestOffer = window.bestOffer;
var itemsWrap = document.querySelector(".new-arrivals__items");
var itemCatalog = catalog
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

function mediaQueryResponse() {
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
  mediaQueryResponse(mqls[i]);
  mqls[i].addListener(mediaQueryResponse);
}

function itemRender(first, second) {
  itemsWrap.innerHTML = "";
  itemCatalog.slice(first, second).forEach(function(item, id) {
    var template =
      '\n    <div class="new-arrivals__item product-item ' +
      (item.hasNew ? "product-item--new" : "") +
      '">\n      <a href="item.html" data-id=' +
      item.id +
      '>\n        <div class="product-item__image">\n          <img src="' +
      item.thumbnail +
      '" alt="only-skinny-jeans">\n        </div>\n        <div class="product-item__desc">\n          <div class="product-item__title">' +
      item.title +
      '</div>\n        </div>\n      </a>\n      <div class="price__wrap">\n      ' +
      (item.price === item.discountedPrice || item.discountedPrice === null
        ? '<div class="product-item__price" data-price="' +
          item.price.toFixed(2) +
          '">\xA3' +
          item.price.toFixed(2) +
          "</div>"
        : '<div class="product-item__price-old" data-price="' +
          item.price.toFixed(2) +
          '">\xA3' +
          item.price.toFixed(2) +
          '</div>\n        <div class="product-item__price" data-price="' +
          item.discountedPrice.toFixed(2) +
          '">\xA3' +
          item.discountedPrice.toFixed(2) +
          "</div>") +
      " \n      </div>\n    </div>";
    itemsWrap.innerHTML += template;
  });
  var itemBlock = null;
  var items = document.querySelectorAll(".new-arrivals__items .product-item");

  for (var _i = 0; _i < items.length; _i++) {
    if (_i % second === 0) {
      itemBlock = document.createElement("div");
      itemBlock.className = "new-arrivals__block";
      itemsWrap.appendChild(itemBlock);
    }

    itemBlock.appendChild(items[_i]);
  }
}

var bestOfferLeftId = bestOffer.left;
var bestOfferRightId = bestOffer.right;
var bestOfferDiscount = bestOffer.discount;
var bestOfferArrayLeft = [];
var bestOfferArrayRight = [];

function seacrhBestOffer(arr, recordArr) {
  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    for (var k = 0; k < catalog.length; k++) {
      if (catalog[k].id === arr[_i2]) {
        recordArr.push(catalog[k]);
      }
    }
  }
}

seacrhBestOffer(bestOfferLeftId, bestOfferArrayLeft);
seacrhBestOffer(bestOfferRightId, bestOfferArrayRight);
var productSliderWrap = document.querySelectorAll(".product__slider");
var oldCost = document.querySelector(".total-cost__old-cost");
var newCost = document.querySelector(".total-cost__new-cost");
var customOffer = [];
customOffer[0] = bestOfferArrayLeft[0];
customOffer[1] = bestOfferArrayRight[0];

var renderOfferItems = function renderOfferItems(arr, num, current) {
  var currentSlide = 0;
  var number = !isNaN(num);
  var currentOldPrice = 0;

  for (var _i3 = 0; _i3 < arr.length; _i3++) {
    var newNum = number ? num : _i3;
    productSliderWrap[newNum].innerHTML = "";

    for (var j = 0; j < arr[newNum].length; j++) {
      var obj = arr[newNum][j];
      productSliderWrap[newNum].innerHTML +=
        '\n      <div class="product__slider-item product-item ' +
        (obj.hasNew ? "product-item--new" : "") +
        " " +
        (j !== (!isNaN(current) ? current : currentSlide)
          ? "product__slider-item--hide"
          : "") +
        '" >\n      <a href="item.html" data-id=' +
        obj.id +
        '>\n        <div class="product-item__image">\n          <img src="' +
        obj.thumbnail +
        '" alt="' +
        obj.title +
        '">\n        </div>\n        <div class="product-item__desc">\n          <div class="product-item__title">' +
        obj.title +
        "</div>\n        </div>\n      </a>\n      <div class='price__wrap'>\n        " +
        (obj.price === obj.discountedPrice || obj.discountedPrice === null
          ? '<div class="product-item__price" data-price="' +
            obj.price.toFixed(2) +
            '">\xA3' +
            obj.price.toFixed(2) +
            "</div>"
          : '<div class="product-item__price-old" data-price="' +
            obj.price.toFixed(2) +
            '">\xA3' +
            obj.price.toFixed(2) +
            '</div>\n          <div class="product-item__price" data-price="' +
            obj.discountedPrice.toFixed(2) +
            '">\xA3' +
            obj.discountedPrice.toFixed(2) +
            "</div>") +
        "   \n      </div>\n      \n    </div>";
    }

    var productItem = productSliderWrap[_i3].querySelectorAll(
      ".product__slider-item"
    );

    var btnBuy = document.querySelector(".best-offer__btn-add");

    for (var d = 0; d < productItem.length; d++) {
      if (!productItem[d].classList.contains("product__slider-item--hide")) {
        currentOldPrice += +productItem[d]
          .querySelector(".product-item__price")
          .innerHTML.slice(1);
      }
    }

    btnBuy.addEventListener("click", function() {
      localStorage.setItem("offer", JSON.stringify(customOffer));
      var itemsLocal = JSON.parse(localStorage.getItem("offer"));
      var itemsOther = JSON.parse(localStorage.getItem("items"));
      var bag = document.querySelector(".bag-amount");
      var bagPrice = document.querySelector(".bag-price");
      var itemsPrice = 0;

      function bagPriceRender(items) {
        if (items) {
          items.map(function(item) {
            item.discountedPrice
              ? (itemsPrice += item.discountedPrice)
              : (itemsPrice += item.price);
          });
        }
      }

      bagPriceRender(itemsLocal);
      bagPriceRender(itemsOther);

      if (itemsLocal && itemsLocal.length === 2) {
        bagPrice.innerHTML = "\xA3" + (itemsPrice - 15).toFixed(2);
      } else {
        bagPrice.innerHTML = "\xA3" + itemsPrice.toFixed(2);
      }

      bag.innerHTML = "" + (itemsLocal.length + itemsOther.length);
    });
  }

  var itemsLink = document.querySelectorAll(".product__slider-item a");

  var _loop = function _loop(_i4) {
    itemsLink[_i4].addEventListener("click", function() {
      var currentItemId = itemsLink[_i4].getAttribute("data-id");

      localStorage.setItem("item", JSON.stringify(currentItemId));
    });
  };

  for (var _i4 = 0; _i4 < itemsLink.length; _i4++) {
    _loop(_i4);
  }

  oldCost.innerHTML = "\xA3" + currentOldPrice.toFixed(2);
  newCost.innerHTML =
    "\xA3" + (currentOldPrice - bestOffer.discount).toFixed(2);
};

renderOfferItems([bestOfferArrayLeft, bestOfferArrayRight]);
var currArr = [0, 0];

var slider = function slider() {
  var buttonSilderUp = document.querySelectorAll(".product-item__btn-up");
  var buttonSilderDown = document.querySelectorAll(".product-item__btn-down");

  var _loop2 = function _loop2(_i5) {
    productSliderWrap[_i5].innerHTML === "";

    var slides = productSliderWrap[_i5].querySelectorAll(
      ".product__slider-item"
    );

    function nextSlide() {
      goToSlide(currArr[_i5] + 1);
    }

    function previousSlide() {
      goToSlide(currArr[_i5] - 1);
    }

    function goToSlide(n) {
      currArr[_i5] = (n + slides.length) % slides.length;
    }

    function slideInfo(num, func) {
      var number = num;
      func();
      var offterArray = [bestOfferArrayLeft, bestOfferArrayRight];
      customOffer[number] = offterArray[number][currArr[_i5]];
      renderOfferItems(offterArray, number, currArr[_i5]);
    }

    buttonSilderUp[_i5].addEventListener("click", function() {
      slideInfo(_i5, nextSlide);
    });

    buttonSilderDown[_i5].addEventListener("click", function() {
      slideInfo(_i5, previousSlide);
    });
  };

  for (var _i5 = 0; _i5 < productSliderWrap.length; _i5++) {
    _loop2(_i5);
  }
};

slider();
