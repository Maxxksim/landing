document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuOpenBtn = document.getElementById('burger-menu-opening-btn')
  const menu = document.getElementById('menu')
  const burgerMenuCloseBtn = document.getElementById('burger-menu-closing-btn')
  const body = document.getElementById('body')
  const prevBtn = document.getElementById('prev-btn')
  const nextBtn = document.getElementById('next-btn')
  const sliderFeed = document.getElementById('slider-feed')
  const slides = sliderFeed.children
  let slideIndex = 0

  burgerMenuOpenBtn.addEventListener('click', () => {
    burgerMenuOpenBtn.classList.add('burger-menu__opening-btn_hidden')
    burgerMenuCloseBtn.classList.add('burger-menu__closing-btn_active')
    menu.classList.add('header__menu_opened')
    body.classList.add('body_locked')
  })

  burgerMenuCloseBtn.addEventListener('click', () => {
    closeMenu()
  })

  menu.addEventListener('click', (e) => {
    const menuLink = e.target.closest('.menu__link')

    if (!menuLink) {
      return
    }

    closeMenu()
  })

  function closeMenu () {
    burgerMenuOpenBtn.classList.remove('burger-menu__opening-btn_hidden')
    burgerMenuCloseBtn.classList.remove('burger-menu__closing-btn_active')
    menu.classList.remove('header__menu_opened')
    document.body.classList.remove('body_locked')
  }

  nextBtn.addEventListener('click', () => {
    if (slideIndex + 1 === slides.length) {
      return
    }

    slides[slideIndex].classList.remove('about__slide_active')
    slides[++slideIndex].classList.add('about__slide_active')
    sliderFeed.style.transform = `translateX(-${slideIndex * 100}%)`
  })

  prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
      return
    }

    slides[slideIndex].classList.remove('about__slide_active')
    slides[--slideIndex].classList.add('about__slide_active')
    sliderFeed.style.transform = `translateX(-${slideIndex * 100}%)`
  })
})
