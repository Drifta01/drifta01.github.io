import links from "./links.js";
import getPost from "./page-reader.js";

const rootUrl = window.location;
const navMenu = document.getElementById("nav-menu");
const targetContainer = document.getElementById("container");

const handleClick = (e, fileName) => {
  e.preventDefault();
  getPost(fileName);
};

links
  .sort((a, b) => a.order - b.order)
  .forEach((link) => {
    const navItem = `<a href="${window.location}${link.fileName}">${link.linkText}</a>`;

    const navItemEl = document.createElement("li");
    navItemEl.addEventListener("click", (e) => handleClick(e, link.fileName));
    navItemEl.classList.add("menu-item");
    navItemEl.innerHTML = navItem;
    navMenu.appendChild(navItemEl);
  });
