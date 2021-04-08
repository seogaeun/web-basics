// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side__menu')

const headerMenuEl = document.getElementById('main--header')

window.addEventListener("scroll",function(){
    //스크롤 위치가 200이상이면
if(window.scrollY>=200){
        //헤더 요소의 높이를 줄인다
        headerMenuEl.style.height ='50px'
        
}else{
    //아니면(스크롤 위치가 200미만이면)
    //헤더요소의 높이를 원래대로
    // 아이콘을 보이지 않게 처리하고,사이드 메뉴 숨기기
    headerMenuEl.style.height = '500px'
    sideMenuEl.style.transform = 'translateY(-150%)'
    menuOpenEl.style.display = 'none'
    menuCloseEl.style.display = 'none'
        // 햄버거 바 아이콘을 보이지않게 처리하고,
        menuOpenEl.style.display = 'none'
        // 닫는 아이콘은 보이지않게 처리합니다
        menuCloseEl.style.display = 'none'
}
})

//헤더에 올려지는 이벤트가 발생하면
headerMenuEl.addEventListener("mouseover", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
            menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이지않게 처리합니다
            menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
            sideMenuEl.style.transform = 'translateY(0%)'
})

  //헤더에 벗어나는 이벤트가 발생하면
     headerMenuEl.addEventListener("mouseout", function() {
    // 햄버거 바 아이콘을 보이지않게 처리하고,
             menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이지게 처리합니다
            menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이지 않게 합니다 
            sideMenuEl.style.transform = 'translateY(-150%)'
})
    // 햄버거 바 아이콘에 올려지는 이벤트가 발생하면,
menuOpenEl.addEventListener("mouseover", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.transform = 'translateY(0%)'
})

// 닫는 아이콘에 벗어나는 이벤트가 발생하면,
menuCloseEl.addEventListener("mouseout", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.transform = 'translateY(-150%)'
})

//네비게이션에 올려지는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseover",function(){
     // 햄버거 바 아이콘을 보이지 않게 처리하고,
     menuOpenEl.style.display = 'none'
     // 닫는 아이콘은 보이게 처리합니다
     menuCloseEl.style.display = 'block'
     // 사이드 메뉴를 보이게 합니다 
     sideMenuEl.style.transform = 'translateY(0%)'
})

//네비게이션에서 벗어나는 이벤트가 발생하면
sideMenuEl.addEventListener("mouseout",function(){
    // 햄버거 바 아이콘을 보이게 처리하고,
     menuOpenEl.style.display = 'block'
     // 닫는 아이콘은 보이지 않게 처리합니다
     menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
     sideMenuEl.style.transform = 'translateY(-150%)'
})