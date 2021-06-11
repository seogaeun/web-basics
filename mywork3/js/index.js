//자동 화면 슬라이드
$(function() {

  $('#fullpage').fullpage({
		//options here
		autoScrolling:true
	});

});

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

// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side__menu')
const headerLogoSubEl = document.getElementById('logo_sub')
const headerMenuEl = document.getElementById('main--header')
const QuickMenuEl = document.getElementById('quick')

window.addEventListener("scroll",function(){
  //스크롤 위치가 300이상이면
if(window.scrollY<=300){
      //헤더 요소의 높이를 줄인다
      QuickMenuEl.style.transform = 'translateX(0%)'
      headerMenuEl.style.transform = 'translateY(-120%)'
      menuOpenEl.style.display = 'none'
      menuCloseEl.style.display = 'none'
      headerLogoSubEl.style.display = "none";

         
}else if(window.scrollY<=1200){
  headerMenuEl.style.transform = 'translateY(0%)'
  headerLogoSubEl.style.display = "none";
  QuickMenuEl.style.transform = 'translateX(-100%)'



}else{
  //아니면(스크롤 위치가 1200이상이면)
  //헤더요소의 높이를 원래대로
  // 아이콘을 보이지 않게 처리하고,사이드 메뉴 숨기기
  headerMenuEl.style.transform = 'translateY(-70%)'
  headerLogoSubEl.style.display = "block";
  QuickMenuEl.style.transform = 'translateX(-100%)'
}
})

//헤더에 올려지는 이벤트가 발생하면
headerMenuEl.addEventListener("mouseover", function() {
    // 사이드 메뉴를 보이게 합니다 
    if(window.scrollY<=1200){
      sideMenuEl.style.transform = 'translateY(20%)'
      headerMenuEl.style.color="blue"
    }else{
      sideMenuEl.style.transform = 'translateY(10%)'
      headerMenuEl.style.color="blue"
    }
      
})

  //헤더에 벗어나는 이벤트가 발생하면
     headerMenuEl.addEventListener("mouseout", function() {
    // 사이드 메뉴를 보이지 않게 합니다 
            sideMenuEl.style.transform = 'translateY(-150%)'
            headerMenuEl.style.color="none"
})


//네비게이션에 올려지는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseover",function(){
     // 사이드 메뉴를 보이게 합니다 
     if(window.scrollY<=1200){
      sideMenuEl.style.transform = 'translateY(20%)'
      headerMenuEl.style.color="blue"
    }else{
      sideMenuEl.style.transform = 'translateY(10%)'
      headerMenuEl.style.color="blue"
    }
})

//네비게이션에서 벗어나는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseout",function(){
    // 사이드 메뉴를 원상태로 숨깁니다
     sideMenuEl.style.transform = 'translateY(-150%)'
})

