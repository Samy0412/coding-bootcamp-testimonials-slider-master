//Define the array of slides
const allSlides = [...document.querySelectorAll(".slide")];

//initialize variables
let newActiveSlide = null;
let activeSlide = null;
let newActivePicture = null;
let newActiveTestimonial = null;

const changeSlide = (forward) => {
  activeSlide = document.querySelector(".active");

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

  //add the active class and animation to the elements of the newActive slide
  newActiveSlide.classList.add("active");
  newActivePicture.classList.add("fade");
  newActiveTestimonial.classList.add("fade");
};

const prev = () => {
  changeSlide(false);
};

const next = () => {
  changeSlide(true);
};

//get the buttons

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    changeSlide(true);
  }
  if (event.keyCode === 37) {
    changeSlide(false);
  }
});
