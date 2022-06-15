// Javascript logic 

//Animation of the button

let menu = document.querySelector(".menu");
let bars = document.querySelectorAll(".menu__bar--no-animation");
let nav = document.querySelector(".header-nav");
let links = document.querySelectorAll(".header-nav__link");
let toggle = false;

menu.addEventListener("click", () => {
    // Remove the no-animation class after the click;
    bars.forEach(bar => bar.classList.remove("menu__bar--no-animation"));
    if (!toggle) {
        bars.forEach(bar => bar.classList.add("menu__bar--active"));
        nav.classList.add("header-nav--active");
        toggle=true;
    } else {
        bars.forEach(bar => bar.classList.remove("menu__bar--active"));
        nav.classList.remove("header-nav--active");
        toggle=false;
    }
})

links.forEach(link => {
    link.addEventListener("click", () => {
        if (toggle) {
            bars.forEach(bar => bar.classList.remove("menu__bar--active"));
            nav.classList.remove("header-nav--active");
            toggle=false;
        }
    })
})