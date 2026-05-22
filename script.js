// data system
const dataSystem = {
  products: [
    {
      id: 1,
      name: "Agape Candle",
      price: 80,
      image: "media/agape.png",
      rating: "(5.0)",
      scents: ["Woody", "Smoky", "Green"],
      description: "Oakwood, Moss, Leather, Patchouli"
    },
    {
      id: 2,
      name: "Highlands Candle",
      price: 80,
      image: "media/highlands.png",
      rating: "(4.8)",
      scents: ["Smoky", "Woody"],
      description: "Black Pepper, Patchouli, Leather",

      imageProductpage:"media/highlands-productpage.png",
      imageProductbottom:"media/highlands-productpage1.png",
      slogan: "A soft and gentle combination of Safran, Cedarwood and Patchouli.",

      topScents: "Black Pepper",
      middleScents: "Patchouli, Leather, Safran",
      baseScents: "Cedar Wood",

      usingTime: "400g - 80+ hours burn time",

      descriptionProductpage: "The Highlands Of Australia - Leather, Wranglers, Snow, Native Gums and The Man From Snowy River."
    },
    {
      id: 3,
      name: "St Nicholas Candle",
      price: 80,
      image: "media/st-nicholas.png",
      rating: "(5.0)",
      scents: ["smoky", "Woody", "seasonal"],
      collection: "australian landscape",
      description: "Fir, Smoke, Pine",
      
      imageProductpage:"media/st-nicholas-productpage.png",
      imageProductbottom:"media/st-nicholas-productpage1.png",
      slogan: "A Scandinavian take on Christmas Fragrance, emulating a Pine Forest.",

      topScents: "Fir Needles",
      middleScents: "Smoke, Ash",
      baseScents: "Pine, Cedar",

      usingTime: "400g - 80+ hours burn time",

      descriptionProductpage: "🎄SOH Christmas Candle: (Seasonal Oct - Dec) The Bells on Christmas Day, Chime Strong and Tall, A Hymn on Holy Night, Peace on Earth and Good Will to All."
    },
    {
      id: 4,
      name: "Fig Tree Candle",
      price: 80,
      image: "media/fig-tree.png",
      rating: "(5.0)",
      scents: ["green", "fig"],
      description: "Fresh fig"
    },
    {
      id: 5,
      name: "Vinter Candle",
      price: 80,
      image: "media/vinter.png",
      rating: "(5.0)",
      scents: ["smoky"],
      description: "Leather Wood"
    },
    {
      id: 6,
      name: "Moss Candle",
      price: 80,
      image: "media/moss.png",
      rating: "(5.0)",
      scents: ["Woody", "smoky", "green"],
      description: "Vetiver Moss"
    },
    {
      id: 7,
      name: "Super Bloom Candle",
      price: 80,
      image: "media/super-bloom.png",
      rating: "(5.0)",
      scents: ["floral"],
      description: "Roses",

      imageProductpage:"media/super-bloom-productpage.png",
      imageProductbottom:"media/super-bloom-productpage1.png",
      slogan: "A sweet rose garden in the spring.",

      topScents: "Bulgarian Roses",
      middleScents: "Rose",
      baseScents: "Berries",

      usingTime: "400g - 80+ hours burn time",

      descriptionProductpage: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events."
    },
    {
      id: 8,
      name: "Rose of OZ Candle",
      price: 80,
      image: "media/roseofoz.png",
      rating: "(5.0)",
      scents: ["floral"],
      description: "Rose Patchouli"
    },
    {
      id: 9,
      name: "SOH Belvedere Candle",
      price: 80,
      image: "media/belvedere.png",
      rating: "(5.0)",
      scents: ["floral", "smoky"],
      description: "Rose Tobacco"
    },
    {
      id: 10,
      name: "Plume Candle",
      price: 80,
      image: "media/plume.png",
      rating: "(5.0)",
      scents: ["Woody"],
      description: "Sandalwood"
    },
    {
      id: 11,
      name: "293 Candle",
      price: 80,
      image: "media/293.png",
      rating: "(5.0)",
      scents: ["marine"],
      description: "Citrus"
    },
    {
      id: 12,
      name: "Collins Street Candle",
      price: 80,
      image: "media/collins-st.png",
      rating: "(5.0)",
      scents: ["marine"],
      description: "Orange Lemon"
    }
  ]
};


