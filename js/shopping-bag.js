// function bagItemRender() {
//   const itemsWrap = document.querySelector(".bag-items__wrap");
//   let offerItems = JSON.parse(localStorage.getItem("offer"));
//   let otherItems = JSON.parse(localStorage.getItem("items"));

//   const priceDiscountWrap = document.querySelector(".checkout__price-discount");
//   let priceDiscount = document.querySelector(".checkout__price-discount span");

//   let discount;

//   !offerItems ? (offerItems = []) : offerItems;
//   !otherItems ? (otherItems = []) : otherItems;

//   if (offerItems.length === 2) {
//     discount = window.bestOffer.discount;
//     priceDiscountWrap.classList.remove("hide");
//   } else {
//     discount = 0;
//     priceDiscountWrap.classList.add("hide");
//   }

//   let allItems = offerItems.concat(otherItems);

//   itemsWrap.innerHTML = "";

//   if (allItems) {
//     itemsWrap.innerHTML += allItems
//       .map((item, id) => {
//         return `<div class="bag-items__item ${
//           item.hasNew ? "product-item--new" : ""
//         }">
//       <a href="item.html" data-id=${item.id}>
//         <div class="bag-items__image product-item__image">
//           <img src=${item.thumbnail} alt=${item.title}>
//         </div>
//       </a>
//       <div class="bag-items__info">
//       <div class="bag-items__info-wrap">
//         <div class="bag-items__title product-item__title">${item.title}</div>
//         <div class="bag-items__price">£${(
//           item.discountedPrice || item.price
//         ).toFixed(2)}</div>
//         <div class="bag-items__custom-wrap">
//           <div class="bag-items__color">Color: ${
//             Array.isArray(item.colors) ? item.colors[0] : item.colors
//           }</div>
//           <div class="bag-items__size">Size:  ${
//             Array.isArray(item.sizes) ? item.sizes[0] : item.sizes
//           }</div>
//           <div class="bag-items__quantity">Quantity:
//             <button class="bag-items__quantity-btn minus-btn"></button>
//             <span>1</span>
//             <button class="bag-items__quantity-btn plus-btn"></button>
//           </div>
//         </div>
//         <button class="bag-items__btn-remove" data-id=${id}>Remove item</button>
//       </div>
//       </div>
//     </div>`;
//       })
//       .join("");
//   }

//   let priceTotal = document.querySelector(".checkout__price-total span");
//   let bag = document.querySelector(".bag-amount");
//   let bagPrice = document.querySelector(".bag-price");

//   priceDiscount.innerHTML = ` £${discount.toFixed(2)}`;

//   let totalPrice = 0;
//   allItems.map(item => {
//     item.discountedPrice
//       ? (totalPrice += item.discountedPrice)
//       : (totalPrice += item.price);
//   });

//   priceTotal.innerHTML = `£${(totalPrice - discount).toFixed(2)}`;

//   const emptyBag = document.querySelector(".checkout__empty-bag");
//   emptyBag.addEventListener("click", () => {
//     localStorage.setItem("items", JSON.stringify([]));
//     localStorage.setItem("offer", JSON.stringify([]));
//     bagItemRender();
//     bag.innerHTML = 0;
//     bagPrice.innerHTML = "";
//   });
// }

// bagItemRender();
function bagItemRender() {
  var itemsWrap = document.querySelector(".bag-items__wrap");
  var offerItems = JSON.parse(localStorage.getItem("offer"));
  var otherItems = JSON.parse(localStorage.getItem("items"));
  var priceDiscountWrap = document.querySelector(".checkout__price-discount");
  var priceDiscount = document.querySelector(".checkout__price-discount span");
  var discount;
  !offerItems ? (offerItems = []) : offerItems;
  !otherItems ? (otherItems = []) : otherItems;

  if (offerItems.length === 2) {
    discount = window.bestOffer.discount;
    priceDiscountWrap.classList.remove("hide");
  } else {
    discount = 0;
    priceDiscountWrap.classList.add("hide");
  }

  var allItems = offerItems.concat(otherItems);
  itemsWrap.innerHTML = "";

  if (allItems) {
    itemsWrap.innerHTML += allItems
      .map(function(item, id) {
        return (
          '<div class="bag-items__item ' +
          (item.hasNew ? "product-item--new" : "") +
          '">\n      <a href="item.html" data-id=' +
          item.id +
          '>\n        <div class="bag-items__image product-item__image">\n          <img src=' +
          item.thumbnail +
          " alt=" +
          item.title +
          '>\n        </div>\n      </a>\n      <div class="bag-items__info">\n      <div class="bag-items__info-wrap">\n        <div class="bag-items__title product-item__title">' +
          item.title +
          '</div>\n        <div class="bag-items__price">\xA3' +
          (item.discountedPrice || item.price).toFixed(2) +
          '</div>\n        <div class="bag-items__custom-wrap">\n          <div class="bag-items__color">Color: ' +
          (Array.isArray(item.colors) ? item.colors[0] : item.colors) +
          '</div>\n          <div class="bag-items__size">Size:  ' +
          (Array.isArray(item.sizes) ? item.sizes[0] : item.sizes) +
          '</div>\n          <div class="bag-items__quantity">Quantity:\n            <button class="bag-items__quantity-btn minus-btn"></button>\n            <span>1</span>\n            <button class="bag-items__quantity-btn plus-btn"></button>\n          </div>\n        </div>\n        <button class="bag-items__btn-remove" data-id=' +
          id +
          ">Remove item</button>\n      </div>\n      </div>\n    </div>"
        );
      })
      .join("");
  }

  var priceTotal = document.querySelector(".checkout__price-total span");
  var bag = document.querySelector(".bag-amount");
  var bagPrice = document.querySelector(".bag-price");
  priceDiscount.innerHTML = " \xA3" + discount.toFixed(2);
  var totalPrice = 0;
  allItems.map(function(item) {
    item.discountedPrice
      ? (totalPrice += item.discountedPrice)
      : (totalPrice += item.price);
  });
  priceTotal.innerHTML = "\xA3" + (totalPrice - discount).toFixed(2);
  var emptyBag = document.querySelector(".checkout__empty-bag");
  emptyBag.addEventListener("click", function() {
    localStorage.setItem("items", JSON.stringify([]));
    localStorage.setItem("offer", JSON.stringify([]));
    bagItemRender();
    bag.innerHTML = 0;
    bagPrice.innerHTML = "";
  });
}

bagItemRender();
