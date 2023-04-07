/*
  HAMBURGER MENU
*/

const hamburger = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__content");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("open");
  // Reverts height back to 20.85rem
  menu.classList.remove("dropdown--open");
  // Closes dropdown menu and turns back icon
  dropdownMenu.classList.remove("open");
  dropdownIcon.classList.remove("open");
});

/*
  DROPDOWN MENU
*/
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownIcon = document.querySelector(".nav__dropdown--icon");

// Open mobile dropdown menu
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
  dropdownIcon.classList.toggle("open");
  /* 
  increase the height value of .nav__content 
  This is needed because of the way I built the nav, the animation is based on the height increasing from 0 to a set value
  so when the dropdown menu is opened we need to increase the height accordingly so it doesn't overflow
  */
  menu.classList.toggle("dropdown--open");
});

/*
  TESTIMONIAL SLIDER
*/

// Get elements
const reviewContainer = document.querySelector(".testimonial__users");
const leftController = document.querySelector(".testimonial__arrow--left");
const rightController = document.querySelector(".testimonial__arrow--right");

let containerDimensions = reviewContainer.getBoundingClientRect();
let containerWidth = containerDimensions.width;

// Scroll the container by 100% of it's width
leftController.addEventListener("click", () => {
  reviewContainer.scrollLeft -= containerWidth;
});

// Scroll the container by 100% of it's width
rightController.addEventListener("click", () => {
  reviewContainer.scrollLeft += containerWidth;
});
