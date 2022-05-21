const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

// on submit event
function submitForm(e) {
  swal({
    title: "Success!",
    text: "Your message has been sent!",
    icon: "success",
  });
  document.getElementById("form-contact").reset();
  e.preventDefault();
}

// on click order event
function order(e) {
  swal({
    title: "Hey!",
    text: "Currently, this feature cannot be used.",
    icon: "info",
  });
  e.preventDefault();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}