const navToggle = document.querySelector('.detail-nav-toggle')
const navMenu=document.querySelector('.detail-nav-menu__list')
let navOpen = false;
navToggle.addEventListener('click', ()=>{
    if(!navOpen){
        navToggle.classList.add('open');
        navMenu.classList.add('detail-nav-active')
        // navMenu.style.display = 'block';
        navOpen=true;
    }else{
        navToggle.classList.remove('open');
        navMenu.classList.remove('detail-nav-active')
        // navMenu.style.display = 'none';
        navOpen=false;
    }
})


// const nav = document.querySelector('.nav__container')
// const sticky = header.offsetTop;

// window.addEventListener("onscroll", () =>{
//     if (window.pageYOffset > sticky) {
//         nav.classList.add("sticky");
//       } else {
//         nav.classList.remove("sticky");
//       }
// })