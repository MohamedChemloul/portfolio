import AOS from "aos";
import "aos/dist/aos.css";
import "@iconify/iconify";
import emailjs from '@emailjs/browser';


AOS.init();

// Toggle Navbar
let menIcon = document.querySelector(".menu-icon");
let links = document.querySelector(".links");

menIcon.addEventListener("click", () => {
  links.classList.toggle("open");
  AOS.refresh();
});

// Light Mode
const toggleBtn = document.getElementById("dark-mode");
const toggleBtnLight = document.getElementById("light-mode");
const texts = document.querySelectorAll(
  "h1, h2, h3, a, p, ul, input, textarea"
);
const mobLinks = document.querySelector(".links");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

toggleBtn.addEventListener("click", () => {
  switchTheme("light");
});

toggleBtnLight.addEventListener("click", () => {
  switchTheme("dark");
});

function switchTheme(mode) {
  const isLight = mode === "light";

  // Toggle visibility of buttons
  toggleBtn.classList.toggle("hidden", isLight);
  toggleBtnLight.classList.toggle("hidden", !isLight);

  // Toggle body class
  document.body.classList.toggle("light", isLight);

  // Text color
  texts.forEach((text) => {
    text.style.color = isLight ? "#3f3e3e" : "";
  });

  // Backgrounds
  const bgColor = isLight ? "#eaeaea" : "#000";
  nav.style.backgroundColor = bgColor;
  footer.style.backgroundColor = bgColor;
  mobLinks.style.backgroundColor = bgColor;
}

const topBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (scrollY >= 800) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Preloader

const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.width = "0%";
  loader.style.opacity = "0";
});

// Form 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_927itk4',     
          'template_q1dzijr',    
          form,
          'qUCQIx3K82K4xnFRn'      
        )
        .then(
          () => {
            emailSent()
            form.reset();
          },
          (error) => {
            emailNotSent()
          }
        );
    });
  } else {
    console.error('Form with id "contact" not found.');
  }
});

function emailSent(){
  document.querySelector('.mail-sent').classList.remove('hidden');
            setTimeout(() => {
              document.querySelector('.mail-sent').classList.add('hidden');
            }, 3000);
}
function emailNotSent(){
  document.querySelector('.mail-not-sent').classList.remove('hidden');
            setTimeout(() => {
              document.querySelector('.mail-not-sent').classList.add('hidden');
            }, 3000);
}
