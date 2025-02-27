import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  centeredSlides: true,

  slidesPerView: 1.5,
  slidesPerGroup: 1,
  spaceBetween: 8,
  loop: true,
  speed: 600,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.open-right',
    prevEl: '.open-left',
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1440: {
    
      slidesPerView: 3,
      spaceBetween: 68,
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      if (window.innerWidth >= 1440) {
        this.slides.forEach((slide) => {
          slide.style.transform = 'scale(1)';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1.3) translateY(10%)';
      } else {
        this.slides.forEach((slide) => {
          slide.style.transform = 'scale(1)';
        });
      }
    },
    init: function () {
      if (window.innerWidth >= 1440) {
        this.slides.forEach((slide) => {
          slide.style.transition = 'transform 0.6s';
        });
        this.slides[this.activeIndex].style.transform = 'scale(1.3)';
      } else {
        this.slides.forEach((slide) => {
          slide.style.transition = 'transform 0.6s';
          slide.style.transform = 'scale(1)';
        });
      }
    },
  },
});