const catalog = window.catalog;
const bestOffer = window.bestOffer;
const itemsWrap = document.querySelector(".new-arrivals__items");
const logo = document.querySelector(".logo");

const itemCatalog = catalog
  .filter(item => {
    return item.category === "women" && item.fashion === "Casual style";
  })
  .sort((data1, data2) => {
    return new Date(data2.dateAdded) - new Date(data1.dateAdded);
  });

const mqls = [
  window.matchMedia("(max-width: 768px)"),
  window.matchMedia("(max-width: 1024px)")
];

function mediaqueryresponse() {
  if (mqls[0].matches) {
    itemRender(0, 2);
    logo.innerHTML = "TL";
  } else if (mqls[1].matches) {
    itemRender(0, 3);
    logo.innerHTML = "Template";
  }
  if (!mqls[0].matches && !mqls[1].matches) {
    itemRender(0, 4);
    logo.innerHTML = "Template";
  }
}

for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addListener(mediaqueryresponse);
}

function itemRender(first, second) {
  itemsWrap.innerHTML = "";

  itemCatalog.slice(first, second).forEach((item, id) => {
    let template = `
    <div class="new-arrivals__item product-item ${
      item.hasNew ? "product-item--new" : ""
    }">
      <a href="item.html">
        <div class="product-item__image">
          <img src="${item.thumbnail}" alt="only-skinny-jeans">
        </div>
        <div class="product-item__desc">
          <div class="product-item__title">${item.title}</div>
        </div>
      </a>
      <div class="price__wrap">
      ${
        item.price === item.discountedPrice || item.discountedPrice === null
          ? `<div class="product-item__price" data-price="${item.price.toFixed(
              2
            )}">£${item.price.toFixed(2)}</div>`
          : `<div class="product-item__price-old" data-price="${item.price.toFixed(
              2
            )}">£${item.price.toFixed(2)}</div>
        <div class="product-item__price" data-price="${item.discountedPrice.toFixed(
          2
        )}">£${item.discountedPrice.toFixed(2)}</div>`
      } 
      </div>
    </div>`;

    itemsWrap.innerHTML += template;
  });

  let itemBlock = null;

  let items = document.querySelectorAll(".new-arrivals__items .product-item");

  for (let i = 0; i < items.length; i++) {
    if (i % second === 0) {
      itemBlock = document.createElement("div");
      itemBlock.className = "new-arrivals__block";
      itemsWrap.appendChild(itemBlock);
    }

    itemBlock.appendChild(items[i]);
  }
}

const bestOfferLeftId = bestOffer.left;
const bestOfferRightId = bestOffer.right;
const bestOfferDiscount = bestOffer.discount;

const bestOfferArrayLeft = [];
const bestOfferArrayRight = [];

function seacrhBestOffer(arr, recordArr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < catalog.length; k++) {
      if (catalog[k].id === arr[i]) {
        recordArr.push(catalog[k]);
      }
    }
  }
}

seacrhBestOffer(bestOfferLeftId, bestOfferArrayLeft);
seacrhBestOffer(bestOfferRightId, bestOfferArrayRight);

//////////////////////////////////////////////////////////////

const productSliderWrap = document.querySelectorAll(".product__slider");
const oldCost = document.querySelector(".total-cost__old-cost");
const newCost = document.querySelector(".total-cost__new-cost");

const renderOfferItems = (arr, num, current) => {
  let currentSlide = 0;
  let number = !isNaN(num);
  let currentOldPrice = 0;
  for (let i = 0; i < arr.length; i++) {
    let newNum = number ? num : i;
    productSliderWrap[newNum].innerHTML = "";
    for (let j = 0; j < arr[newNum].length; j++) {
      let obj = arr[newNum][j];
      productSliderWrap[newNum].innerHTML += `
      <div class="product__slider-item product-item ${
        obj.hasNew ? "product-item--new" : ""
      } ${
        j !== (!isNaN(current) ? current : currentSlide)
          ? "product__slider-item--hide"
          : ""
      }">
      <a href="item.html">
        <div class="product-item__image">
          <img src="${obj.thumbnail}" alt="${obj.title}">
        </div>
        <div class="product-item__desc">
          <div class="product-item__title">${obj.title}</div>
        </div>
      </a>
      <div class='price__wrap'>
        ${
          obj.price === obj.discountedPrice || obj.discountedPrice === null
            ? `<div class="product-item__price" data-price="${obj.price.toFixed(
                2
              )}">£${obj.price.toFixed(2)}</div>`
            : `<div class="product-item__price-old" data-price="${obj.price.toFixed(
                2
              )}">£${obj.price.toFixed(2)}</div>
          <div class="product-item__price" data-price="${obj.discountedPrice.toFixed(
            2
          )}">£${obj.discountedPrice.toFixed(2)}</div>`
        }   
      </div>
      
    </div>`;
    }

    let productItem = productSliderWrap[i].querySelectorAll(
      ".product__slider-item"
    );

    for (let d = 0; d < productItem.length; d++) {
      if (!productItem[d].classList.contains("product__slider-item--hide")) {
        currentOldPrice += +productItem[d]
          .querySelector(".product-item__price")
          .innerHTML.slice(1);
      }
    }
  }

  oldCost.innerHTML = `£${currentOldPrice.toFixed(2)}`;
  newCost.innerHTML = `£${(currentOldPrice - bestOffer.discount).toFixed(2)}`;
};

renderOfferItems([bestOfferArrayLeft, bestOfferArrayRight]);

let currArr = [0, 0];

const slider = () => {
  const buttonSilderUp = document.querySelectorAll(".product-item__btn-up");
  const buttonSilderDown = document.querySelectorAll(".product-item__btn-down");

  for (let i = 0; i < productSliderWrap.length; i++) {
    productSliderWrap[i].innerHTML === "";
    let slides = productSliderWrap[i].querySelectorAll(".product__slider-item");

    function nextSlide() {
      goToSlide(currArr[i] + 1);
    }

    function previousSlide() {
      goToSlide(currArr[i] - 1);
    }

    function goToSlide(n) {
      currArr[i] = (n + slides.length) % slides.length;
    }

    buttonSilderUp[i].addEventListener("click", () => {
      let number = i;
      nextSlide();
      renderOfferItems(
        [bestOfferArrayLeft, bestOfferArrayRight],
        number,
        currArr[i]
      );
    });

    buttonSilderDown[i].addEventListener("click", () => {
      let number = i;
      previousSlide();
      renderOfferItems(
        [bestOfferArrayLeft, bestOfferArrayRight],
        number,
        currArr[i]
      );
    });
  }
};

slider();
