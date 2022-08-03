const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (hamburger.classList.contains("active")){
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
})