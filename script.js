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
