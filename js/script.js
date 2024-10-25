const navbar = document.getElementById("nav");
const menu = document.getElementById("burger");

function show() {
    navbar.classList.toggle("show"); 
}

menu.addEventListener("click", show);



