window.onscroll = function () { myFunction() };
const nav = document.querySelector('.detail-nav__container')
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("detail-sticky")
    } else {
        nav.classList.remove("detail-sticky");
    }
}