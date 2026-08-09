// main.js - Lógica y comportamiento de la página

// Esperamos a que todo el HTML se cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    
    console.log("¡El portafolio se cargó correctamente y JavaScript está funcionando!");

    // 1. Actualizar el año del copyright automáticamente
    const spanYear = document.getElementById("year");
    if (spanYear) {
        const currentYear = new Date().getFullYear();
        spanYear.textContent = currentYear;
    }

    // 2. Prevenir que la página recargue al intentar enviar el formulario
    // Como todavía no hay backend, simulamos que se envió el mensaje.
    const formulario = document.getElementById("formularioContacto");
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita que la página se actualice
            
            // Muestra una alerta (puedes cambiarlo por un modal más adelante)
            alert("¡Gracias por tu mensaje! (Nota: Este formulario es de prueba y requiere configuración en el servidor para enviar correos reales).");
            
            // Limpia los campos del formulario
            formulario.reset();
        });
    }

});