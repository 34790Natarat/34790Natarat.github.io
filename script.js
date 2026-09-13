const button = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-nav");

button.addEventListener("click", () => {
  menu.classList.toggle("open");
  button.textContent = menu.classList.contains("open") ? "CLOSE" : "MENU";
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    button.textContent = "MENU";
  });
});
