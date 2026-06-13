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
      collection: "australian landscape",
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
      scents: ["smoky", "Woody", "seasonal", "seasonal candles"],
      description: "Fir Needles, Smoke, Ash, Pine, Cedar",
      
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
      collection:"the rouge matte collection",
      description: "Bulgarian Roses, Rose, Berries",

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
      collection:"the rouge matte collection",
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

// filter state    //store defualt scent and collection, in order to get the clicked scent and collection
const filterState = {
  scent: null,
  collection: null
};

function loadCart() {
  const data = localStorage.getItem("cart"); //from local storage in browser to get cart
  return data ? JSON.parse(data) : []; //change strings to data, if there are something in the cart, return to data, if nothing in the cart, return to []
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); //save cart's content into local storage (browser), stringify=from data to string
}

let cart = loadCart(); //when open the new page, will find the previous cart info.


//set cart ui
function updateCartUI() {
  cart = loadCart();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navCart = document.getElementById("nav-cart");
  if (navCart) {
    navCart.innerText = totalQuantity > 0 ? `Cart (${totalQuantity})` : "Cart";
  }

  const quickCartNumber = document.getElementById("quick-cart-number-current");
  if (quickCartNumber) {
    quickCartNumber.innerText = totalQuantity;
  }

  const cartItems = document.getElementById("quick-cart-items");

  if (!cartItems) {
    return;
  }

  cartItems.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="quick-cart-item-one">
    
        <a href="productpage.html?id=${item.id}">
          <img class="quick-cart-item-one-image" src="${item.imageProductpage || item.image}" alt="${item.name}">
        </a>
        <div class="quick-cart-item-right">
          <div class="quick-cart-item-info">
            <h3 class="quick-cart-item-title">${item.name}</h3>
            <p class="quick-cart-item-scents">${item.description}</p>
          </div>

          <div class="quick-cart-row-price-count">
            <h3 class="quick-cart-item-price">$${item.price}</h3>

            <div class="quick-quantity-count">
              <button class="quick-cart-quantity-minus" type="button" onclick="decreaseQuantity(${item.id})">-
              </button>

              <input class="quick-cart-quantity-input" type="number" value="${item.quantity}" readonly>

              <button class="quick-cart-quantity-plus" type="button" onclick="addQuantity(${item.id})">+
              </button>
            </div>

          </div>

        </div>

      </div>
    `;
  });

  const subtotalText = document.getElementById("cart-right-subtotal-count");
  if (subtotalText) {
    subtotalText.innerText = subtotal;
  }

  const freeShipping = document.getElementById("quick-cart-free-shipping");
  if (freeShipping) {
    const freeLimit = 200;
    const remaining = freeLimit - subtotal;

    if (remaining > 0) {
      freeShipping.innerText = `$${remaining} away from FREE shipping`;
    } else {
      freeShipping.innerText = "You unlocked FREE shipping!";
    }
  }
}

function addtoCart() {
  const btn = document.querySelector(".add-to-cart");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const productId = Number(new URLSearchParams(window.location.search).get("id"));
    const product = dataSystem.products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    if (document.getElementById("quick-cart-items")) {
    updateCartUI();
  }

  if (document.getElementById("cart-items")) {
    renderCartPage();
  }

    const quickCart = document.querySelector(".quick-cart-section");
    if (quickCart) {
      quickCart.classList.add("active");
    }
  });
}

function addQuantity(id) {

  //find this id in cart
  const item = cart.find(p => p.id === id);
  if (!item) return;

  //item.quantity = item.quantity + 1;
  item.quantity++;
  saveCart();
    if (document.getElementById("quick-cart-items")) {
    updateCartUI();
  }

  if (document.getElementById("cart-items")) {
    renderCartPage();
  }
}

function decreaseQuantity(id) {

  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity--;

if (item.quantity <= 0) {
  const index = cart.findIndex(p => p.id === id);
  cart.splice(index, 1); //if index=1, and the quantity is 0, then delete this item in cart
}

saveCart();
  if (document.getElementById("quick-cart-items")) {
    updateCartUI();
  }

  if (document.getElementById("cart-items")) {
    renderCartPage();
  }
}

function removeItem(id) {

  cart = loadCart();

  const index = cart.findIndex(item => item.id === id);

  if (index === -1) return;

  cart.splice(index, 1);

  saveCart();

  updateCartUI();

  if (document.getElementById("cart-items")) {
    renderCartPage();
  }
}

function updateBreadcrumb() {
  const current = document.getElementById("breadcrumb-current");
  if (!current) return;

  const params = new URLSearchParams(window.location.search);

  const scent = params.get("scent");
  const collection = params.get("collection");
  const search = params.get("search");

  if (scent) {
    current.innerText = scent;
  } else if (collection) {
    current.innerText = collection;
  } else if (search) {
    current.innerText = `Search: ${search}`;
  } else {
    current.innerText = "All products";
  }
}


//cart page
function renderCartPage() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("cart-number-current").innerText = totalQuantity;

  let subtotal = 0;

  cart.forEach(item => { 
    subtotal += item.price * item.quantity;
    container.innerHTML += `
      <div class="cart-item-one">
        <img class="cart-item-one-image" src="${item.imageProductpage || item.image}" />

        <div class="cart-item-right">
          <h3 class="cart-item-title">${item.name}</h3>
          <p class="cart-item-scents">${item.description}</p>

          <div class="cart-row-price-count">
            <h3 class="cart-item-price">$${item.price}</h3>
            <div class="quantity-count">
                <button class="cart-quantity-minus" onclick="decreaseQuantity(${item.id})">-</button>
                <input  class="cart-quantity-input" value="${item.quantity}" readonly>
                <button class="cart-quantity-plus" onclick="addQuantity(${item.id})">+</button>
            </div>
          </div>
          <button class="remove" type="button" onclick="removeItem(${item.id})">
          Remove
          </button>
        </div>
      </div>
    `;
  });

  document.getElementById("cart-page-subtotal-count").innerText = subtotal;

  const freeLimit = 200;
  const remaining = freeLimit - subtotal;

  const shipping = document.getElementById("cart-free-shipping");

  shipping.innerText =
    remaining > 0
      ? `$${remaining} away from FREE shipping`
      : "You unlocked FREE shipping!";
}

//render delivery page
function renderDeliveryPage() {

  const container = document.getElementById("delivery-products");
  if (!container) return;
  container.innerHTML = "";

  let subtotal = 0;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  cart.forEach(item => {
    subtotal += item.price * item.quantity;

    container.innerHTML += `
      <div class="product">
        <div class="img-box">
          <img src="${item.imageProductpage || item.image}" alt="${item.name}">
          <div class="quantity">${item.quantity}</div>
        </div>

        <div class="product-info">
          <h2 class="delivery-product-name">${item.name}</h2>
          <h2 class="delivery-product-price">$${item.price * item.quantity}</h2>
        </div>
        

      </div>
    `;
  });

  // subtotal
  document.querySelector(".delivery-subtotal-price").innerText = subtotal;

  // total quantity
  document.querySelector(".total-quantity").innerText = totalQuantity;

  // shipping
  let shipping = subtotal >= 200 ? 0 : 15; //if subtotal >=200, shipping=0, else, shipping=15
  document.querySelector(".total-shipping").innerText = shipping;

  // total
  document.querySelector(".delivery-page-total-price-number").innerText = subtotal + shipping;

  document.querySelector(".delivery-order-summary-total").innerText = subtotal + shipping;
}

// adapt filter information
function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, " ").trim(); //unify the format of text
}

function matchesScent(product, scent) {
  if (!Array.isArray(product.scents)) return false; //if array is not an array, return false

  return product.scents
    .map(s => normalize(s)) //process each item in the array one by one and then generate a new array
    .includes(normalize(scent)); // matches users input
}


// main filter function
function applyFilter() {

  const params = new URLSearchParams(window.location.search);

  const scent = params.get("scent");
  const search = params.get("search");
  const collection = params.get("collection"); //find this product's scent

  let result = [...dataSystem.products];

  // scent
  if (scent) {
    result = result.filter(p => matchesScent(p, scent));
  }

  // collection
  if (collection) {
    result = result.filter(p => normalize(p.collection || "") === normalize(collection));
  }

  // search
  if (search) {
    const q = normalize(search);

    result = result.filter(p => normalize(p.name).includes(q) || normalize(p.description).includes(q) || (p.scents && p.scents.some(s => normalize(s).includes(q))) ||
      normalize(p.collection || "").includes(q)
    );
  }

  const quantity = document.getElementById("filter-quantity-current");

if (quantity) {
  quantity.innerText = result.length;
}

  renderProducts(result);
}

// homepage filters
document.querySelectorAll(".dropdown-column-li")
  .forEach(li => {
    li.addEventListener("click", () => {
  const scent = normalize(li.innerText);
  window.location.href = `productlists.html?scent=${encodeURIComponent(scent)}`;
    });
  });

// collection filters
document.querySelectorAll(".filter-collection-li")
  .forEach(li => {
    li.addEventListener("click", () => {
      const collection = normalize(li.innerText); //get text in li
      const params = new URLSearchParams(window.location.search);
      params.set("collection", collection); //change the collection of page link to current one which you clicked
      window.location.href = `productlists.html?${params.toString()}`;
    });
  });


// render products
function renderProducts(products) {

  const list = document.getElementById("product-list");
        list.innerHTML = "";

  let rowEachproducts = "";

  const isMobile = window.matchMedia("(max-width: 390px)").matches;
  const perRow = isMobile ? 2 : 3;

  products.forEach((product, index) => {
    // clickable products
    if(product.id === 2 || product.id === 3 || product.id === 7){
      rowEachproducts += `
        <a class="productlists-card" href="productpage.html?id=${product.id}">

          <img class="productlists-card-image" src="${product.image}" alt="the image of ${product.name}">

          <div class="productlists-text">

            <div class="productlists-card-textandrating">
              <p class="productlists-card-title">${product.name}</p>
              <span class="productlists-card-rating">${product.rating}</span>
            </div>

            <p class="productlists-card-info">${product.description}</p>
            <p class="productlists-card-prices">$${product.price}</p>

          </div>

        </a>
      `;

    }

    // non-clickable products
    else {

      rowEachproducts += `
        <div class="productlists-card">

          <img class="productlists-card-image" src="${product.image}" alt="the image of ${product.name}">

          <div class="productlists-text">
            <div class="productlists-card-textandrating">
              <p class="productlists-card-title">${product.name}</p>
              <span class="productlists-card-rating">${product.rating}</span>
            </div>

            <p class="productlists-card-info">${product.description}</p>

            <p class="productlists-card-prices">$${product.price}</p>
          </div>

        </div>
      `;
    }

    if ((index + 1) % perRow === 0) {
      list.innerHTML += `
        <div class="productlists-onerow">${rowEachproducts}</div>
      `;
      rowEachproducts = "";
    }

  });

  // remaining products
  if (rowEachproducts !== "") {

    list.innerHTML += `
      <div class="productlists-onerow">${rowEachproducts}</div>
    `;
  }

}

//render product page
function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));
  const product = dataSystem.products.find(p => p.id === productId);
        if (!product) return;
  const productPageinfo = document.getElementById("product-page");
  productPageinfo.innerHTML = `
    <div class="back-to-products">
      <a href="productlists.html">← Back</a>
    </div>
      
    <div class="product-image-section">
      <img class="product-image" src="${product.imageProductpage}" alt="the image of ${product.name}">
      <img class="product-image-bottom" src="${product.imageProductbottom}" alt="the image of ${product.name}">
    </div>

    <div class="product-detailed-information">

      <h1 class="textinfo-title">${product.name}</h1>
      <h1 class="textinfo-title">$${product.price}.00 AUD ${product.rating}</h1>
      <p class="textinfo-p">${product.slogan}</p>

      <div class="textinfo-fragrance-section">
        <h5 class="textinfo-fragrance-title">Fragrance</h5>
        <p class="textinfo-p">Top: ${product.topScents}</p>
        <p class="textinfo-p">Middle: ${product.middleScents}</p>
        <p class="textinfo-p">Base: ${product.baseScents}</p>
      </div>

      <p class="textinfo-p-kg">${product.usingTime}</p>

      <div class="product-description">

        <div class="product-description-one">

          <div class="product-description-trigger">
            <h5 class="product-description-title">Product Description</h5>
          </div>

          <div class="product-description-dropdown-section">
            <p class="product-description-dropdown">${product.descriptionProductpage}</p>
          </div>

        </div>

        <div class="product-description-two">

          <div class="product-description-trigger-two">
            <h5 class="product-description-title-two">Candle care</h5>
          </div>

          <div class="product-description-dropdown-section-two">
            <p class="product-description-dropdown-two">
              Each time you relight your candle trim off the mushroom and make sure your wick is around 1 cm high and never leave a burning candle unattended.
            </p>
          </div>

        </div>

        <div class="product-description-three">

          <div class="product-description-trigger-three">
            <h5 class="product-description-title-three">Shipping & Return</h5>
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
        <button class="add-to-cart">Add to cart</button>
        <button class="check-out" onclick="window.location.href='cart.html'">Check out</button>
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

  box.addEventListener('click', (e) => {
  e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    if (
      !box.contains(e.target) &&
      !trigger.contains(e.target)
    ) {
      box.classList.remove('active');
    }
  });
}

