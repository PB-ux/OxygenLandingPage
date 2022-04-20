// Scroll UP
const btnUp = document.querySelector(".footer__button-up");
const aboutUs = document.querySelector(".about").offsetTop;
const portfolio = document.querySelector(".portfolio").offsetTop;
const link = document.querySelector(".nav2");
const link2 = document.querySelector(".nav3");

link2.addEventListener("click", function () {
  window.scrollTo({
    top: portfolio,
    behavior: "smooth",
  });
});

link.addEventListener("click", function () {
  window.scrollTo({
    top: aboutUs,
    behavior: "smooth",
  });
});

btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
