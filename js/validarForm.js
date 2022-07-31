var nombre = document.querySelector(".nombre");
var mensaje = document.querySelector(".mensaje");
var avisoNombre = document.querySelector(".aviso__nombre");
var avisoMsj = document.querySelector(".aviso__mensaje");
var nombreBool = false;
var mensajeBool = false;

function validarNombre(){
	if (nombre.value.trim() == "") {
		nombreBool = false;
		avisoNombre.textContent = "Debe completar este campo con su nombre";
		nombre.style.color = "#F33F33";
	}
	else if (nombre.value.length > 40) {
		nombreBool = false;
		avisoNombre.textContent = "El nombre no debe superar los 40 caracteres";
		nombre.style.color = "#F33F33";	
	}
	else{
		avisoNombre.textContent = "";
		nombre.style.color = "#000000";
		nombreBool = true;
	}
}

function validarMensaje(){
	if (mensaje.value.trim() == "") {
		mensajeBool = false;
		avisoMsj.textContent = "Debe completar este campo con un mensaje";
		mensaje.style.color = "#F33F33";
	}
	else if (mensaje.value.length > 120) {
		mensajeBool = false;
		avisoMsj.textContent = "El nombre no debe superar los 120 caracteres";
		mensaje.style.color = "#F33F33";	
	}
	else{
		avisoMsj.textContent = "";
		mensaje.style.color = "#000000";
		mensajeBool = true;
	}
}

function validarForm(event){
	if (nombreBool == false || mensajeBool == false) {
		event.preventDefault();
		validarNombre();
		validarMensaje();
	}
}