//search function
function searchFunction() {
  const input = document.getElementById("search-input");
  if (!input) return;
  
  input.addEventListener("keydown", (e) => { 
    if (e.key !== "Enter") return;

    e.preventDefault();

    const query = normalize(input.value);

    if (!query) return;

    window.location.href = `productlists.html?search=${encodeURIComponent(query)}`;
  });
}

// init
document.addEventListener("DOMContentLoaded", () => { 

  searchFunction();

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

// product list page
  if (document.getElementById("product-list")) {

  const params = new URLSearchParams(window.location.search);

  const scent = params.get("scent");
  const search = params.get("search");

// scent filter
  if (scent) {
    filterState.scent = normalize(scent);
  }

// search filter
  if (search) {
    filterState.search = normalize(search);
  }

  updateBreadcrumb();
  applyFilter();

  window.addEventListener('resize', applyFilter);
}

// product page
  if (document.getElementById("product-page")) {

    renderProductPage();
    addtoCart();

    dropdownSection('.product-description-one','.product-description-trigger');

    dropdownSection('.product-description-two','.product-description-trigger-two');

    dropdownSection('.product-description-three','.product-description-trigger-three');
  }

// global dropdowns
  dropdownSection('.shop-dropdown','.nav-item-left-shop');

  dropdownSection('.nav-shop-underline','.nav-item-left-shop');

  dropdownSection('.filter-sortby', '.filter-sortby-title');

  dropdownSection('.filter-collection', '.filter-collection-title');

  dropdownSection('.search-dropdown', '.nav-item-left-search');

  dropdownSection('.nav-search-underline', '.nav-item-left-search');

  dropdownSection(".mobile-dropdown", ".burger-menu");

  dropdownSection('.mobile-dropdown-shop-section','.mobile-dropdown-shop');

  dropdownSection('.mobile-scent-section','.mobile-scent-dropdown');

  dropdownSection('.quick-cart-section','#nav-cart');

  cart = loadCart();
  if (document.getElementById("cart-number-current")) {
  renderCartPage();
  }

  if (document.getElementById("delivery-products")) {

  renderDeliveryPage();

}

  updateCartUI();

});



