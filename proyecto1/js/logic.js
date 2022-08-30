const idImagen = document.getElementById("textoImagen1")
const idSpanImagen = document.getElementById("spanImagenTexto")

idImagen.addEventListener("focusis", mostrarTexto)
idImagen.addEventListener("focusout", borrarTexto)

function mostrarTexto(){
   
        idSpanImagen.innerHTML = `Esto es un texto de prueba de imagen`
}

function borrarTexto(){
    idSpanImagen.innerHTML =""
}