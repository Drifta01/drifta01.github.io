// // Stock Control
// let products = {
//   whiteCoffee: { stock: 5, price: 4, wholesaleCost: 2 },
//   blackCoffee: { stock: 5, price: 3, wholesaleCost: 1.5 },
//   sandwich: { stock: 9, price: 3, wholesaleCost: 1.8 },
//   muffin: { stock: 2, price: 3.5, wholesaleCost: 2 },
//   eggs: { stock: 5, price: 3.5, wholesaleCost: 1.2 },
// };

// function displayProducts() {
//   document.getElementById("whiteCoffee").innerHTML = "White Coffee: " + products.whiteCoffee.stock;
//   document.getElementById("blackCoffee").innerHTML = "Black Coffee: " + products.blackCoffee.stock;
//   document.getElementById("sandwich").innerHTML = "Sandwich: " + products.sandwich.stock;
//   document.getElementById("muffin").innerHTML = "Muffin: " + products.muffin.stock;
//   document.getElementById("eggs").innerHTML = "Eggs: " + products.eggs.stock;
// }
// displayProducts();

// // Customer Object
// let customer = { order: [] };
// let minOrderSize = 1;
// let maxOrderSize = 5;

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Generate Customer Order
// function generateCustomerOrder() {
//   let orderSize = getRandomInt(minOrderSize, maxOrderSize);
//   let newOrder = [];
//   let productNames = Object.keys(products);

//   for (let i = 0; i < orderSize; i++) {
//     let productIndex = getRandomInt(0, productNames.length - 1);
//     let productName = productNames[productIndex];
//     newOrder.push(productName);
//   }
//   customer.order = newOrder;
//   displayCustomerOrder();
// }

// function displayCustomerOrder() {
//   document.getElementById("customerOrder").innerHTML = "Customer order: " + customer.order.join(", ");
// }

// document.getElementById("customerButton").onclick = generateCustomerOrder;

// // Transactions
// let cash = 0;

// function displayCash() {
//   document.getElementById("cash").innerHTML = "Cash: " + cash;
// }
// displayCash();

// document.getElementById("fillOrder").onclick = fillOrder;

// function fillOrder() {
//   let saleTotal = 0;
//   let alertBox = document.getElementById("alertBox");
//   alertBox.innerHTML = ""; // Clear previous alerts

//   customer.order.forEach((productName) => {
//     if (products[productName].stock > 0) {
//       products[productName].stock--;
//       saleTotal += products[productName].price;
//     } else {
//       alertBox.innerHTML += "I'm sorry, we're out of " + productName + "<br>";
//     }
//   });

//   cash += saleTotal;
//   customer.order = [];
//   displayCash();
//   displayProducts();
// }

// function restockProduct(productName) {
//   let product = products[productName];
//   if (cash >= product.wholesaleCost) {
//     product.stock++;
//     cash -= product.wholesaleCost;
//     displayCash();
//     displayProducts();
//   } else {
//     alert("Not enough cash to restock " + productName);
//   }
// }
