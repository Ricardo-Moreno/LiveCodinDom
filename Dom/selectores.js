// Utilizando querySelector() para seleccionar un elemento
let h1Element = document.querySelector("h1");
h1Element.style.color = "red"; // Cambia el color del título a rojo

// Utilizando querySelectorAll() para seleccionar varios elementos
let parrafos = document.querySelectorAll(".parrafo");
parrafos[1].style.fontSize = "60px"; // Cambia el tamaño de fuente de los párrafos


// Utilizando querySelector() para seleccionar un elemento por su id
let p3Element = document.querySelector("#parrafoAmarillo");
p3Element.style.backgroundColor = "red"; // Cambia el fondo del tercer párrafo a amarillo

const persona = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    promedio: 8.5,
    apellido: "perez"
}

let datos = [1, true, "string", 4]






const estudiantes = [
    {
        nombre: "Juan",
        edad: 20,
        carrera: "Ingeniería",
        promedio: 8.5
    },
    {
        nombre: "María",
        edad: 22,
        carrera: "Medicina",
        promedio: 9.2
    },
    {
        nombre: "Carlos",
        edad: 21,
        carrera: "Diseño",
        promedio: 7.8
    }
];



estudiantes.forEach(function (estudiante) {
    console.log(estudiante)
});




