document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Actualizar el año del copyright automáticamente
    const spanYear = document.getElementById("year");
    if (spanYear) {
        spanYear.textContent = new Date().getFullYear();
    }

    // 2. Validación del formulario de contacto
    const formulario = document.getElementById("formularioContacto");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita que la página recargue inmediatamente
            
            // Obtenemos los valores ingresados y les quitamos los espacios en blanco al inicio y final
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Expresión regular para verificar si el correo está bien escrito (tiene @ y un dominio)
            const formatoCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Verificación 1: Que ningún campo esté vacío
            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Error: Por favor, completá todos los campos del formulario antes de enviar.");
                return; // Detiene la ejecución aquí
            }

            // Verificación 2: Que el correo tenga el formato correcto
            if (!formatoCorreoValido.test(correo)) {
                alert("Error: El correo ingresado no es válido. Asegurate de que tenga el formato correcto (ejemplo@correo.com).");
                return; // Detiene la ejecución aquí
            }

            // Si pasó todas las validaciones exitosamente:
            alert("¡Mensaje enviado con éxito!\n\nGracias por escribirme, " + nombre + ". Pronto me pondré en contacto.");
            
            // Limpiamos los campos del formulario
            formulario.reset();
        });
    }

});