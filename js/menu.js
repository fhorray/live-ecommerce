const header = document.querySelector("header");
const submenu = document.querySelector(".submenu");
const menuItem = document.querySelectorAll(".submenu-list");
const menuHeaderItem = document.querySelectorAll(".js-menu-header li");

function hoverMenu(e) {
  if (e.currentTarget.innerText === "Recursos") {
    menuItem[0].classList.remove("submenu-hidden");
    menuItem[1].classList.add("submenu-hidden");
  } else if (e.currentTarget.innerText === "Conteúdos") {
    menuItem[0].classList.add("submenu-hidden");
    menuItem[1].classList.remove("submenu-hidden");
  }
}

function closeMenu() {
  menuItem[0].classList.add("submenu-hidden");
  menuItem[1].classList.add("submenu-hidden");
}

menuHeaderItem.forEach((item) => {
  item.addEventListener("mouseover", hoverMenu);
});

menuItem.forEach((item) => {
  item.addEventListener("mouseleave", closeMenu);
});
