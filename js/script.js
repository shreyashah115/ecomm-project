const products = [
  {
    name: `MALM`,
    description: `High bed frame/2 storage boxes, Queen`,
    amount: 356,
    ratings: 4.5,
    total_ratings: `26`,
    images: [
      `img/bed-large/black.png`,
      `img/bed-mobile/black.png`,
      `img/bed-large/black-2.png`,
      `img/bed-mobile/black-2.png`,
    ],
    alt: `Black large bed with storage`,
  },
  {
    name: `HEMNES`,
    description: `Bed frame, Queen`,
    amount: 578,
    ratings: 5,
    total_ratings: `81`,
    images: [
      `img/bed-large/white.png`,
      `img/bed-mobile/white.png`,
      `img/bed-large/white-2.png`,
      `img/bed-mobile/white-2.png`,
    ],
    alt: `White bed without storage`,
  },
  {
    name: `SOMBRE`,
    description: `Upholstered bed frame, Queen`,
    amount: 159,
    ratings: 2,
    total_ratings: `6`,
    images: [
      `img/bed-large/grey.png`,
      `img/bed-mobile/grey.png`,
      `img/bed-large/grey-2.png`,
      `img/bed-mobile/grey-2.png`,
    ],
    alt: `Grey large bed with storage`,
  },
  {
    name: `KQITE`,
    description: `Bed frame, Full`,
    amount: 492,
    ratings: 4,
    total_ratings: `47`,
    images: [
      `img/bed-large/beige.png`,
      `img/bed-mobile/beige.png`,
      `img/bed-large/beige-2.png`,
      `img/bed-mobile/beige-2.png`,
    ],
    alt: `Beige large bed with storage`,
  },
  {
    name: `IOSEU`,
    description: `High bed, Twin`,
    amount: 156,
    ratings: 3.5,
    total_ratings: `9`,
    images: [
      `img/bed-large/twin-white-2.png`,
      `img/bed-mobile/twin-white-2.png`,
      `img/bed-large/twin-white.png`,
      `img/bed-mobile/twin-white.png`,
    ],
    alt: `White twin bed with storage`,
  },
  {
    name: `NIESTA`,
    description: `Metal frame bed, Twin`,
    amount: 98,
    ratings: 1,
    total_ratings: `1`,
    images: [
      `img/bed-large/metal-2.png`,
      `img/bed-mobile/metal-2.png`,
      `img/bed-large/twin-metal.png`,
      `img/bed-mobile/twin-metal.png`,
    ],
    alt: `Metal twin bed without storage`,
  },
  {
    name: `KLAIR`,
    description: `Low Profile Platform Bed, Twin`,
    amount: 234,
    ratings: 5,
    total_ratings: `89`,
    images: [
      `img/bed-large/blue-twin.png`,
      `img/bed-mobile/blue-twin.png`,
      `img/bed-large/blue-twin-2.png`,
      `img/bed-mobile/blue-twin-2.png`,
    ],
    alt: `Blue colored twin bed`,
  },
  {
    name: `BUSHWICK`,
    description: `Full bunk bed`,
    amount: 657,
    ratings: 3,
    total_ratings: `23`,
    images: [
      `img/bed-large/kids-2.png`,
      `img/bed-mobile/kids-2.png`,
      `img/bed-large/kids.png`,
      `img/bed-mobile/kids.png`,
    ],
    alt: `Kids bed with storage`,
  },
  {
    name: `ARROW`,
    description: `Twin over full bunk bed`,
    amount: 356,
    ratings: 4,
    total_ratings: `12`,
    images: [
      `img/bed-large/kids-white.png`,
      `img/bed-mobile/kids-white.png`,
      `img/bed-large/kids-white-2.png`,
      `img/bed-mobile/kids-white-2.png`,
    ],
    alt: `White colored kids bed`,
  },
];

const fullStar = `<span class="material-icons-round star-rate"> star </span>`;
const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

const getProducts = () => {
  let section = document.querySelector("#results");
  section.innerHTML = ``;
  console.log(products);
  products.forEach((product) => {
    let index = 0;
    let stars = [];

    if (Number.isInteger(product.ratings)) {
      while (index < product.ratings) {
        stars.push(fullStar);
        index++;
      }
    } else {
      while (index < Math.floor(product.ratings)) {
        stars.push(fullStar);
        index++;
      }
      stars.push(halfStar);
    }
    let starLength = stars.length;

    while (starLength < 5) {
      stars.push(starBorder);
      starLength++;
    }

    let starString = stars.join(``);
    const article = document.createElement(`article`);
    article.classList.add(`product`);
    article.innerHTML = `
  <header>
    <a href="product.html">
      <div class="image-container">
        <img
          class="product"
          srcset="
            ${product.images[0]}  1920w,
            ${product.images[0]}   960w,
            ${product.images[1]}  480w
          "
          sizes="(min-width: 1920px) 500px,
        (min-width: 800px) 500px,
        480px"
          src="${product.images[0]}"
          alt="${product.alt}"
        />
        <img
          class="product-2"
          srcset="
            ${product.images[3]} 1920w,
            ${product.images[3]}  960w
          "
          sizes="(min-width: 1920px) 500px,
          (min-width: 800px) 500px,
          480px"
          src="${product.images[3]}"
          alt="${product.alt}"
        />
      </div>
    </a>

    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <data value="${product.amount}"><strong>$${product.amount}.00</strong></data>
    <div class="ratings">
      ${starString}
      <span class="total-ratings">(${product.total_ratings} ratings)</span>
    </div>
  </header>

  <footer class="product-footer">
    <button type="button" class="main-button add-cart">
      <span class="material-icons-round"> add_shopping_cart </span> Add
      to Cart
    </button>
    <button type="button" class="main-button add-wishlist">
      <span class="material-icons-round add-fav">favorite_border</span>
      Add to wishlist
    </button>
  </footer>`;

    section.appendChild(article);
  });
};

getProducts();

let sort = document.querySelector(`#sort`);

sort.addEventListener("change", (event) => {
  let selectedSortOption = event.target.value;
  if (selectedSortOption == `high`) {
    products.sort(
      (firstItem, secondItem) => secondItem.amount - firstItem.amount
    );
  } else if (selectedSortOption == `low`) {
    products.sort(
      (firstItem, secondItem) => firstItem.amount - secondItem.amount
    );
  } else if (selectedSortOption == `ratings`) {
    products.sort(
      (firstItem, secondItem) => secondItem.ratings - firstItem.ratings
    );
  } else {
    getProducts();
  }
  getProducts();
});