// filter state
const filterState = {
  scent: null,
  collection: null
};


// adapt filter information
function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, " ").trim();
}

function matchesScent(product, scent) {
  if (!Array.isArray(product.scents)) return false;

  return product.scents
    .map(s => normalize(s))
    .includes(normalize(scent));
}


// main filter function
function applyFilter() {
  let result = dataSystem.products;

  if (filterState.scent) {
    result = result.filter(p =>
      matchesScent(p, filterState.scent)
    );
  }

  if (filterState.collection) {
    result = result.filter(p =>
      normalize(p.collection || "") === filterState.collection
    );
  }

  renderProducts(result);
}

// homepage filters

document.querySelectorAll(".dropdown-column-li")
  .forEach(li => {
    li.addEventListener("click", () => {
  const scent = normalize(li.innerText);
  window.location.href =
    `productlists.html?scent=${encodeURIComponent(scent)}`;
    });
  });

// collection filters
document.querySelectorAll(".filter-collection-li")
  .forEach(li => {
    li.addEventListener("click", () => {
      filterState.collection = normalize(li.innerText);
      applyFilter();
    });
  });


// render products
function renderProducts(products) {

  const list = document.getElementById("product-list");
        list.innerHTML = "";
  let rowEachproducts = "";
  products.forEach((product, index) => {
    // clickable products
    if(product.id === 2 || product.id === 3 || product.id === 7){
      rowEachproducts += `
        <a class="productlists-card"
           href="productpage.html?id=${product.id}">

          <img class="productlists-card-image"
               src="${product.image}"
               alt="the image of ${product.name}">

          <div class="productlists-text">

            <div class="productlists-card-textandrating">

              <p class="productlists-card-title">
                ${product.name}
              </p>

              <span class="productlists-card-rating">
                ${product.rating}
              </span>

            </div>

            <p class="productlists-card-info">
              ${product.description}
            </p>

            <p class="productlists-card-prices">
              $${product.price}
            </p>

          </div>

        </a>
      `;

    }

    // non-clickable products
    else {

      rowEachproducts += `
        <div class="productlists-card">

          <img class="productlists-card-image"
               src="${product.image}"
               alt="the image of ${product.name}">

          <div class="productlists-text">

            <div class="productlists-card-textandrating">

              <p class="productlists-card-title">
                ${product.name}
              </p>

              <span class="productlists-card-rating">
                ${product.rating}
              </span>

            </div>

            <p class="productlists-card-info">
              ${product.description}
            </p>

            <p class="productlists-card-prices">
              $${product.price}
            </p>
          </div>
        </div>
      `;
    }

    if ((index + 1) % 3 === 0) {

      list.innerHTML += `
        <div class="productlists-onerow">
          ${rowEachproducts}
        </div>
      `;

      rowEachproducts = "";
    }

  });

  // remaining products
  if (rowEachproducts !== "") {

    list.innerHTML += `
      <div class="productlists-onerow">
        ${rowEachproducts}
      </div>
    `;
  }

}

