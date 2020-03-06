// document.addEventListener("DOMContentLoaded", itemRender());

// function itemRender() {
//   const catalog = window.catalog;
//   const sectionBack = document.querySelector(".section-back");
//   let item;
//   catalog.filter(i => {
//     i.id === JSON.parse(localStorage.getItem("item")) ? (item = i) : "";
//   });

//   let template = `
//       <div class="full-item">
//         <div class="container">
//           <div class="full-item__wrap">
//             <div class="full-item__images">
//                 ${item.preview
//                   .map((element, id) => {
//                     return `<div class="full-image">
//                     <img src=${element} alt="${item.title} ${id}">
//                   </div>`;
//                   })
//                   .join("")}
                
//               <div class="full-item__thumbnail">
//               ${item.preview
//                 .map((element, id) => {
//                   return `<div class="thumbnail">
//                   <img src=${element} alt="${item.title} ${id}">
//                 </div>`;
//                 })
//                 .join("")}  
//               </div>
//             </div>
//             <div class="full-item__info">
//               <div class="full-item__title">${item.title}</div>
//               <div class="full-item__flex">
//                 <p class="full-item__desc">${
//                   item.description ? item.description : "No description"
//                 }</p>
//                 <p class="full-item__price">£${item.price.toFixed(2)}</p>
//               </div>
//               <div class="full-item__sizes full-item__blocks">
//                 <span class="name">Size:</span>
//                 ${item.sizes
//                   .map((element, id) => {
//                     return `<div class="full-item__size full-item__block  ${
//                       id === 0 ? "full-item--active" : ""
//                     }" data-size="${element}">${element}</div>`;
//                   })
//                   .join("")}
//               </div>
//               <div class="full-item__colors full-item__blocks">
//                 <span class="name">Color:</span>
//                 ${item.colors
//                   .map((element, id) => {
//                     return `<div class="full-item__color full-item__block  ${
//                       id === 0 ? "full-item--active" : ""
//                     }" data-color="${element}">${element}</div>`;
//                   })
//                   .join("")}
//               </div>
//               <button class="full-item__add-btn main-btn" data-id=${
//                 item.id
//               }>Add to bag</button>
//             </div>
//           </div>
//         </div>
//       </div>`;

//   sectionBack.insertAdjacentHTML("afterend", template);

//   const addButton = document.querySelector(".full-item__add-btn");
//   const sizes = document.querySelectorAll(".full-item__size");
//   const colors = document.querySelectorAll(".full-item__color");

//   let currentColor;
//   let currentSize;

//   for (let i = 0; i < sizes.length; i++) {
//     currentSize = sizes[0].getAttribute("data-size");
//     sizes[i].addEventListener("click", () => {
//       for (let j = 0; j < sizes.length; j++) {
//         sizes[j].classList.remove("full-item--active");
//       }
//       currentSize = sizes[i].getAttribute("data-size");
//       sizes[i].classList.add("full-item--active");
//     });
//   }

//   for (let i = 0; i < colors.length; i++) {
//     currentColor = colors[0].getAttribute("data-color");
//     colors[i].addEventListener("click", () => {
//       for (let j = 0; j < colors.length; j++) {
//         colors[j].classList.remove("full-item--active");
//       }
//       currentColor = colors[i].getAttribute("data-color");
//       colors[i].classList.add("full-item--active");
//     });
//   }

//   let currentItems = JSON.parse(localStorage.getItem("items"));

//   currentItems ? currentItems : (currentItems = []);

//   addButton.addEventListener("click", () => {
//     item.colors = currentColor;
//     item.sizes = currentSize;

//     currentItems.push(item);
//     localStorage.setItem("items", JSON.stringify(currentItems));
//     let itemsOffer = JSON.parse(localStorage.getItem("offer"));
//     let itemsOther = JSON.parse(localStorage.getItem("items"));
//     let bag = document.querySelector(".bag-amount");
//     let bagPrice = document.querySelector(".bag-price");

//     let itemsPrice = 0;

//     function bagPriceRender(items) {
//       if (items) {
//         items.map(item => {
//           item.discountedPrice
//             ? (itemsPrice += item.discountedPrice)
//             : (itemsPrice += item.price);
//         });
//       }
//     }
//     bagPriceRender(itemsOffer);
//     bagPriceRender(itemsOther);

//     if (itemsOffer && itemsOffer.length === 2) {
//       bagPrice.innerHTML = `£${(itemsPrice - 15).toFixed(2)}`;
//     } else {
//       bagPrice.innerHTML = `£${itemsPrice.toFixed(2)}`;
//     }
//     bag.innerHTML = +bag.innerHTML + 1;
//   });
// }

// const dots = document.querySelectorAll(".thumbnail");

// for (let i = 0; i < dots.length; i++) {
//   dots[i].addEventListener("click", () => {
//     currentSlide(i + 1);
//   });
// }

// let slideIndex = 1;

// showSlides(slideIndex);

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let slides = document.querySelectorAll(".full-image");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.add("full-image--hide");
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("thumbnail--active");
//   }

