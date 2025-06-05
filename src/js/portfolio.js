import AOS from 'aos';
import 'aos/dist/aos.css';
import '@iconify/iconify';


AOS.init();



let menIcon = document.querySelector('.menu-icon');
let links = document.querySelector('.links')

menIcon.addEventListener('click',()=>{
    links.classList.toggle('open');
    AOS.refresh();
})


const toggleBtn = document.getElementById("dark-mode");
const toggleBtnLight = document.getElementById("light-mode");
const texts = document.querySelectorAll("h1, h2, h3, a, p, ul, input, textarea");
const mobLinks = document.querySelector('.links');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
  switchTheme('light');
});

toggleBtnLight.addEventListener('click', () => {
  switchTheme('dark');
});

function switchTheme(mode) {
  const isLight = mode === 'light';

  // Toggle visibility of buttons
  toggleBtn.classList.toggle('hidden', isLight);
  toggleBtnLight.classList.toggle('hidden', !isLight);

  // Toggle body class
  document.body.classList.toggle('light', isLight);

  // Text color
  texts.forEach(text => {
    text.style.color = isLight ? '#3f3e3e' : '';
  });

  // Backgrounds
  const bgColor = isLight ? '#fff' : '#000';
  nav.style.backgroundColor = bgColor;
  mobLinks.style.backgroundColor = bgColor;
}


const topBtn = document.querySelector('.to-top')

window.addEventListener('scroll',()=>{
    if(scrollY >= 800){
        topBtn.classList.remove('hidden')
    } else{
        topBtn.classList.add('hidden')
    }
})

topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior : 'smooth'
    })
})


