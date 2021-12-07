var hamburgerMenu = document.querySelector("nav button:nth-of-type(2)");

hamburgerMenu.addEventListener("click", toonMenu);

function toonMenu() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("menuOpen");
    
}


 var zoeken = document.querySelector("nav button img");

 zoeken.addEventListener("click", toonZoekbalk);

 function toonZoekbalk() {
 var nav = document.querySelector("nav button input");
 nav.classList.toggle("zoekbalkOpen");
 console.log(nav.classlist)
    
 }

//  var formpje = document.querySelector("article section button");

//  formpje.addEventListener("click", toonFormpje);

//  function toonFormpje() {
//  var nav = document.querySelector("section form");
//  nav.classList.toggle("formpjeOpen");
//  console.log(nav.classlist);
//  }


