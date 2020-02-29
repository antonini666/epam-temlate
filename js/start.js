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
      <div class="product-item__price">£${item.price}</div>
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

const itemsContainer = document.querySelectorAll(".items__container");

const renderOfferItems = (number, arr) => {
  for (let j = 0; j < arr.length; j++) {
    itemsContainer[
      number
    ].innerHTML += `<div class="best-offer__item product-item ${
      arr[j].hasNew ? "product-item--new" : ""
    } ${j !== 0 ? "best-offer__item--hide" : ""}">
      <button class="product-item__btn-up btn-arrow">
        <img class="btn-up" src="img/btn-sort.svg" alt="">
      </button>
      <a href="item.html">
        <div class="product-item__image">
          <img src="${arr[j].thumbnail}" alt="${arr[j].title}">
        </div>
        <div class="product-item__desc">
          <div class="product-item__title">${arr[j].title}</div>
        </div>
      </a>
      <div class="product-item__price" data-price="${arr[j].price}">£${arr[j].price}</div>
      <button class="product-item__btn-down btn-arrow">
        <img class="btn-down" src="img/btn-sort.svg" alt="">
      </button>
    </div>`;
  }
};

renderOfferItems(0, bestOfferArrayLeft);
renderOfferItems(1, bestOfferArrayRight);

const upButton = document.querySelectorAll(".product-item__btn-up");
const downButton = document.querySelectorAll(".product-item__btn-down");


