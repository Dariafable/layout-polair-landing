// Swiper functions
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  mousewheel: {
    invert: true,
    sensitivity: 2,
    thresholdDelta: 1,
    forceToAxis: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
