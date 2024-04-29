// /**
//  * SLIDER
//  */

// const sliders = document.querySelectorAll("[data-slider]");

// const initSlider = function(currentSlider) {

//   const sldierContainer = currentSlider.querySelector("[data-slider-container]");
//   const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
//   const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

//   let currentSlidePos = 0;

//   const moveSliderItem = function () {
//     sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
//   }

//   /**
//    * NEXT SLIDE
//    */

//   const slideNext = function () {
//     const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

//     if (slideEnd) {
//       currentSlidePos = 0;
//     } else {
//       currentSlidePos++;
//     }

//     moveSliderItem();
//   }

//   sliderNextBtn.addEventListener("click", slideNext);

//   /**
//    * PREVIOUS SLIDE
//    */

//    const slidePrev = function () {

//     if (currentSlidePos <= 0) {
//       currentSlidePos = sldierContainer.childElementCount - 1;
//     } else {
//       currentSlidePos--;
//     }

//     moveSliderItem();
//   }

//   sliderPrevBtn.addEventListener("click", slidePrev);

//   const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
//   if (dontHaveExtraItem) {
//     sliderNextBtn.style.display = "none";
//     sliderPrevBtn.style.display = "none";
//   }

// }

// for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



// /**
//  * ACCORDION
//  */

// const accordions = document.querySelectorAll("[data-accordion]");

// let lastActiveAccordion = accordions[0];

// const initAccordion = function (currentAccordion) {

//   const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

//   const expandAccordion = function () {
//     if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
//       lastActiveAccordion.classList.remove("expanded");
//     }

//     currentAccordion.classList.toggle("expanded");

//     lastActiveAccordion = currentAccordion;
//   }

//   accordionBtn.addEventListener("click", expandAccordion);

// }

// for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }


/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;
  let isAutoplayActive = true; // Flag to control autoplay

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

  const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

  // Autoplay functionality
  const autoplayInterval = setInterval(slideNext, 2000); // Change 3000 to desired interval in milliseconds

  // Pause autoplay on hover
  currentSlider.addEventListener("mouseover", () => {
    isAutoplayActive = false;
    clearInterval(autoplayInterval);
  });

  // Resume autoplay on mouseout
  currentSlider.addEventListener("mouseout", () => {
    if (isAutoplayActive) {
      autoplayInterval = setInterval(slideNext, 3000);
    }
  });

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }
