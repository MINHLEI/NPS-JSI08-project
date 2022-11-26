const products = [
  { name: "Shoes", price: 100, type: "sport" },
  { name: "T-shirt", price: 10, type: "casual" },
  { name: "Jeans", price: 50, type: "casual" },
  { name: "Hat", price: 20, type: "casual" },
  { name: "Socks", price: 5, type: "sport" },
];

// products.forEach(function (element) {
//   console.log(element);
// });

const productsListElement = document.getElementById("products-list");

function render(productsList) {
  productsListElement.innerHTML = "";
  productsList.forEach(function (element) {
    productsListElement.insertAdjacentHTML(
      // Vị trí chèn
      "beforeend",
      // Nội dung chèn
      `
        <li>
          <h2>${element.name}</h2>
          <span>${element.price}</span>
        </li>
      `
    );
  });
}

render(products);

const ascButton = document.getElementById("asc");
const descButton = document.getElementById("desc");

// onclick là thuộc tính của button và được gán bằng 1 function chỉ có 1 tham số duy nhất đại diện cho sự kiện xảy ra
ascButton.onclick = function () {
  const sortedProducts = products.sort(function (a, b) {
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return -1;
    }
  });

  render(sortedProducts);
};

descButton.onclick = function () {
  const sortedProducts = products.sort(function (a, b) {
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      return -1;
    } else {
      return 1;
    }
  });

  render(sortedProducts);
};

const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "sport":
      filteredProducts = products.filter(function (element) {
        if (element.type == "sport") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "casual":
      filteredProducts = products.filter(function (element) {
        if (element.type == "casual") {
          return true;
        } else {
          return false;
        }
      });
      break;

    default:
      filteredProducts = products;
      break;
  }

  render(filteredProducts)
};
