function crearBloque(seccion,id,url,nombre,precio){
    var bloque = document.createElement("div");
    bloque.classList.add("bloque");
    
    var contenido = 
        `<div class="cajas" id=${id} style="background-image: url(${url})">
            <img src="../E-commerce-main/assets/imagenes/eliminar.png" alt="icono-eliminar" class="vectores ${seccion} eliminar" id=${id}></img>
            <a href="file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/edicion_produc.html?seccion=${seccion}&id=${id}"><img src="../E-commerce-main/assets/imagenes/editar.png" alt="icono-editado" class="vectores ${seccion} editar" id=${id}></img></a>
         </div>  
         <p class="nombre-produc">${nombre}</p>
         <p class="precio">
            $${precio}
         </p>
         <p class="ver-produc">
            Ver producto
         </p>`;
    
    bloque.innerHTML = contenido;
    
    return bloque;
}

var galeriaStar = document.querySelector(".star-wars__galeria");
var galeriaConsolas = document.querySelector(".consolas__galeria");
var galeriaDiversos = document.querySelector(".diversos__galeria");

const productos_star = () =>{
    return fetch("http://localhost:3000/star-wars").then((respuesta) => respuesta.json());
}

productos_star().then((response) =>{
    var bloques_star = [];
    for(i = 0; i < 6; i++){
        bloques_star[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
        galeriaStar.appendChild(bloques_star[i]);
    } 
})

const productos_consola = () =>{
    return fetch("http://localhost:3000/consolas").then((respuesta) => respuesta.json());
}

productos_consola().then((response) =>{
    var bloques_consolas = [];
    for(i = 0; i < 6; i++){
        bloques_consolas[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
        galeriaConsolas.appendChild(bloques_consolas[i]);
    } 
})

const productos_diversos = () =>{
    return fetch("http://localhost:3000/diversos").then((respuesta) => respuesta.json())
}

productos_diversos().then((response) =>{
    var bloques_diversos = [];
    for(i = 0; i < 6; i++){
        bloques_diversos[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
        galeriaDiversos.appendChild(bloques_diversos[i]);
    }
})

///////////////////////////////////////////////////////////////////////////
                            //SECCION VER-TODO//
///////////////////////////////////////////////////////////////////////////           

var totalSection = document.querySelector(".todo-section");
var totalSectionContainer = document.querySelector(".todo-section__container");
var secciones = document.querySelectorAll(".section");
var botonLogin = document.querySelector(".header__button");
var titulo = document.querySelector(".todo-section__titulo");
var arrId = [];
var display = "none";

function mostrarStarTodos(){
    productos_star().then((response) =>{
        botonLogin.style.display = "none";
        totalSection.style.display = "flex";
        var bloques_star_total = [];
        for(i = 0; i < secciones.length; i++){
            secciones[i].remove();
        }
        for(i = 0; i < response.length; i++){
            arrId.push(response[i].id);
            bloques_star_total[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
            totalSectionContainer.appendChild(bloques_star_total[i])
        }
        titulo.textContent = "Star Wars";
    })
}

function mostrarConsolasTodos(){
    productos_consola().then((response) =>{
        botonLogin.style.display = "none";
        totalSection.style.display = "flex";
        var bloques_consolas_total = [];
        for(i = 0; i < secciones.length; i++){
            secciones[i].remove();
        }
        for(i = 0; i < response.length; i++){
            arrId.push(response[i].id);
            bloques_consolas_total[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
            totalSectionContainer.appendChild(bloques_consolas_total[i])
        }
        titulo.textContent = "Consolas";
    })
}

function mostrarDiversosTodos(display){
    productos_diversos().then((response) =>{
        botonLogin.style.display = "none";
        totalSection.style.display = "flex";
        var bloques_diversos_total = [];
        for(i = 0; i < secciones.length; i++){
            secciones[i].remove();
        }
        for(i = 0; i < response.length; i++){
            arrId.push(response[i].id);
            bloques_diversos_total[i] = crearBloque(response[i].seccion,response[i].id,response[i].url,response[i].nombre,response[i].precio);
            totalSectionContainer.appendChild(bloques_diversos_total[i])
        }
        titulo.textContent = "Diversos";
        var vectores = document.querySelectorAll(".vectores");
        for(i = 0; i < vectores.length; i++){
            vectores[i].style.display = display;
        }
        if(display == "inline"){
            titulo.textContent = "";
            var arrBloques = document.querySelectorAll(".bloque");
            var leyendas = document.querySelectorAll(".ver-produc");
            for(i = 0; i < leyendas.length; i++){
                leyendas[i].textContent = arrId[i];
                arrBloques[i].style.height = "290px";
            }

        }
        //FUNCION PARA EL DELETE
        var vectoresEliminar = document.querySelectorAll(".eliminar");
        for(i = 0; i < vectoresEliminar.length; i++){
            vectoresEliminar[i].addEventListener("click", (event)=>{
                var id = event.target.id;
                var section = event.target.classList.item(1);
                eliminarProduc(section,id);
            });		
        }
    })
}


var todoStar = document.querySelector(".star-wars__link");
todoStar.addEventListener("click", function(){
    mostrarStarTodos(display);
});

var todoConsolas = document.querySelector(".consolas__link");
todoConsolas.addEventListener("click", function(){
    mostrarConsolasTodos(display);
});

var todoDiversos = document.querySelector(".diversos__link");
todoDiversos.addEventListener("click", function(){
    mostrarDiversosTodos(display);
});

