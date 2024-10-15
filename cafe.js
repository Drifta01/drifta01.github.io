let totalCash = 0;
let savings = 0;
let orderList = [];

function addItem(item, price) {
  const stock = {
    "white Coffee": "whiteCoffee",
    "black Coffee": "blackCoffee",
    sandwich: "sandwich",
    muffin: "muffin",
    eggs: "eggs",
  };
  const element = document.getElementById(stock[item]);
  const currentStock = parseInt(element.children[1].textContent);

  if (currentStock > 0) {
    const invoiceList = document.getElementById("invoiceList");
    const listItem = document.createElement("li");
    listItem.textContent = `${item} - $${price.toFixed(2)}`;
    invoiceList.appendChild(listItem);
    orderList.push({ item, price });
    element.children[1].textContent = currentStock - 1;
    hideAlert();
  } else {
    showAlert();
  }
}

function logOrder() {
  let total = 0;
  orderList.forEach((order) => {
    total += order.price;
  });
  totalCash += total;
  savings += total;
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
  document.getElementById("savings").textContent = `Savings: $${savings.toFixed(2)}`;
  clearOrder();
}

function updateStock() {
  const stock = {
    "white Coffee": "whiteCoffee",
    "black Coffee": "blackCoffee",
    sandwich: "sandwich",
    muffin: "muffin",
    eggs: "eggs",
  };
  for (let item in stock) {
    const element = document.getElementById(stock[item]);
    const currentStock = parseInt(element.children[1].textContent);
    if (currentStock === 0) {
      element.children[1].textContent = 5; // Replenish stock to 5
    }
  }
  hideAlert();
}

function clearOrder() {
  orderList = [];
  document.getElementById("invoiceList").innerHTML = "";
  document.getElementById("totalPrice").textContent = "";
}

function nextOrder() {
  clearOrder();
  hideAlert();
}

function showAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "block";
}

function hideAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "none";
}
