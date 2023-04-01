const hamburger = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__content");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("open");
});

const navLinks = document
  .querySelectorAll(".nav__pages__link")
  .forEach((link) => {
    if (link.href === window.location.href) {
      console.log(link.href);
      console.log(window.location.href);
      link.classList.add("active");
    }
  });

const reviewContainers = [...document.querySelectorAll(".testimonial__users")];
const leftController = [
  ...document.querySelectorAll(".testimonial__arrow--left"),
];
const rightController = [
  ...document.querySelectorAll(".testimonial__arrow--right"),
];

reviewContainers.forEach((item, i) => {
  console.log("run");
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  leftController[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  rightController[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
