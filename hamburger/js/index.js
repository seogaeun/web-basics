// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side__menu')


// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.transform = 'translateX(0%)'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.transform = 'translateX(-120%)'
})