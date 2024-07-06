//------------------//
//--STOCK CONTROL--//
//----------------//

// DECLARING VARIABLES FOR THE PRODUCT OBJECTS //
let products = {
  whiteCoffee: {
    stock: 5,
    price: 4,
  },
  blackCoffee: {
    stock: 5,
    price: 3,
  },
  sandwich: {
    stock: 9,
    price: 3,
  },
  muffin: {
    stock: 2,
    price: 3.5,
  },
  eggs: {
    stock: 1,
    price: 3.5,
  },
};

// DECLARING FUNCTION FOR DISPLAYING PRODUCTS //

function displayProducts() {
  document.getElementById("whiteCoffee").innerHTML = "white Coffee :" + products.whiteCoffee.stock;

  document.getElementById("blackCoffee").innerHTML = "Black Coffee : " + products.blackCoffee.stock;

  document.getElementById("sandwich").innerHTML = "sandwich :" + products.sandwich.stock;

  document.getElementById("muffin").innerHTML = "muffin :" + products.muffin.stock;

  document.getElementById("eggs").innerHTML = "Eggs :" + products.eggs.stock;
}
displayProducts();

//--customers--//

let customer = {
  order: [],
};

let minOrderSize = 1;
let maxOrderSize = 5;

function generateCustomerOrder() {
  // get a random size of the order in a range, 1-5 //
  //make an  array of the things the're ordering //
  //asign the new order to the customer object//
  //display the customer order //
  // declare a new empty array for our order //
  // a loop to push random products into the customers order //
  // display the updated customer order //
  // update the customer order based on the order variable we built in the loop //

  let orderSize = getRandomInt(minOrderSize, maxOrderSize);

  let newOrder = [];

  let productNames = Object.keys(products);

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1);
    let productName = productNames[productIndex];
    newOrder.push(productName);
  }
  customer.order = newOrder;
  displayCustomerOrder();
}

// DECLARING FUNCTION FOR DISPLAYING CUSTOMER ORDER //
//converts the customer orders array into a string so we can display it //
function displayCustomerOrder() {
  document.getElementById("customerOrder").innerHTML = "Customer Order: " + customer.order;
}
document.getElementById("customerButton").onclick = generateCustomerOrder;

//--TRANSACTIONS--//

let cash = 0;

function displayCash() {
  document.getElementById("cash").innerHTML = "Cash:" + cash;
}
displayCash();

function fillOrder() {
  //loop through the customer order array//
  //checking to see if we have the product in stock, if we don't , we  can't sell it //
  // if we have thier product in stock , sell it to them , and keep track of asle //
  // if we dont have it alert were out of product //
  // add the sale total to our cash //
  // display the new totals//

  let saleTotal = 0;
  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i];

    if (products[productName].stock > 0) {
      products[productName].stock--;
      saleTotal += products[productName].price;
    } else {
      alert("i'm sorry, we're out of " + productName);
    }
  }

  cash += saleTotal;
  customer.order = [];

  displayProducts();
  displayCash();
  displayCustomerOrder();
  displayFillOrder();
}

document.getElementById("fillOrder").onclick = fillOrder;

// decrease our stock of the product //
// add the cost of the product to our sale total //
// inform the customer that we're out of that product //

//--DECLARING A FUNCTION TO FILL CUSTOMERS ORDER //
//a variable for keeping track of the total cost of the sale //

// FOR GENERATING A RANDOM NUMBER WITHIN A RANGE //

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
