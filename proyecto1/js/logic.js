const idImagen = document.getElementById("imagenTexto1")
const idSpanImagen = document.getElementById("spanImagenTexto")

idImagen.addEventListener("focusin", mostrarTexto)
idImagen.addEventListener("focusout", borrarTexto)

function mostrarTexto(){
   
        idSpanImagen.innerHTML = `Esto es un texto de prueba de imagen`
}

function borrarTexto(){
    idSpanImagen.innerHTML =""
}