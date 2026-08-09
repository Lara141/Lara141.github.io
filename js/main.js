document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Actualizar año automático en el Footer
    const spanYear = document.getElementById("year");
    if (spanYear) {
        spanYear.textContent = new Date().getFullYear();
    }

    // 2. Validación del Formulario de Contacto
    const formulario = document.getElementById("formularioContacto");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Prevenimos que la página recargue al instante
            evento.preventDefault(); 
            
            // Capturamos los valores de los inputs
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Expresión regular básica para validar el formato del correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validación 1: Campos vacíos
            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Por favor, completa todos los campos antes de enviar el mensaje.");
                return; // Corta la ejecución aquí si falta algo
            }

            // Validación 2: Formato de correo incorrecto
            if (!regexCorreo.test(correo)) {
                alert("El correo electrónico ingresado no tiene un formato válido (ejemplo@correo.com).");
                return;
            }

            // Si pasa todas las validaciones (Todo correcto)
            alert(" ¡Mensaje validado y enviado con éxito!\n\nGracias por escribirme, " + nombre + ". Me pondré en contacto pronto.");
            
            // Limpia los campos para dejar el formulario en blanco nuevamente
            formulario.reset();
        });
    }
});