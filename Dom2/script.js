// Propiedad innerText
let tituloElement = document.getElementById("titulo");
console.log(tituloElement.innerText); // Obtiene el texto "Título de ejemplo"

// Propiedad innerHTML
let parrafoElement = document.getElementById("parrafo");
console.log(parrafoElement.innerHTML); // Obtiene el contenido HTML del párrafo

// Propiedad src
let imagenElement = document.getElementById("imagen");
console.log(imagenElement.src); // Obtiene la URL de la imagen

// Propiedad href
let enlaceElement = document.getElementById("enlace");
console.log(enlaceElement.href); // Obtiene la URL del enlace

// Propiedad classList y métodos para agregar, quitar y alternar clases
let botonAgregarClase = document.getElementById("agregar-clase");
let botonQuitarClase = document.getElementById("quitar-clase");
let botonAlternarClase = document.getElementById("alternar-clase");
let botonCambiarTamaño = document.getElementById("cambiar-tamaño");

// let contenidoElement = document.getElementById("contenido");

botonAgregarClase.addEventListener("click", function () {
    parrafoElement.classList.add("red-title");
});

botonQuitarClase.addEventListener("click", function () {
    parrafoElement.classList.remove("red-title");
});

botonAlternarClase.addEventListener("click", function () {
    parrafoElement.classList.toggle("active");
});

botonCambiarTamaño.addEventListener("click", function () {
    imagenElement.classList.toggle("large-image");
});
