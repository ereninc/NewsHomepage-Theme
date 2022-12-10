"use strict";

const openBtn = document.querySelector(".hamburger-menu-open");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.querySelector(".hamburger-menu-transparent-overlay");

const hamburgerMenu = document.querySelector(".hamburger-menu-wrapper");
openBtn.addEventListener("click", () => {
  console.log("HambergerMenu opened");
  hamburgerMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  console.log("HambergerMenu closed");
  hamburgerMenu.classList.remove("open");
});

overlay.addEventListener("click", () => {
  hamburgerMenu.classList.remove("open");
});
