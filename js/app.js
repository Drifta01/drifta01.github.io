import links from "./links.js";

// const skeleton = document.querySelectorAll(".skeleton");
// skeleton.forEach((element) => {
//   element.classList.remove("skeleton");
//   element.classList.add("fade-in");
// });
const rootUrl = window.location;
const navMenu = document.getElementById("nav-menu");
const targetContainer = document.getElementById("container");
const heading = document.getElementById("pinky");
const pinkyImg = document.getElementById("pinkyImg");
const showPinky = () => {
  pinkyImg.style.display = "block";
  pinkyImg.style.visibility = "visible";
};

let counter = 5;
let pinkyInterval = null;
let pinkyTimeout = null;
let gotMe = false;

const handlePinky = (action) => {
  const reset = () => {
    counter = 5;
    clearInterval(pinkyInterval);
    pinkyInterval = null;
    clearTimeout(pinkyTimeout);
    pinkyTimeout = null;
  };

  if (action === "start") {
    pinkyTimeout = setTimeout(() => {
      gotMe = true;
      showPinky();
      reset();
    }, 30000);
  }
};

heading.addEventListener("mouseover", () => handlePinky("start"));
heading.addEventListener("mouseout", () => handlePinky("stop"));

/// links

const handleClick = (e) => {
  e.preventDefault();
  const link = e.target.closest("a");

  console.log(link);
};

links
  .sort((a, b) => a.order - b.order)
  .forEach((link) => {
    const navItem = `<a href="${window.location}${link.href}">${link.linkText}</a>`;

    const navItemEl = document.createElement("li");

    navItemEl.addEventListener("click", handleClick);
    navItemEl.classList.add("menu-item");
    navItemEl.innerHTML = navItem;
    navMenu.appendChild(navItemEl);
  });
