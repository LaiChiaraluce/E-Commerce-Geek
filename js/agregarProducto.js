var seccionAgregar = document.querySelector(".agregado-producto");
var botonAgregado = document.querySelector(".boton-agregar");
botonAgregado.addEventListener("click", ()=>{
	armarSeccionAgregado();
})

function armarSeccionAgregado(){
	seccionAgregar.style.display = "flex";
	totalSection.style.display = "none";
	agregarBotonMenu();
}

function agregarBotonMenu(){
	var botonMenu = document.querySelector(".header__button--admin");
	botonMenu.style.display = "inline";
	botonMenu.addEventListener("click", function(){
		botonMenu.style.display = "none";
		seccionAgregar.style.display = "none";
		totalSection.style.display = "flex";
	})
}