//   slides[slideIndex - 1].classList.remove("full-image--hide");
//   dots[slideIndex - 1].classList.add("thumbnail--active");
// }

document.addEventListener("DOMContentLoaded", itemRender());

function itemRender() {
  var catalog = window.catalog;
  var sectionBack = document.querySelector(".section-back");
  var item;
  catalog.filter(function(i) {
    i.id === JSON.parse(localStorage.getItem("item")) ? (item = i) : "";
  });
  var template =
    '\n      <div class="full-item">\n        <div class="container">\n          <div class="full-item__wrap">\n            <div class="full-item__images">\n                ' +
    item.preview
      .map(function(element, id) {
        return (
          '<div class="full-image">\n                    <img src=' +
          element +
          ' alt="' +
          item.title +
          " " +
          id +
          '">\n                  </div>'
        );
      })
      .join("") +
    '\n                \n              <div class="full-item__thumbnail">\n              ' +
    item.preview
      .map(function(element, id) {
        return (
          '<div class="thumbnail">\n                  <img src=' +
          element +
          ' alt="' +
          item.title +
          " " +
          id +
          '">\n                </div>'
        );
      })
      .join("") +
    '  \n              </div>\n            </div>\n            <div class="full-item__info">\n              <div class="full-item__title">' +
    item.title +
    '</div>\n              <div class="full-item__flex">\n                <p class="full-item__desc">' +
    (item.description ? item.description : "No description") +
    '</p>\n                <p class="full-item__price">\xA3' +
    item.price.toFixed(2) +
    '</p>\n              </div>\n              <div class="full-item__sizes full-item__blocks">\n                <span class="name">Size:</span>\n                ' +
    item.sizes
      .map(function(element, id) {
        return (
          '<div class="full-item__size full-item__block  ' +
          (id === 0 ? "full-item--active" : "") +
          '" data-size="' +
          element +
          '">' +
          element +
          "</div>"
        );
      })
      .join("") +
    '\n              </div>\n              <div class="full-item__colors full-item__blocks">\n                <span class="name">Color:</span>\n                ' +
    item.colors
      .map(function(element, id) {
        return (
          '<div class="full-item__color full-item__block  ' +
          (id === 0 ? "full-item--active" : "") +
          '" data-color="' +
          element +
          '">' +
          element +
          "</div>"
        );
      })
      .join("") +
    '\n              </div>\n              <button class="full-item__add-btn main-btn" data-id=' +
    item.id +
    ">Add to bag</button>\n            </div>\n          </div>\n        </div>\n      </div>";
  sectionBack.insertAdjacentHTML("afterend", template);
  var addButton = document.querySelector(".full-item__add-btn");
  var sizes = document.querySelectorAll(".full-item__size");
  var colors = document.querySelectorAll(".full-item__color");
  var currentColor;
  var currentSize;

  var _loop = function _loop(i) {
    currentSize = sizes[0].getAttribute("data-size");
    sizes[i].addEventListener("click", function() {
      for (var j = 0; j < sizes.length; j++) {
        sizes[j].classList.remove("full-item--active");
      }

      currentSize = sizes[i].getAttribute("data-size");
      sizes[i].classList.add("full-item--active");
    });
  };

  for (var i = 0; i < sizes.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    currentColor = colors[0].getAttribute("data-color");

    colors[_i].addEventListener("click", function() {
      for (var j = 0; j < colors.length; j++) {
        colors[j].classList.remove("full-item--active");
      }

      currentColor = colors[_i].getAttribute("data-color");

      colors[_i].classList.add("full-item--active");
    });
  };

  for (var _i = 0; _i < colors.length; _i++) {
    _loop2(_i);
  }

  var currentItems = JSON.parse(localStorage.getItem("items"));
  currentItems ? currentItems : (currentItems = []);
  addButton.addEventListener("click", function() {
    item.colors = currentColor;
    item.sizes = currentSize;
    currentItems.push(item);
    localStorage.setItem("items", JSON.stringify(currentItems));
    var itemsOffer = JSON.parse(localStorage.getItem("offer"));
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

    bagPriceRender(itemsOffer);
    bagPriceRender(itemsOther);

    if (itemsOffer && itemsOffer.length === 2) {
      bagPrice.innerHTML = "\xA3" + (itemsPrice - 15).toFixed(2);
    } else {
      bagPrice.innerHTML = "\xA3" + itemsPrice.toFixed(2);
    }

    bag.innerHTML = +bag.innerHTML + 1;
  });
}

var dots = document.querySelectorAll(".thumbnail");

var _loop3 = function _loop3(i) {
  dots[i].addEventListener("click", function() {
    currentSlide(i + 1);
  });
};

for (var i = 0; i < dots.length; i++) {
  _loop3(i);
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.querySelectorAll(".full-image");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var _i2 = 0; _i2 < slides.length; _i2++) {
    slides[_i2].classList.add("full-image--hide");
  }

  for (var _i3 = 0; _i3 < dots.length; _i3++) {
    dots[_i3].classList.remove("thumbnail--active");
  }

  slides[slideIndex - 1].classList.remove("full-image--hide");
  dots[slideIndex - 1].classList.add("thumbnail--active");
}
