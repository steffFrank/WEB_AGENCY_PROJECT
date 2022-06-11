// Javascript logic 

//Animation of the button

let menu = document.querySelector(".menu");
let bars = document.querySelectorAll(".menu__bar");
let toggle = false;

menu.addEventListener("click", () => {
    // Remove the no-animation class after the click;
    bars.forEach(bar => bar.classList.remove("menu__bar--no-animation"));
    if (!toggle) {
        bars.forEach(bar => bar.classList.add("menu__bar--active"));
        toggle=true;
    } else {
        bars.forEach(bar => bar.classList.remove("menu__bar--active"));
        toggle=false;
    }
})