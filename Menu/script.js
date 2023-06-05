const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});


// En este ejemplo, hemos creado un menú hamburguesa con un botón de menú (icono de hamburguesa) y una lista de elementos de menú. Al hacer clic en el botón de menú, se activará o desactivará la clase "active" en el menú, lo que mostrará u ocultará el menú en dispositivos móviles.

// El CSS proporciona el estilo visual del menú hamburguesa, con media queries para ajustar el diseño en dispositivos móviles.

// El JavaScript agrega un evento de clic al botón de menú y, al hacer clic, se alterna la clase "active" en el menú para mostrar u ocultar el menú desplegable.

// Espero que este ejemplo te sea útil para implementar un menú hamburguesa en tu proyecto. Si tienes alguna otra pregunta, ¡no dudes en preguntar!