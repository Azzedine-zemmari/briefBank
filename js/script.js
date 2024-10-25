const navbar = document.getElementById("nav");
const menu = document.getElementById("burger");
const head = document.querySelector("header");

function show() {
    navbar.classList.toggle("show"); 
}

menu.addEventListener("click", show);

window.addEventListener("scroll",function(){
    head.classList.toggle("sticky",window.scrollY>0);
})
