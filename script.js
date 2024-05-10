document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón
    var myButton = document.getElementById("myButton");

    // Obtener referencia al mensaje oculto
    var message = document.getElementById("message");

    // Agregar evento de clic al botón
    myButton.addEventListener("click", function() {
        // Mostrar el mensaje oculto
        message.style.display = "block";
    });
});
