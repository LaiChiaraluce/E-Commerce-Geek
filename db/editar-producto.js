var url = new URL(window.location);
var seccionURL = (url.searchParams.get("seccion"));
var idURL = (url.searchParams.get("id"));
var avisoNombre = document.querySelector(".nuevo-nombre__aviso");
var avisoPrecio = document.querySelector(".nuevo-precio__aviso");
var avisoURL = document.querySelector(".nueva-url__aviso");

                //OBTENGO Y TRABAJO CON LOS DATOS PASADOS POR URL//

const obtenerInfo = () =>{
    var nuevoNombre = document.querySelector(".nuevo-nombre");
    var nuevoPrecio = document.querySelector(".nuevo-precio");
    var nuevaUrl = document.querySelector(".nueva-url");

    detalleProducto(seccionURL, idURL).then((seccionURL) => {
        nuevoNombre.value = seccionURL.nombre;
        nuevoPrecio.value = seccionURL.precio;
        nuevaUrl.value = seccionURL.url;
    })
}

const detalleProducto = (seccionURL,idURL) =>{
    return fetch(`http://localhost:3000/${seccionURL}/${idURL}`).then((respuesta) => respuesta.json());
}

obtenerInfo();

                    //VALIDACIONES//

function validarNuevoNombre(){
    var editNombre = document.querySelector(".nuevo-nombre").value;
    if(editNombre == ""){
        avisoNombre.textContent = "Debe colocar un nombre al producto";
    }
    else{
        avisoNombre.textContent = "";
    }
    return editNombre;
}

function validarNuevoPrecio(){
    var validacionPrecio = /^([0-9]+\,{1}[0-9]{2})$/;
	var verificarPrecio = new RegExp(validacionPrecio);
    var editPrecio = document.querySelector(".nuevo-precio").value;
    if(editPrecio == ""){
        avisoPrecio.textContent = "Debe colocar un precio al producto";
    }
    else if(!verificarPrecio.test(editPrecio)){
        avisoPrecio.textContent = "Solo puede ingresar dígitos en esta sección; es obligatorio el uso de la coma para establecer dos decimales";
    }
    else{
        avisoPrecio.textContent = "";
    }
    return editPrecio;
}

function validarNuevaImagen(){
    var editURL = document.querySelector(".nueva-url").value;
    if(editURL == ""){
        avisoURL.textContent = "Debe agregar la URL de la nueva imagen del producto";
    }
    else{
        avisoURL.textContent = "";
    }
}

                    //EDICION DEL PRODUCTO//

var bttnForm = document.querySelector(".bttn-edit");
bttnForm.addEventListener("click", (event) => {
    event.preventDefault(); 
    editNombre = validarNuevoNombre();
    editPrecio = validarNuevoPrecio();
    var editUrl = document.querySelector(".nueva-url").value;
    if(avisoNombre.textContent == "" && avisoPrecio.textContent == "" && avisoURL.textContent == ""){
        actualizarProducto(editNombre,editPrecio,editUrl,seccionURL,idURL)
        .then(() => {
            window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/edicion.html";
        })
        .catch(() => {
            window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/error.html";
        });
    }
    else{
        return
    }
});

const actualizarProducto = (nombre,precio,url,seccion,id) => {
    return fetch(`http://localhost:3000/${seccion}/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre,precio,url,seccion}),
    })
}
