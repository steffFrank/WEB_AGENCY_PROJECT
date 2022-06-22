// Javascript logic

//Animation of the button

let menu = document.querySelector(".menu");
let bars = document.querySelectorAll(".menu__bar--no-animation");
let nav = document.querySelector(".header-nav");
let links = document.querySelectorAll(".header-nav__link");
let toggle = false;

menu.addEventListener("click", () => {
  // Remove the no-animation class after the click;
  bars.forEach((bar) => bar.classList.remove("menu__bar--no-animation"));
  if (!toggle) {
    bars.forEach((bar) => bar.classList.add("menu__bar--active"));
    nav.classList.add("header-nav--active");
    toggle = true;
  } else {
    bars.forEach((bar) => bar.classList.remove("menu__bar--active"));
    nav.classList.remove("header-nav--active");
    toggle = false;
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (toggle) {
      bars.forEach((bar) => bar.classList.remove("menu__bar--active"));
      nav.classList.remove("header-nav--active");
      toggle = false;
    }
  });
});

// PROJECTS
const projects = document.querySelectorAll(".projects-item");
const projButtons = document.querySelectorAll(".btn-proj");

// Function to select different category of project
const selectProjects = (category) => {
  let selectedButton;
  for (let button of projButtons) {
    button.classList.remove("btn-proj--selected");
    if (button.innerHTML.toLowerCase().trim() === category.toLowerCase()) {
      selectedButton = button;
      break;
    }
  }
  selectedButton.classList.add("btn-proj--selected");
  projects.forEach((item) => {
    if (item.classList.contains(category) || category === "all works") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
