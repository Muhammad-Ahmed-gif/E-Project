const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add("dark")
    }


modeToggle.addEventListener("click", ()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "Light-mode");
    }else{
        localStorage.setItem("mode" , "dark-mode");
    }
})

    searchToggle.addEventListener("click", ()=>{
    searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") &&  !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    };
})

document.addEventListener('DOMContentLoaded', () => {
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.move').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.move').prepend(items[items.length - 1])
})

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.Gallery .data');
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible'); 
        }
      });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
  });


const aboutSection = document.querySelector('.About');
const cards = document.querySelectorAll('.About .card');


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}


window.addEventListener('scroll', function() {
  if (isInViewport(aboutSection)) {
    cards.forEach(card => {
      card.classList.add('visible');
    });
  }
});

