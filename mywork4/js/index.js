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

// 메인화면 자동 슬라이드 기능
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

//헤더 로고 관련
const headerLogo1El = document.getElementById('headerlogo1')
const headerLogo2El = document.getElementById('headerlogo2')
//헤더 관련
const headerMenuEl = document.getElementById('main--header')
const headerupMenuEl = document.getElementById('header--up')
const headerdownMenuEl = document.getElementById('header--down')

//헤더 사이트 링크
const sideMenuBTN1El = document.getElementById('area-tab-sitebtn1')
const sideMenuBTN2El = document.getElementById('area-tab-sitebtn2')

//헤더 로그인~사이트맵
const headerSideListEl=document.getElementById("sub_list")
const headerSideListEl2=document.getElementById("sub_list2")
const headerSideListEl3=document.getElementById("sub_list3")
const headerSideListEl4=document.getElementById("sub_list4")

//헤더 메뉴 항목들
const headerMenuItemEl=document.getElementById("items")
const headerMenuItem2El=document.getElementById("items2")
const headerMenuItem3El=document.getElementById("items3")
const headerMenuItem4El=document.getElementById("items4")
const headerMenuItem5El=document.getElementById("items5")
const headerMenuItem6El=document.getElementById("items6")

//메뉴들 관련
const QuickMenuEl = document.getElementById('quick')
const MenudepartureEl = document.getElementById('departure')
const MenuarrivalEl = document.getElementById('arrival')
const MenuexchangeEl = document.getElementById('exchange')
const MenutrafficEl = document.getElementById('traffic')
const MenushoppingEl = document.getElementById('shopping')
const Menuguide__informationEl = document.getElementById('guide__information')

//스크롤 위치에 따라
window.addEventListener("scroll",function(){
  //스크롤 위치가 300이하이면
if(window.scrollY<=300){
      //헤더와 퀵메뉴 숨기기
      QuickMenuEl.style.transform = 'translateX(0%)'
      headerMenuEl.style.transform = 'translateY(-130%)'
      menuOpenEl.style.display = 'none'
      menuCloseEl.style.display = 'none'
      headerLogoSubEl.style.display = "none"
      
      headerMenuItemEl.style.color="white"
      headerMenuItem2El.style.color="white"
      headerMenuItem3El.style.color="white"
      headerMenuItem4El.style.color="white"
      headerMenuItem5El.style.color="white"
      headerMenuItem6El.style.color="white"

      headerSideListEl.style.color="white"
      headerSideListEl2.style.color="white"
      headerSideListEl3.style.color="white"
      headerSideListEl4.style.color="white"

        //스크롤 위치가 1200이하이면(메인화면)
}else if(window.scrollY<=1200){
  //헤더 보이게 하기(하지만 메인화면에서는 투명하게 보이게 하기)
  headerupMenuEl.style.backgroundColor="transparent"
  headerdownMenuEl.style.backgroundColor="transparent"
  headerdownMenuEl.style.borderBottom="1px solid white"

  //헤더와와 퀵메뉴 크기 조정&메뉴 간격 조정
  headerMenuEl.style.transform = 'translateY(0%)'
  headerLogoSubEl.style.display = "none";
  QuickMenuEl.style.transform = 'translateX(-100%)'
  MenudepartureEl.style.marginLeft = "185px"
  MenudepartureEl.style.paddingTop = "3%"
  MenuarrivalEl.style.paddingTop = "3%"
  MenuexchangeEl .style.paddingTop = "3%"
  MenutrafficEl .style.paddingTop = "3%"
  MenushoppingEl .style.paddingTop = "3%"
  Menuguide__informationEl .style.paddingTop = "3%"

  //헤더 글자
  headerMenuItemEl.style.color="white"
  headerMenuItem2El.style.color="white"
  headerMenuItem3El.style.color="white"
  headerMenuItem4El.style.color="white"
  headerMenuItem5El.style.color="white"
  headerMenuItem6El.style.color="white"

  headerSideListEl.style.color="white"
  headerSideListEl2.style.color="white"
  headerSideListEl3.style.color="white"
  headerSideListEl4.style.color="white"
//로고 조정
  headerLogo1El.style.display="none"
  headerLogo2El.style.display="block"

  

}else{
  //아니면(스크롤 위치가 1200이상이면)
  //헤더요소의 높이를 메뉴만 보이게 줄이고, 그에맞게 사이드메뉴 간격조정
  //헤더가 줄어들었으니 옆에 아이콘 보이게하기

  headerupMenuEl.style.backgroundColor="white"
  headerdownMenuEl.style.backgroundColor="white"
  headerdownMenuEl.style.borderBottom="1px solid blue"
  headerMenuEl.style.transform = 'translateY(-70%)'
  headerLogoSubEl.style.display = "block";
  QuickMenuEl.style.transform = 'translateX(-100%)'
  MenudepartureEl.style.marginLeft = "245px"
  MenudepartureEl.style.paddingTop = "2%"
  MenuarrivalEl.style.paddingTop = "2%"
  MenuexchangeEl .style.paddingTop = "2%"
  MenutrafficEl .style.paddingTop = "2%"
  MenushoppingEl .style.paddingTop = "2%"
  Menuguide__informationEl .style.paddingTop = "2%"

    //헤더 글자
    headerMenuItemEl.style.color="black"
    headerMenuItem2El.style.color="black"
    headerMenuItem3El.style.color="black"
    headerMenuItem4El.style.color="black"
    headerMenuItem5El.style.color="black"
    headerMenuItem6El.style.color="black"
}
})

