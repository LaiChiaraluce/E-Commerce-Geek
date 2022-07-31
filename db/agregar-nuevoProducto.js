function matchearDatos(nombre,precio,url,categoria){
    var retornoFetch;
    var section;
    nombre = nombre.value;
    precio = precio.value;
    categoria = categoria.value;
    if(categoria.toLowerCase() == "star wars"){
        section = "star-wars";
        retornoFetch = "http://localhost:3000/star-wars";
    }
    else if(categoria.toLowerCase() == "consolas"){
        section = "consolas";
        retornoFetch = "http://localhost:3000/consolas";
    }
    else if(categoria.toLowerCase() == "diversos"){
        section = "diversos";
        retornoFetch = "http://localhost:3000/diversos";
    }
    agregarDb(retornoFetch,url,nombre,precio,section);
}

function agregarDb(retornoFetch,url,nombre,precio,seccion){
    fetch(retornoFetch,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({url,nombre,precio,id:uuid.v4(),seccion}),
    })
    .then(() => {
        window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/registro_exitoso.html";
    })
    .catch(() => {
        window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/error.html";
    });
}

