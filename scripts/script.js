var hamburgerMenu = document.querySelector("nav button");

hamburgerMenu.addEventListener("click", toonMenu);

function toonMenu() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("menuOpen");
    
}