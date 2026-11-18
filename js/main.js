document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const menu = document.getElementById("menu");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const body = document.getElementById("body");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const sliderFeed = document.getElementById("slider-feed");
  const slides = sliderFeed.children;
  let slideIndex = 0;
  let feedPosition = 0;

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

  nextBtn.addEventListener("click", () => {
    if (slideIndex + 1 === slides.length) {
      return;
    }

    feedPosition += 518 * 3;
    slides[slideIndex].classList.remove("about__slide_active");
    slides[++slideIndex].classList.add("about__slide_active");
    sliderFeed.style.transform = `translateX(-${(feedPosition / (518 * slides.length)) * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      return;
    }

    feedPosition -= 518 * 3;
    slides[slideIndex].classList.remove("about__slide_active");
    slides[--slideIndex].classList.add("about__slide_active");
    sliderFeed.style.transform = `translateX(-${(feedPosition / (518 * slides.length)) * 100}%)`;
  });
});
