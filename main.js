document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const body = document.getElementById("body");

  burgerMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu_opened");
    body.classList.add("body_locked");
  });

  menuCloseBtn.addEventListener("click", () => {
    close_menu();
  });

  menu.addEventListener("click", (e) => {
    const menuLink = e.target.closest(".menu__link");

    if (!menuLink) {
      return;
    }

    close_menu();
  });

  function close_menu() {
    menu.classList.remove("menu_opened");
    document.body.classList.remove("body_locked");
  }
});
