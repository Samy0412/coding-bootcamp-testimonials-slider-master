//Define the array of slides
const allSlides = [...document.querySelectorAll(".slide")];

//initialize variables
let newActiveSlide = null;
let activeSlide = null;
let newActivePicture = null;
let newActiveTestimonial = null;

const changeSlide = (forward) => {
  activeSlide = document.querySelector(".active");
  activePicture = activeSlide.querySelector(".picture");
  activeTestimonial = activeSlide.querySelector(".slide__testimonial");
  const activeSlideIndex = allSlides.indexOf(activeSlide);
  if (forward) {
    newActiveSlide = allSlides[(activeSlideIndex + 1) % allSlides.length];
  } else {
    newActiveSlide =
      allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
  }
  //get the elements we want to animate
  newActivePicture = newActiveSlide.querySelector(".picture");
  newActiveTestimonial = newActiveSlide.querySelector(".slide__testimonial");

  //remove the former classes added
  activeSlide.classList.remove("active");
  activePicture.classList.remove("slideInRight", "slideInLeft");
  activeTestimonial.classList.remove("slideInRight", "slideInLeft");
  newActivePicture.classList.remove("slideOutRight", "slideOutLeft");
  newActiveTestimonial.classList.remove("slideOutRight", "slideOutLeft");

  //add the active class and animation to the elements of the newActive slide
  newActiveSlide.classList.add("active");
  activePicture.classList.add(forward ? "slideOutLeft" : "slideOutRight");
  activeTestimonial.classList.add(forward ? "slideOutLeft" : "slideOutRight");
  newActivePicture.classList.add(forward ? "slideInRight" : "slideInLeft");
  newActiveTestimonial.classList.add(forward ? "slideInRight" : "slideInLeft");
};

const prev = () => {
  changeSlide(false);
};

const next = () => {
  changeSlide(true);
};
