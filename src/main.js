//Define the array of slides
const allStudents = [
  {
    name: "Tanya Sinclair",
    title: "UX Engineer",
    testimonial:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    picture: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    title: "Junior Front-End Developer",
    testimonial:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    picture: "./images/image-john.jpg",
  },
];

//initialize variables
let newActiveStudent = null;
let activeStudent = allStudents[0];

const picture = document.getElementById("picture");
const testimonial = document.querySelector(".slide__testimonial p");
const studentName = document.querySelector(".student h5");
const studentTitle = document.querySelector(".student p");

const changeSlide = (forward) => {
  // console.log(activeStudent);
  picture.classList.remove("fade");
  const activeStudentIndex = allStudents.indexOf(activeStudent);
  if (forward) {
    newActiveStudent =
      allStudents[(activeStudentIndex + 1) % allStudents.length];
  } else {
    newActiveStudent =
      allStudents[
        (activeStudentIndex - 1 + allStudents.length) % allStudents.length
      ];
  }
  activeStudent = newActiveStudent;
  picture.classList.add("fade");
  picture.src = activeStudent.picture;
  testimonial.innerHTML = activeStudent.testimonial;
  studentName.innerHTML = activeStudent.name;
  studentTitle.innerHTML = activeStudent.title;
};

const prev = () => {
  changeSlide(false);
};

const next = () => {
  changeSlide(true);
};
