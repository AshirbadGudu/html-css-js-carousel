const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = document.querySelectorAll("[data-carousel-slide]");
    const activeSlide = document.querySelector("[data-active]");
    const activeSlideIndex = [...slides].indexOf(activeSlide);
    const nextSlideIndex = activeSlideIndex + offset;
    if (nextSlideIndex < 0) {
      slides[slides.length + nextSlideIndex].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    if (nextSlideIndex >= slides.length) {
      slides[0].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    slides[nextSlideIndex].dataset.active = true;
    return delete activeSlide.dataset.active;
  });
});
