document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Actualizar el año del copyright automáticamente
    const spanYear = document.getElementById("year");
    if (spanYear) {
        spanYear.textContent = new Date().getFullYear();
    }

    // 2. Lógica del Botón Tema Claro/Oscuro
    const btnTema = document.getElementById("btn-tema");
    const iconoTema = btnTema.querySelector("i");
    
    btnTema.addEventListener("click", function() {
        // Obtenemos el tema actual del atributo en la etiqueta <html>
        const temaActual = document.documentElement.getAttribute("data-theme");
        
        if (temaActual === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            iconoTema.classList.remove("fa-moon");
            iconoTema.classList.add("fa-sun");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            iconoTema.classList.remove("fa-sun");
            iconoTema.classList.add("fa-moon");
        }
    });

    // 3. Validación Visual del Formulario (Bordes rojos/verdes)
    const formulario = document.getElementById("formularioContacto");
    const msjExito = document.getElementById("mensaje-exito");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); 
            
            // Ocultamos el mensaje de éxito si estaba visible de antes
            msjExito.classList.add("d-none");

            const inputNombre = document.getElementById("nombre");
            const inputCorreo = document.getElementById("correo");
            const inputMensaje = document.getElementById("mensaje");
            
            let esValido = true;
            const formatoCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Verificación: Nombre
            if (inputNombre.value.trim() === "") {
                inputNombre.classList.add("is-invalid");
                inputNombre.classList.remove("is-valid");
                esValido = false;
            } else {
                inputNombre.classList.remove("is-invalid");
                inputNombre.classList.add("is-valid");
            }

            // Verificación: Correo
            if (inputCorreo.value.trim() === "" || !formatoCorreoValido.test(inputCorreo.value.trim())) {
                inputCorreo.classList.add("is-invalid");
                inputCorreo.classList.remove("is-valid");
                esValido = false;
            } else {
                inputCorreo.classList.remove("is-invalid");
                inputCorreo.classList.add("is-valid");
            }

            // Verificación: Mensaje
            if (inputMensaje.value.trim() === "") {
                inputMensaje.classList.add("is-invalid");
                inputMensaje.classList.remove("is-valid");
                esValido = false;
            } else {
                inputMensaje.classList.remove("is-invalid");
                inputMensaje.classList.add("is-valid");
            }

            // Si todo está correcto
            if (esValido) {
                // Mostrar cartel verde de éxito
                msjExito.classList.remove("d-none");
                
                // Limpiar el formulario
                formulario.reset();
                
                // Quitar los bordes verdes después de 4 segundos para limpiar la pantalla
                setTimeout(() => {
                    inputNombre.classList.remove("is-valid");
                    inputCorreo.classList.remove("is-valid");
                    inputMensaje.classList.remove("is-valid");
                    msjExito.classList.add("d-none");
                }, 4000);
            }
        });
        
        // Extra: Limpiar los bordes rojos a medida que el usuario escribe
        const inputs = [document.getElementById("nombre"), document.getElementById("correo"), document.getElementById("mensaje")];
        inputs.forEach(input => {
            input.addEventListener("input", function() {
                if(this.classList.contains("is-invalid")) {
                    this.classList.remove("is-invalid");
                }
            });
        });
    }
});