// Hamburgermenu
var hamburgerMenu = document.querySelector("nav button:nth-of-type(2)");

hamburgerMenu.addEventListener("click", toonMenu);

function toonMenu() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("menuOpen");
    
}

// Zoekbalk
 var zoeken = document.querySelector("nav button:nth-of-type(1)");

 zoeken.addEventListener("click", toonZoekbalk);

 function toonZoekbalk() {
 var nav = document.querySelector("nav input");
 nav.classList.toggle("zoekbalkOpen");
 console.log(nav.classlist)
    
 }

 
// Scroll animaties
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
