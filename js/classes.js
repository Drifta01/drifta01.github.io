// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", start);

function start() {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one();
  two();
  three();
  //three()
  //makeVisible()
  // Your turn! Create a new function named `two` below, then call it from here.
}

function one() {
  // First, we have to find the element:
  let one = document.getElementById("one");

  // Next, we apply a new CSS class to it:
  one.classList.add("blue");
}

// CREATE FUNCTION two HERE
function two() {
  let two = document.getElementById("two");

  two.classList.add("green");
}
// CREATE FUNCTION three HERE
function three() {
  let three = document.getElementById("three");
  three.classList.add("yellow");
}
// CREATE FUNCTION makeVisible HERE
function makeVisible() {
  let makeVisible = document.getElementsByClassName("invisible")[0];

  makeVisible.classList.add("visible");
  makeVisible.classList.remove("invisible");
}
function makeInVisible() {
  let makeVisible = document.getElementsByClassName("visible")[0];
  makeVisible.classList.remove("visible");

  makeVisible.classList.add("invisible");
}
