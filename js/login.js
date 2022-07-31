var boton = document.querySelector(".header__button");
boton.onclick = armarIncioSesion;

function armarIncioSesion(){
	var seccionInicio = document.querySelector(".inicio-sesion");
	seccionInicio.style.display = "flex";

	eliminarElementos();
}

function eliminarElementos(){
	var botonLogin = document.querySelector(".header__button");
	var banner = document.querySelector(".banner");
	var sectionStarWars = document.querySelector(".star-wars");
	var sectionConsolas = document.querySelector(".consolas");
	var sectionDiversos = document.querySelector(".diversos");
	
	botonLogin.style.display = "none";
	banner.style.display = "none";
	sectionStarWars.style.display = "none";
	sectionConsolas.style.display = "none";
	sectionDiversos.style.display = "none";
}



