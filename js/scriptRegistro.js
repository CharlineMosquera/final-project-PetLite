// VALIDACIÓN PARA EL FORM DE REGISTRO

// Validación para el nombre
document.getElementById("nombre").addEventListener("input", function() { // Seleccionamos el id y añadimos un listener para que escuche cuando el usuario escriba
    const nombre = this.value; // Guardamos el valor ingresado
    const errorNombre = document.getElementById("error-nombre"); // Seleccionamos el párrafo que mostrará el mensaje de error

    // Si el campo está vacío:
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio."; // Mostramos el error
        errorNombre.classList.remove("d-none", "alert-success"); // Removemos las clases del mensaje de success
        errorNombre.classList.add("alert-danger"); // Añadimos la clase del mensaje de error 
    } else {
        errorNombre.classList.add("alert-success"); // Mostramos el mensaje de éxito
    }
});

// Validación para el correo electrónico
document.getElementById("email").addEventListener("input", function() {
    const email = this.value.trim(); // Guardamos el valor ingresado, eliminando cualquier espacio extra al principio o final (trim)
    const errorEmail = document.getElementById("error-email");
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // Regex para verificar si el formato del correo electrónico es válido

    // Si el correo no cumple con el patrón:
    if (!emailPattern.test(email)) {
        errorEmail.textContent = "Ingresa un correo electrónico válido."; // Mostramos el error
        errorEmail.classList.remove("d-none", "alert-success");
        errorEmail.classList.add("alert-danger");
    } else {
        // Si el correo es válido:
        errorEmail.classList.remove("alert-danger"); // Ocultamos el mensaje de error
        errorEmail.classList.add("alert-success"); 
        errorEmail.textContent = "¡Correo electrónico válido!"; // Añadimos mensaje de validación exitosa
        errorEmail.classList.remove("d-none");
    }
});

// Validación para el teléfono
document.getElementById("phone").addEventListener("input", function() {
    const phone = this.value.trim();
    const errorPhone = document.getElementById("error-phone");
    const phonePattern = /^[0-9]{10}$/; // Regex para verificar si el formato del teléfono es válido
    
    // Si el número no cumple con el patrón:
    if (!phonePattern.test(phone)) {
        errorPhone.textContent = "Ingresa un número de teléfono válido de 10 dígitos."; // Mostramos el error
        errorPhone.classList.remove("d-none", "alert-success");
        errorPhone.classList.add("alert-danger");
    } else {
        errorPhone.classList.remove("alert-danger");
        errorPhone.classList.add("alert-success");
        errorPhone.textContent = "¡Número de teléfono válido!"; // Añadimos mensaje de validación exitosa
        errorPhone.classList.remove("d-none");
    }
});

// Validación para las contraseñas
document.getElementById("password-confirm").addEventListener("input", function() {
    const password1 = document.getElementById("password").value; 
    const password2 = this.value; 
    const matchMessage = document.getElementById("match-message"); 
    const errorPassword = document.getElementById("error-password"); 

    // Validación de longitud para la contraseña 
    if (password1.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres."; 
        errorPassword.classList.remove("d-none", "alert-success"); 
        errorPassword.classList.add("alert-danger"); 
    } else if (password1.length > 14) { 
        errorPassword.textContent = "La contraseña no puede exceder los 14 caracteres."; 
        errorPassword.classList.remove("d-none", "alert-success"); 
        errorPassword.classList.add("alert-danger"); 
    } else {
        errorPassword.textContent = ""; 
        errorPassword.classList.add("d-none"); 
    }

    // Validación para verificar si las contraseñas coinciden
    if (password1 !== password2) {
        matchMessage.textContent = "Las contraseñas no coinciden.";
        matchMessage.classList.add("alert-danger"); 
    } else {
        matchMessage.textContent = "Las contraseñas coinciden."; 
        matchMessage.classList.remove("d-none", "alert-danger"); 
        matchMessage.classList.add("alert-success"); 
    }
});
