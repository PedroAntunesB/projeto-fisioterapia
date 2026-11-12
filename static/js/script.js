const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

function alternar(aberto) {
  menu.classList.toggle("aberto", aberto);
  btn.setAttribute("aria-expanded", aberto);
}

btn.addEventListener("click", () => alternar(!menu.classList.contains("aberto")));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) alternar(false); });
