// Custom Scripts
// Custom scripts

function slider() {
  const container = document.querySelector('.slider-container');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.main-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
  });
}

slider();

