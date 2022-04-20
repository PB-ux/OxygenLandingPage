// Declare variables
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const dots = document.querySelectorAll(".slider-pag__circle");
const itemWidth = container.clientWidth / slidesToScroll;
const movePosition = slidesToScroll * itemWidth;
let index = 0;

items.forEach(function (item) {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", function () {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  if (index < 3) {
    activeDots(index + 1);
    index++;
  }
});

btnPrev.addEventListener("click", function () {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
  if (index <= 3) {
    index--;
    activeDots(index);
  }
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

const activeDots = (n) => {
  for (dot of dots) {
    dot.classList.remove("slider-pag__circle_active");
  }
  dots[n].classList.add("slider-pag__circle_active");
};
