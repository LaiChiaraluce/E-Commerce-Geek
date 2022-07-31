var nombreProductos = [];
var bloqueProductos = [];
var productos = [];
var secciones = document.querySelectorAll(".section");
var aviso = document.querySelectorAll(".avisoFiltro");
var cortarAviso = false;

productos_star();
productos_consola();
productos_diversos().then(() =>{
    bloqueProductos = document.querySelectorAll(".bloque");
    productos = document.querySelectorAll(".nombre-produc");
    for(i = 0; i < productos.length; i++){
        nombreProductos[i] = productos[i].textContent;
    }
});

var barra = document.querySelector(".header__input");
barra.addEventListener("input", function(){
    for(i = 0; i < nombreProductos.length; i++){
        var expresion = new RegExp(barra.value, "i");
        if(barra.value.trim() == ''){
            bloqueProductos[i].classList.remove("invisible");
            cortarAviso = false;
        }
        else if(!expresion.test(nombreProductos[i])){
            bloqueProductos[i].classList.add("invisible");
        }
        else{
            bloqueProductos[i].classList.remove("invisible");
            cortarAviso = false;
        }
    }
    verificarFiltro();
})

function verificarFiltro(){
    if(cortarAviso == true){
        return;
    }
    else{
        for(i = 0; i < aviso.length; i++){
            aviso[i].textContent = "";
        }
        var contadorBooleano = 0;
        for(i = 0; i < bloqueProductos.length; i++){
            if(bloqueProductos[i].classList.item(1) == "invisible"){
                contadorBooleano++;
            }
        }
        if(contadorBooleano == bloqueProductos.length){
            for(i = 0; i < secciones.length; i++){
                aviso[i].textContent = "No se han encontrado resultados!";
                cortarAviso = true;
            }
        }
    }
}



