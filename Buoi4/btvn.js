const products = [
  {
    pic: "https://cdn.shopify.com/s/files/1/0265/3493/6627/products/printer_e0a36a10-e05c-48ae-803e-dbae21ff92a6.png?v=1649400757&width=540",
    name: "Soltone Product Sample",
    price: 280,
    selled: 20,
  },
  {
    pic: "https://cdn.shopify.com/s/files/1/0265/3493/6627/products/watchsmart_10c538ca-171d-4710-a740-57069d7f3359.png?v=1649400523&width=540",
    name: "Lexiited Product Sample",
    price: 200,
    selled: 50,
  },
  {
    pic: "https://cdn.shopify.com/s/files/1/0265/3493/6627/products/redmi_67cac7fd-c12e-4510-8277-d3ffdb6eb2c5.png?v=1649400559&width=540",
    name: "Lexiwarm Product Sample",
    price: 35,
    selled: 12,
  },
  {
    pic: "https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen_12974f4c-4274-4704-b489-9bc4ce10e211.png?v=1649400717&width=540",
    name: "Newity Product Sample",
    price: 80,
    selled: 24,
  },
  {
    pic: "https://cdn.shopify.com/s/files/1/0265/3493/6627/products/applap.png?v=1649400676&width=540",
    name: "Lexizimin Product Sample",
    price: 120,
    selled: 19,
  },
];

const productsListElement = document.getElementById("products-list");

function render(productsList) {
  productsListElement.innerHTML = "";
  productsList.forEach(function (element) {
    productsListElement.insertAdjacentHTML(
      "beforeend",
      `
        <li>
          <p>${element.name}</p>
          <img src="${element.pic}" alt="">
          <br>
          <span>Price: ${element.price}$</span>
          <br>
          <span>Selled: ${element.selled}</span>
          
        </li>
      `
    );
  });
}

render(products);

const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "high_low":
      filteredProducts = products.sort(function (a, b) {
        if (a.price == b.price) {
          return 0;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      });
      break;

    case "low_high":
      filteredProducts = products.sort(function (a, b) {
        if (a.price == b.price) {
          return 0;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      });
      break;

    case "best_selling":
      filteredProducts = products.sort(function (a, b) {
        if (a.selled == b.selled) {
          return 0;
        } else if (a.selled > b.selled) {
          return -1;
        } else {
          return 1;
        }
      });
      break;

    case "featured":
      filteredProducts = products;
      break;
  }

  render(filteredProducts);
};
