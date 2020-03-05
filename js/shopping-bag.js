function bagItemRender() {
  const catalog = window.catalog;
  const itemsWrap = document.querySelector(".bag-items__wrap");
  let currentId = JSON.parse(localStorage.getItem("offer"));
  let currentItems = [];

  for (let k = 0; k < currentId.length; k++) {
    catalog.filter(i => {
      i.id === currentId[k] ? currentItems.push(i) : "";
    });
  }
  
  itemsWrap.innerHTML = currentItems.map(item => {
    return `<div class="bag-items__item ${
      item.hasNew ? "product-item--new" : ""
    }">
    <a href="item.html" data-id=${item.id}>
      <div class="bag-items__image product-item__image">
        <img src=${item.thumbnail} alt=${item.title}>
      </div>
    </a>
    <div class="bag-items__info">
    <div class="bag-items__info-wrap">
      <div class="bag-items__title product-item__title">${item.title}</div>
      <div class="bag-items__price">£${(item.discountedPrice || item.price).toFixed(2)}</div>
      <div class="bag-items__custom-wrap">
        <div class="bag-items__color">Color: ${item.colors[0]}</div>
        <div class="bag-items__size">Size:  ${item.sizes[0]}</div>
        <div class="bag-items__quantity">Quantity:
          <button class="bag-items__quantity-btn minus-btn"></button>
          <span>1</span>
          <button class="bag-items__quantity-btn plus-btn"></button>
        </div>
      </div>
      <button class="bag-items__btn-remove">Remove item</button>
    </div>
    </div>
  </div>`
  }).join('')
  

}

bagItemRender();