//헤더에 올려지는 이벤트가 발생하면
headerMenuEl.addEventListener("mouseover", function() {
    // 사이드 메뉴를 보이게 합니다 
    if(window.scrollY<=1200){
      headerupMenuEl.style.backgroundColor="white"
      headerdownMenuEl.style.backgroundColor="white"
      headerdownMenuEl.style.borderBottom="1px solid blue"
      sideMenuEl.style.transform = 'translateY(20%)'
      headerMenuEl.style.color="blue"
      //로고 조정
      headerLogo1El.style.display="block"
      headerLogo2El.style.display="none"

      //헤더 글자
      headerMenuItemEl.style.color="black"
      headerMenuItem2El.style.color="black"
      headerMenuItem3El.style.color="black"
      headerMenuItem4El.style.color="black"
      headerMenuItem5El.style.color="black"
      headerMenuItem6El.style.color="black"

      headerSideListEl.style.color="black"
      headerSideListEl2.style.color="black"
      headerSideListEl3.style.color="black"
      headerSideListEl4.style.color="black"
    }else{
      sideMenuEl.style.transform = 'translateY(10%)'
      headerMenuEl.style.color="blue"
      headerMenuItemEl.style.color="black"
    }
      
})

  //헤더에 벗어나는 이벤트가 발생하면
     headerMenuEl.addEventListener("mouseout", function() {
      if(window.scrollY<=1200){
        headerupMenuEl.style.backgroundColor="transparent"
        headerdownMenuEl.style.backgroundColor="transparent" 
        headerdownMenuEl.style.borderBottom="1px solid white"
        // 사이드 메뉴를 보이지 않게 합니다 
        sideMenuEl.style.transform = 'translateY(-150%)'
        headerMenuEl.style.color="none"
        //로고 조정
       headerLogo1El.style.display="none"
       headerLogo2El.style.display="block"

       //헤더 글자
       headerMenuItemEl.style.color="white"
       headerMenuItem2El.style.color="white"
       headerMenuItem3El.style.color="white"
       headerMenuItem4El.style.color="white"
       headerMenuItem5El.style.color="white"
       headerMenuItem6El.style.color="white"
       headerSideListEl.style.color="white"
       headerSideListEl2.style.color="white"
       headerSideListEl3.style.color="white"
       headerSideListEl4.style.color="white"
      }else{
          // 사이드 메뉴를 보이지 않게 합니다
          headerupMenuEl.style.backgroundColor="white"
          headerdownMenuEl.style.backgroundColor="white"
          headerdownMenuEl.style.borderBottom="1px solid blue"
          sideMenuEl.style.transform = 'translateY(-150%)'
          headerMenuEl.style.color="none"

          //헤더 글자
          headerMenuItemEl.style.color="black"
          headerMenuItem2El.style.color="black"
          headerMenuItem3El.style.color="black"
          headerMenuItem4El.style.color="black"
          headerMenuItem5El.style.color="black"
          headerMenuItem6El.style.color="black"

          headerSideListEl.style.color="black"
          headerSideListEl2.style.color="black"
          headerSideListEl3.style.color="black"
          headerSideListEl4.style.color="black"

        }

})


