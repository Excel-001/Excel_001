function Menu() {
  document.querySelector(".div2_nav").classList.toggle("hyt") 
}
function Theme() {
  document.querySelector(".light").classList.toggle("dark") 
  document.querySelector(".theme").classList.toggle("sun") 

}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
const observer = new IntersectionObserver(entries => {
entries.forEach(entry=>{
  if (entry.isIntersecting) {
    document.querySelectorAll(".setserv")[2].classList.add("fadeinleft");
    document.querySelectorAll(".setserv")[1].classList.add("fadeinleft");
    document.querySelectorAll(".setserv")[0].classList.add("fadeinright");
    
    
  }
})
})
observer.observe(document.querySelector(".whatido"))

      const obi = new IntersectionObserver(entries => {
        entries.forEach(entry=>{
          if (entry.isIntersecting) {
            document.querySelectorAll(".servicetext")[0].classList.add("fadeinleft");  
            document.querySelectorAll(".www")[0].classList.add("fadeinbottom");  
             
          }
        })
        })
obi.observe(document.querySelector(".mm"))

      const skills = new IntersectionObserver(entries => {
        entries.forEach(entry=>{
          if (entry.isIntersecting) {
            document.querySelectorAll(".timeless")[0].classList.add("fadeinleft");  
            document.querySelectorAll(".timeless")[1].classList.add("fadeinTop");  
            document.querySelectorAll(".timeless")[2].classList.add("fadeinbottom1");  
            document.querySelectorAll(".timeless")[3].classList.add("fadeinright");  
             
          }
        })
        })
skills.observe(document.querySelector(".kante"))

const contact = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      document.querySelectorAll(".divbform")[0].classList.add("fadeinTop");  
      document.querySelectorAll(".ifram")[0].classList.add("fadeinbottom1");  
      document.querySelectorAll(".contat")[0].classList.add("fadeinLeft");  
    }
  })
  })
contact.observe(document.querySelector(".contactset"))

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill in all fields.");
    return;
  }
  form.submit();
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}










var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}