//render product page
function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));
  const product = dataSystem.products.find(
    p => p.id === productId
  );
  if (!product) return;
  const productPageinfo =
    document.getElementById("product-page");
  productPageinfo.innerHTML = `
    <div class="product-image-section">

      <img
        class="product-image"
        src="${product.imageProductpage}"
        alt="the image of ${product.name}"
      >

      <img
        class="product-image-bottom"
        src="${product.imageProductbottom}"
        alt="the image of ${product.name}"
      >

    </div>

    <div class="product-detailed-information">

      <h1 class="textinfo-title">
        ${product.name}
      </h1>

      <h1 class="textinfo-title">
        $${product.price}.00 AUD ${product.rating}
      </h1>

      <p class="textinfo-p">
        ${product.slogan}
      </p>

      <div class="textinfo-fragrance-section">

        <h5 class="textinfo-fragrance-title">
          Fragrance
        </h5>

        <p class="textinfo-p">
          Top: ${product.topScents}
        </p>

        <p class="textinfo-p">
          Middle: ${product.middleScents}
        </p>

        <p class="textinfo-p">
          Base: ${product.baseScents}
        </p>

      </div>

      <p class="textinfo-p-kg">
        ${product.usingTime}
      </p>

      <div class="product-description">

        <div class="product-description-one">

          <div class="product-description-trigger">

            <h5 class="product-description-title">
              Product Description
            </h5>

          </div>

          <div class="product-description-dropdown-section">

            <p class="product-description-dropdown">
              ${product.descriptionProductpage}
            </p>

          </div>

        </div>

        <div class="product-description-two">

          <div class="product-description-trigger-two">

            <h5 class="product-description-title-two">
              Candle care
            </h5>

          </div>

          <div class="product-description-dropdown-section-two">

            <p class="product-description-dropdown-two">
              Each time you relight your candle trim off the mushroom and make sure your wick is around 1 cm high and never leave a burning candle unattended.
            </p>

          </div>

        </div>

        <div class="product-description-three">

          <div class="product-description-trigger-three">

            <h5 class="product-description-title-three">
              Shipping & Return
            </h5>

          </div>

          <div class="product-description-dropdown-section-three">

            <p class="product-description-dropdown-three">
              Standard Shipping is $12.00 AUD in Australia and $30 USD in other countries.Free Shipping on all domestic orders over $200.
              If your item is faulty upon receipt or is not as described, we will gladly exchange the item or refund your credit card. All returns are subject to us receiving the item back within 7 days of purchase.
            </p>

          </div>

        </div>

      </div>

      <div class="product-list-buttons">

        <button class="add-to-cart">
          Add to cart
        </button>

        <button class="check-out">
          Check out
        </button>

      </div>

    </div>
  `;
}

//drop down section in product list's filters
function dropdownSection(whichSection, triggerPart) {
  const box = document.querySelector(whichSection);
  const trigger = document.querySelector(triggerPart);
  if (!box || !trigger) return;
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    box.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!box.contains(e.target)) {
      box.classList.remove('active');
    }
  });
}

// init
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // homepage filters
  // =========================

  document.querySelectorAll(".dropdown-column-li")
    .forEach(li => {

      li.addEventListener("click", () => {

        const scent = normalize(li.innerText);

        window.location.href =
          `productlists.html?scent=${encodeURIComponent(scent)}`;

      });

    });


  // =========================
  // collection filters
  // =========================

  document.querySelectorAll(".filter-collection-li")
    .forEach(li => {

      li.addEventListener("click", () => {

        filterState.collection =
          normalize(li.innerText);

        applyFilter();

      });

    });


  // =========================
  // product list page
  // =========================

  if (document.getElementById("product-list")) {

    const params =
      new URLSearchParams(window.location.search);

    const scent = params.get("scent");

    if (scent) {
      filterState.scent = normalize(scent);
    }

    applyFilter();
  }


  // =========================
  // product page
  // =========================

  if (document.getElementById("product-page")) {

    renderProductPage();

    dropdownSection(
      '.product-description-one',
      '.product-description-trigger'
    );

    dropdownSection(
      '.product-description-two',
      '.product-description-trigger-two'
    );

    dropdownSection(
      '.product-description-three',
      '.product-description-trigger-three'
    );
  }


  // =========================
  // global dropdowns
  // =========================

  dropdownSection(
    '.shop-dropdown',
    '.nav-item-left-shop'
  );

  dropdownSection(
    '.filter-sortby',
    '.filter-sortby-title'
  );

  dropdownSection(
    '.filter-collection',
    '.filter-collection-title'
  );

});

