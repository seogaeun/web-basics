//헤더
const headerEl = document.getElementById('header--main')
//로고
const logoEl = document.getElementById('logo')

//스크롤 발생
window.addEventListener("scroll",function(){
        //스크롤 위치가 200이상이면
    if(window.scrollY>=200){
        //헤더 요소의 높이를 줄인다
        headerEl.style.height ='160px'
        //로고 요소의 높이 및 너비를 줄인다
        logoEl.style.height='120px'
        logoEl.style.width='120px'
    }else{
        //아니면(스크롤 위치가 200미만이면)
        //헤더요소의 높이를 원래대로
        headerEl.style.height = '500px'
         //로고 높이랑 너비를 원래대로
        logoEl.style.height ='100%'
        logoEl.style.width ='100%'
    }
})