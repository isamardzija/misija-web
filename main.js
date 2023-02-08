const toggle = document.querySelector("#toggle");
const mainNavigation = document.querySelector("#mainNavigation");

toggle.addEventListener("click", () => {
  mainNavigation.classList.toggle("hide");
});

if (window.innerWidth < 600) {
  mainNavigation.classList.add("hide");
  toggle.classList.remove("hide");
} else if (window.innerWidth > 599) {
  mainNavigation.classList.remove("hide");
  toggle.classList.add("hide");
}
