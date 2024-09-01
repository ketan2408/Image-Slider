let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;

// Function to show the next slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("show");
    if (i === index) {
      slide.classList.add("show");
    }
  });
}

// Show the initial slide
showSlide(changeSlide);

// Next button event listener
nextBtn.addEventListener("click", function() {
  changeSlide = (changeSlide + 1) % slides.length;
  showSlide(changeSlide);
});

// Previous button event listener
prevBtn.addEventListener('click', function() {
  changeSlide = (changeSlide - 1 + slides.length) % slides.length;
  showSlide(changeSlide);
});

// Automatic slide change every 5 seconds
setInterval(function() {
  changeSlide = (changeSlide + 1) % slides.length;
  showSlide(changeSlide);
}, 4000); // 5000 milliseconds = 5 seconds
