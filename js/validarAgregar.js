var nombreProduc = document.querySelector(".agregar__nombre");
var precioProduc = document.querySelector(".agregar__precio");
var categoriaProduc = document.querySelector(".agregar__categoria");
var descripcionProduc = document.querySelector(".agregado-producto__form--textarea");
var avisoNomProduc = document.querySelector(".aviso__nombreProduc");
var avisoPrecioProduc = document.querySelector(".aviso__precioProduc");
var avisoCateProduc = document.querySelector(".aviso__categoriaProduc");
var avisoDescripProduc = document.querySelector(".aviso__descripProduc");
var avisoAgregado = document.querySelector(".aviso__agregado");
var nombreProducBool = false;
var precioProducBool = false;
var cateProducBool = false;
var descripcionProducBool = false;


function validarNombreProduc(){
	if (nombreProduc.value.trim() == "") {
		nombreProducBool = false;
		avisoNomProduc.textContent = "Debe asignarle un nombre al producto que será agregado";
		nombreProduc.style.color = "#F33F33";		
	}
	else if (nombreProduc.value.length > 20) {
		nombreProducBool = false;
		avisoNomProduc.textContent = "El nombre del producto no puede contener más de 20 caracteres";
		nombreProduc.style.color = "#F33F33";
	}
	else{
		avisoNomProduc.textContent = "";
		nombreProduc.style.color = "#000000";
		nombreProducBool = true;
	}
}

function validarPrecioProduc(){
	var validacionPrecio = /^([0-9]+\,{1}[0-9]{2})$/;
	var verificarPrecio = new RegExp(validacionPrecio);

	if (precioProduc.value.trim() == "") {
		precioProducBool = false;
		avisoPrecioProduc.textContent = "Debe asignarle un precio al producto que será agregado";
		precioProduc.style.color = "#F33F33";		
	}
	else if (!verificarPrecio.test(precioProduc.value)) {
		precioProducBool = false;
		avisoPrecioProduc.textContent = "Solo puede ingresar dígitos en esta sección; es obligatorio el uso de la coma para establecer dos decimales";
		precioProduc.style.color = "#F33F33";
	}
	else{
		avisoPrecioProduc.textContent = "";
		precioProduc.style.color = "#000000";
		precioProducBool = true;
	}
}

function validarCateProduc(){
	if (categoriaProduc.value.trim() == "") {
		cateProducBool = false;
		avisoCateProduc.textContent = "Debe completar este campo con la categoría del nuevo producto";
		categoriaProduc.style.color = "#F33F33";		
	}
	else{
		avisoCateProduc.textContent = "";
		categoriaProduc.style.color = "#000000";
		cateProducBool = true;
	}	
}

function validarDescProduc(){
	if (descripcionProduc.value.trim() == "") {
		descripcionProducBool = false;
		avisoDescripProduc.textContent = "Debe completar este campo con la descripción del nuevo producto";
		descripcionProduc.style.color = "#F33F33";		
	}
	else if (descripcionProduc.value.length > 150) {
		descripcionProducBool = false;
		avisoDescripProduc.textContent = "La descripción del producto no puede contener más de 150 caracteres";
		descripcionProduc.style.color = "#F33F33";
	}
	else{
		avisoDescripProduc.textContent = "";
		descripcionProduc.style.color = "#000000";
		descripcionProducBool = true;
	}
}

function validarAgregadoProduc(event){
	if (nombreProducBool == false || precioProducBool == false || cateProducBool == false || descripcionProducBool == false) {
		event.preventDefault();
		validarNombreProduc();
		validarPrecioProduc();
		validarCateProduc();
		validarDescProduc();
	}
	else{
		event.preventDefault();
		var urlProduc = document.querySelector(".agregar__url").value;
		matchearDatos(nombreProduc,precioProduc,urlProduc,categoriaProduc);
	}
}