//네비게이션에 올려지는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseover",function(){
     // 사이드 메뉴를 보이게 합니다 
     if(window.scrollY<=1200){
      headerupMenuEl.style.backgroundColor="white"
      headerdownMenuEl.style.backgroundColor="white"
      headerdownMenuEl.style.borderBottom="1px solid blue"
      sideMenuEl.style.transform = 'translateY(20%)'
      headerMenuEl.style.color="blue"
      //로고 조정
      headerLogo1El.style.display="block"
      headerLogo2El.style.display="none"


       //헤더 글자
       headerMenuItemEl.style.color="black"
       headerMenuItem2El.style.color="black"
       headerMenuItem3El.style.color="black"
       headerMenuItem4El.style.color="black"
       headerMenuItem5El.style.color="black"
       headerMenuItem6El.style.color="black"

       headerSideListEl.style.color="black"
       headerSideListEl2.style.color="black"
       headerSideListEl3.style.color="black"
       headerSideListEl4.style.color="black"
      
    }else{
      sideMenuEl.style.transform = 'translateY(10%)'
      headerMenuEl.style.color="blue"
      //헤더 글자
      headerMenuItemEl.style.color="black"
      headerMenuItem2El.style.color="black"
      headerMenuItem3El.style.color="black"
      headerMenuItem4El.style.color="black"
      headerMenuItem5El.style.color="black"
      headerMenuItem6El.style.color="black"

      headerSideListEl.style.color="black"
      headerSideListEl2.style.color="black"
      headerSideListEl3.style.color="black"
      headerSideListEl4.style.color="black"
    }
})

//네비게이션에서 벗어나는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseout",function(){

    if(window.scrollY<=1200){
      headerupMenuEl.style.backgroundColor="transparent"
        headerdownMenuEl.style.backgroundColor="transparent"
        headerdownMenuEl.style.borderBottom="1px solid white"
       // 사이드 메뉴를 원상태로 숨깁니다
      sideMenuEl.style.transform = 'translateY(-150%)'
      //로고 조정
      headerLogo1El.style.display="none"
      headerLogo2El.style.display="block"

      //헤더 글자
      headerMenuItemEl.style.color="white"
      headerMenuItem2El.style.color="white"
      headerMenuItem3El.style.color="white"
      headerMenuItem4El.style.color="white"
      headerMenuItem5El.style.color="white"
      headerMenuItem6El.style.color="white"

      headerSideListEl.style.color="white"
      headerSideListEl2.style.color="white"
      headerSideListEl3.style.color="white"
      headerSideListEl4.style.color="white"
    }else{
     // 사이드 메뉴를 원상태로 숨깁니다
     sideMenuEl.style.transform = 'translateY(-150%)'
     //헤더 글자
          headerMenuItemEl.style.color="black"
          headerMenuItem2El.style.color="black"
          headerMenuItem3El.style.color="black"
          headerMenuItem4El.style.color="black"
          headerMenuItem5El.style.color="black"
          headerMenuItem6El.style.color="black"

          headerSideListEl.style.color="black"
          headerSideListEl2.style.color="black"
          headerSideListEl3.style.color="black"
          headerSideListEl4.style.color="black"
    }
   
})





$(".tarkikComandSlider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});