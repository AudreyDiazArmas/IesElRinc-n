function initialize() {
  const menu = document.getElementById("menu");
  menu.addEventListener("click", showSideMenu);
}

function showSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("side-menu-close");
  sideMenu.classList.add("side-menu-open");
}
initialize();

function initialize2() {
  const menuclose = document.getElementById("menu-close");
  menuclose.addEventListener("click", unshowSideMenu);
}

function unshowSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("side-menu-open");
  sideMenu.classList.add("side-menu-close");
}
initialize2();