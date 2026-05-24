const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');

if (track && next && prev && carousel) {
  let index = 0;
  const total = track.children.length;
  const gap = parseInt(getComputedStyle(track).gap, 10) || 0;
  let autoSlide;

  function updateCarousel() {
    const width = track.children[0].offsetWidth + gap;
    track.style.transform = `translate3d(-${index * width}px, 0, 0)`;
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateCarousel();
  }

  next.addEventListener('click', nextSlide);

  prev.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarousel();
  });

  function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  updateCarousel();
  startAutoSlide();
}

/* FAMILY IMAGE HOVER EFFECT */
document.addEventListener('DOMContentLoaded', () => {
  const familyImg = document.querySelector('.madeby-img');
  if (familyImg) {
    const originalSrc = familyImg.src;
    
    familyImg.addEventListener('mouseenter', () => {
      familyImg.src = 'images/cat.png';
    });
    
    familyImg.addEventListener('mouseleave', () => {
      familyImg.src = originalSrc;
    });
  }
});
