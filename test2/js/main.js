// 슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");
// 점들 선택자
const $dots = document.querySelectorAll(".dot");

// 현재 보이는 슬라이드 index값
let current = 0;

// 자동 슬라이드 기능
window.addEventListener("load", function () {
  setInterval(autoSlide, 3000);
});

const reset = () => {
  $slides.forEach((slide) => {
    slide.style.display = "none";
  });
  $dots.forEach((dot) => {
    dot.style.background = "#F6F5F0";
    dot.style.width = "8px";
  });
};

const autoSlide = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};

// 수동 슬라이드 기능: 화살표
// 왼쪽 화살표
const $arrowLeft = document.querySelector(".arrow--left");
// 오른쪽 화살표
const $arrowRight = document.querySelector(".arrow--right");

const slideToRight = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};

$arrowRight.addEventListener("click", slideToRight);

const slideToLeft = () => {
  reset();
  if (current === 0) {
    current = $slides.length;
  }
  current--;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};

$arrowLeft.addEventListener("click", slideToLeft);

// 수동 슬라이드 기능: 점들
$dots.forEach((dot, idx) => {
    dot.addEventListener("click", function () {
      reset();
      current = idx;
      $slides[current].style.display = "block";
      dot.style.background = "#1107ff";
      dot.style.width = "30px";
    });
  });