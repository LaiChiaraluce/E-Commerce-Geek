function eliminarProduc(seccion,id){
    return fetch(`http://localhost:3000/${seccion}/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/eliminado.html";
    })
    .catch(() => {
        window.location.href = "file:///C:/Users/Usuario/Desktop/E-commerce-main/screens/error.html";
    });
}


