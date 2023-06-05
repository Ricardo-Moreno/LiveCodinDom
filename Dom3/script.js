// Ejemplo 1: Cambiar el texto de los párrafos

// Seleccionar todos los elementos <p> del documento
const parrafos = document.querySelectorAll('p');

// Iterar sobre cada párrafo y cambiar su texto
parrafos.forEach(function (parrafo) {
  parrafo.innerText = '¡Esto es Código Latam!';
});


// Ejemplo 2: Alternar una clase al hacer clic en un párrafo

// Seleccionar un párrafo específico con el ID "ejemplo"
const parrafoEjemplo = document.querySelector('#ejemplo');

// Agregar un evento de escucha para el clic en el párrafo
parrafoEjemplo.addEventListener('click', function (e) {
  // Alternar la presencia de la clase "parrafo-modificado" en el párrafo
  e.target.classList.toggle('parrafo-modificado');
});
