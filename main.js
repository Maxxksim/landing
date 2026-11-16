document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const defaultMenu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const body = document.getElementById("body");

  burgerMenuBtn.addEventListener("click", () => {
    defaultMenu.classList.add("menu_opened");
    body.classList.add("body_locked");
  });

  menuCloseBtn.addEventListener("click", () => {
    defaultMenu.classList.remove("menu_opened");
    body.classList.remove("body_locked");
  });
});
