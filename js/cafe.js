// Stock Control
let products = {
  whiteCoffee: { stock: 5, price: 4 },
  blackCoffee: { stock: 5, price: 3 },
  sandwich: { stock: 9, price: 3 },
  muffin: { stock: 2, price: 3.5 },
  eggs: { stock: 1, price: 3.5 },
};

function displayProducts() {
  document.getElementById("whiteCoffee").innerHTML = "white Coffee :" + products.whiteCoffee.stock;

  document.getElementById("blackCoffee").innerHTML = "Black Coffee : " + products.blackCoffee.stock;

  document.getElementById("sandwich").innerHTML = "sandwich :" + products.sandwich.stock;

  document.getElementById("muffin").innerHTML = "muffin :" + products.muffin.stock;

  document.getElementById("eggs").innerHTML = "Eggs" + products.eggs.stock;
  displayProducts();
}

// Display Products
function displayProducts() {
  for (const [key, value] of Object.entries(products)) {
    document.getElementById(key).innerHTML = `${key} : ${value.stock}`;
  }
}
displayProducts();

// Customer Object
let customer = { order: [] };
let minOrderSize = 1;
let maxOrderSize = 5;

// Generate Customer Order
function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize);
  let newOrder = [];
  let productNames = Object.keys(products);

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1);
    let productName = productNames[productIndex];
    newOrder.push(productName);
  }

  customer.order = newOrder;
  displayCustomerOrder();
}

// Display Customer Order
function displayCustomerOrder() {
  document.getElementById("customerOrder").innerHTML = `Customer order: ${customer.order.join(", ")}`;
}
document.getElementById("customerButton").onclick = generateCustomerOrder;

// Transactions
let cash = 0;

function displayCash() {
  document.getElementById("cash").innerHTML = `Cash: ${cash}`;
}
displayCash();

document.getElementById("fillOrder").onclick = fillOrder;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fillOrder() {
  let saleTotal = 0;

  let alertBox = document.getElementById("alertBox");

  customer.order.forEach((productName) => {
    if (products[productName].stock > 0) {
      products[productName].stock--;
      saleTotal += products[productName].price;
    } else {
      alertBox.innerHTML = `I'm sorry, we're out of ${productName}`;
    }
  });

  cash += saleTotal;
  customer.order = [];

  displayProducts();
  displayCash();
  displayCustomerOrder();
}