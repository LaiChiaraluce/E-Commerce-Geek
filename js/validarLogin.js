var mail = document.querySelector(".login__mail");
var contra = document.querySelector(".login__contra");
var boton = document.querySelector(".inicio-sesion__form--button"); 
var avisoMail = document.querySelector(".aviso__mail");
var avisoContra = document.querySelector(".aviso__contra");
var avisoIngreso = document.querySelector(".aviso__ingreso");
var mailBool = false;
var contraBool = false;
var ingresoMail = false;
var ingresoContra = false;
var mailUsuario = "estanislaochiaraluce@gmail.com";
var contraUsuario = "AluraLatam";

function validarMail(){
	if (mail.value.trim() == "") {
		mailBool = false;
		avisoMail.textContent = "Debe completar este campo con su mail";
		mail.style.color = "#F33F33";
	}
	else if(mail.value != mailUsuario){
		mailBool = false;
		ingresoMail = false;
		avisoMail.textContent = "";
		mail.style.color = "#000000";
	}
	else{
		avisoMail.textContent = "";
		mail.style.color = "#000000";
		mailBool = true;
		ingresoMail = true;
	}
}

function validarContra(){
	if (contra.value.trim() == "") {
		contraBool = false;
		avisoContra.textContent = "Debe completar este campo con su contraseña";
		contra.style.color = "#F33F33";
	}
	else if(contra.value != contraUsuario){
		contraBool = false;
		ingresoContra = false;
		avisoContra.textContent = "";
		contra.style.color = "#000000";
	}
	else{
		avisoContra.textContent = "";
		contra.style.color = "#000000";
		contraBool = true;
		ingresoContra = true;
	}
}

function validarLogin(event){
	if (mailBool == false || contraBool == false) {
		event.preventDefault();
		validarMail();
		validarContra();
	}
	if(contra.value != "" && mail.value != ""){
		if (ingresoMail == false && ingresoContra == false) {
			avisoIngreso.textContent = "Los datos ingresados no son válidos";
		}
		else if(ingresoMail == false){
			avisoIngreso.textContent = "El mail ingresado no es válido";
		}
		else if(ingresoContra == false){
			avisoIngreso.textContent = "La contraseña ingresada no es válida";
		}
	}
}

