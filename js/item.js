function itemRender() {
  const catalog = window.catalog;
  const sectionBack = document.querySelector(".section-back");
  let item;

  currentItem = catalog.filter(i => {
    i.id === JSON.parse(localStorage.getItem("item")) ? (item = i) : "";
  });

  console.log(item.preview);

  let template = `
      <div class="full-item">
        <div class="container">
          <div class="full-item__wrap">
            <div class="full-item__images">
                ${item.preview
                  .map((element, id) => {
                    return `<div class="full-image">
                    <img src=${element} alt="${item.title} ${id}">
                  </div>`;
                  })
                  .join("")}
                
              <div class="full-item__thumbnail">
              ${item.preview
                .map((element, id) => {
                  return `<div class="thumbnail">
                  <img src=${element} alt="${item.title} ${id}">
                </div>`;
                })
                .join("")}  
              </div>
            </div>
            <div class="full-item__info">
              <div class="full-item__title">${item.title}</div>
              <p class="full-item__desc">${item.description ? item.description : 'No description'}</p>
              <p class="full-item__price">£${item.price.toFixed(2)}</p>
              <div class="full-item__sizes full-item__blocks">
                <span class="name">Size:</span>
                ${item.sizes
                  .map((element, id) => {
                    return `<div class="full-item__size full-item__block  ${
                      id === 0 ? "full-item--active" : ""
                    }">${element}</div>`;
                  })
                  .join("")}
              </div>
              <div class="full-item__colors full-item__blocks">
                <span class="name">Color:</span>
                ${item.colors
                  .map((element, id) => {
                    return `<div class="full-item__color full-item__block  ${
                      id === 0 ? "full-item--active" : ""
                    }">${element}</div>`;
                  })
                  .join("")}
              </div>
              <button class="full-item__add-btn main-btn">Add to bag</button>
            </div>
          </div>
        </div>
      </div>`;

  sectionBack.insertAdjacentHTML("afterend", template);
}

itemRender();

const dots = document.querySelectorAll(".thumbnail");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    currentSlide(i + 1);
  });
}

let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".full-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("full-image--hide");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("thumbnail--active");
  }

  slides[slideIndex - 1].classList.remove("full-image--hide");
  dots[slideIndex - 1].classList.add("thumbnail--active");
}
