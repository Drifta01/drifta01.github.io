// Stock Control
let products = {
  whiteCoffee: { stock: 5, price: 4 },
  blackCoffee: { stock: 5, price: 3 },
  sandwich: { stock: 9, price: 3 },
  muffin: { stock: 2, price: 3.5 },
  eggs: { stock: 1, price: 3.5 },
};

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

// Add product to customer order
function addProductToOrder(productName) {
  customer.order.push(productName);
  displayCustomerOrder();
}

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize);
  let newOrder = [];
  let productNames = Object.keys(products);

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1);
    let productName = productNames[productIndex];
    newOrder.push(productName);
  }

  // Attach event listeners to product order buttons
  document.getElementById("whiteCoffeeOrderButton").onclick = function () {
    addProductToOrder("whiteCoffee");
  };
  document.getElementById("blackCoffeeOrderButton").onclick = function () {
    addProductToOrder("blackCoffeeOrderButton");
  };
  document.getElementById("sandwichOrderButton").onclick = function () {
    addProductToOrder("sandwich");
  };
  document.getElementById("muffinOrderButton").onclick = function () {
    addProductToOrder("muffin");
  };
  document.getElementById("eggsOrderButton").onclick = function () {
    addProductToOrder("eggs");
  };
  document.getElementById("customerOrder").innerHTML = `Customer order: ${customer.order.join(", ")}`;
}
displayCustomerOrder();

// Generate Customer Order

// Display Customer Order
function displayCustomerOrder() {
  document.getElementById("customerButton").onclick = generateCustomerOrder;
  customer.order = newOrder;
}
// Transactions
let cash = 0;

function displayCash() {
  document.getElementById("cash").innerHTML = `Cash: ${cash}`;
}
displayCash();

function fillOrder() {
  let saleTotal = 0;

  customer.order.forEach((productName) => {
    if (products[productName].stock > 0) {
      products[productName].stock--;
      saleTotal += products[productName].price;
    } else {
      alert(`I'm sorry, we're out of ${productName}`);
    }
  });

  cash += saleTotal;
  customer.order = [];

  displayProducts();
  displayCash();
  displayCustomerOrder();
}

document.getElementById("fillOrder").onclick = fillOrder;

// Clear Menu
function clearMenu() {
  customer.order = [];
  displayCustomerOrder();
}

document.getElementById("clearMenu").onclick = clearMenu;

// Helper Function: Generate Random Number Within Range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
