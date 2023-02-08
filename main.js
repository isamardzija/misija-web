const toggle = document.querySelector("#toggle");
const mainNavigation = document.querySelector("#mainNavigation");

toggle.addEventListener("click", () => {
  mainNavigation.classList.toggle("hide");
  if (mainNavigation.classList.contains("hide")) {
    toggle.firstElementChild.src = "./images/bars-solid.svg";
  } else if (!mainNavigation.classList.contains("hide")) {
    toggle.firstElementChild.src = "./images/xmark-solid.svg";
  }
});

if (window.innerWidth < 600) {
  mainNavigation.classList.add("hide");
  toggle.classList.remove("hide");
} else if (window.innerWidth > 599) {
  mainNavigation.classList.remove("hide");
  toggle.classList.add("hide");
}
