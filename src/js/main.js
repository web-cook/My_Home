document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      376: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  const menuIcon = document.querySelector('.menu-icon'),
        menuBody = document.querySelector('.navbar-collapse');

  menuIcon.addEventListener('click', function() {
    this.classList.toggle('_active');
    menuBody.classList.toggle('show');
  })
});