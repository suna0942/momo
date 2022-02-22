new Swiper ('.mainVisual', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});
