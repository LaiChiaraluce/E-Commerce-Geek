var botonAdmin = document.querySelector(".inicio-sesion__form--button");
botonAdmin.addEventListener("click", function(){
	if (mailBool == true && contraBool == true) {
		borrarInicioSesion(event);
		mostrarGaleria();
		cambiarContenidoGaleria();
	}
})

function borrarInicioSesion(event){
	event.preventDefault();
	var inicio = document.querySelector(".inicio-sesion");
	inicio.style.display = "none";
}

function mostrarGaleria(){
	display = "inline";
	mostrarStarTodos(display);
	mostrarConsolasTodos(display);
	mostrarDiversosTodos(display);
	var bttnTodos = document.querySelector(".todo-section__button");
	bttnTodos.style.display = "none";
}

function cambiarContenidoGaleria(){
	var botonLogin = document.querySelector(".header__button");
	botonLogin.style.display = "none";

	var encabezadoEdit = document.querySelector(".todo-section__encabezado");
	encabezadoEdit.style.display = "flex";
}

