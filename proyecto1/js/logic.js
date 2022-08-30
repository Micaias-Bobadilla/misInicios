const idImagen1= document.getElementById("imagenTexto1")
const idSpanImagen1 = document.getElementById("spanImagenTexto1")

idImagen1.addEventListener("mouseover", mostrarTexto1)
idImagen1.addEventListener("mouseleave", borrarTexto1)


const idImagen2= document.getElementById("imagenTexto2")
const idSpanImagen2 = document.getElementById("spanImagenTexto2")

idImagen2.addEventListener("mouseover", mostrarTexto2)
idImagen2.addEventListener("mouseleave", borrarTexto2)

const idImagen3= document.getElementById("imagenTexto3")
const idSpanImagen3 = document.getElementById("spanImagenTexto3")

idImagen3.addEventListener("mouseover", mostrarTexto3)
idImagen3.addEventListener("mouseleave", borrarTexto3)

function mostrarTexto1(){
   
        idSpanImagen1.innerHTML = "ESTO ES EL TEXTO 1"
}

function borrarTexto1(){
    idSpanImagen1.innerHTML =""
}


function mostrarTexto2(){
   
        idSpanImagen2.innerHTML = "THIS IS SPARTAAAA!!!!"
}

function borrarTexto2(){
    idSpanImagen2.innerHTML =""
}

function mostrarTexto3(){
   
    idSpanImagen3.innerHTML = "HOLA MDAFAKA"
}

function borrarTexto3(){
idSpanImagen3.innerHTML =""
}