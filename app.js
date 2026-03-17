// Función para navegar entre las secciones
function mostrarSeccion(idSeccion) {
    // 1. Obtenemos todas las secciones de la página
    const secciones = document.querySelectorAll('.seccion');

    // 2. Recorremos cada sección y le quitamos la clase 'activa' para ocultarlas
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // 3. Seleccionamos la sección específica que el usuario quiere ver
    const seccionMostrar = document.getElementById(idSeccion);

    // 4. Le añadimos la clase 'activa' para mostrarla
    if (seccionMostrar) {
        seccionMostrar.classList.add('activa');
    }
}// --- LÓGICA DE LOS JUEGOS ---

// --- LÓGICA DE LOS JUEGOS ---

// Juego 1: Sistema de Ecuaciones Visual
function verificarJuego1(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-1');
    const respuestaCorrecta = 7;

    if (respuestaUsuario === respuestaCorrecta) {
        mensaje.innerHTML = "¡Correcto! 🎉 Si ✏️ + ✏️ = 10, entonces ✏️ = 5. Luego, 2 x 5 = 10. Para llegar a 17, el crayón debe valer 7.";
        mensaje.style.color = "#16a085"; 
    } else {
        mensaje.innerHTML = "Incorrecto. ❌ Piénsalo bien: Primero descubre cuánto vale el lápiz y recuerda la prioridad de multiplicación.";
        mensaje.style.color = "#e74c3c"; 
    }
}

// Juego 2: Comparación con Potencias
function verificarJuego2(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-2');

    // La respuesta correcta es que A (3^3 = 27) es mayor que B (5x5 = 25) por 2.
    if (respuestaUsuario === 'A_2') {
        mensaje.innerHTML = "¡Excelente! 🎉 A (3³ = 27) es mayor que B (25) exactamente por 2.";
        mensaje.style.color = "#2ecc71"; 
    } else {
        mensaje.innerHTML = "Piénsalo un poco más. ❌ Recuerda que 3³ es 3 x 3 x 3. ¿Cuánto da eso?";
        mensaje.style.color = "#e74c3c"; 
    }
}

// Juego 3: Suma Visual con Jerarquía de Operaciones
function verificarJuego3(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-3');

    // 3 tijeras * 2 tijeras - 1 tijera = 3 * 2 - 1 = 5
    if (respuestaUsuario === 5) {
        mensaje.innerHTML = "¡Correcto! 🎉 3 x 2 = 6, y 6 - 1 = 5. ¡Gran dominio de los signos!";
        mensaje.style.color = "#2ecc71"; 
    } else {
        mensaje.innerHTML = "Incorrecto. ❌ Fíjate bien en los signos: primero va la multiplicación, luego la resta.";
        mensaje.style.color = "#e74c3c"; 
    }
}

// Juego 4: Abrecajas Deductivo (Más complejo)
function verificarJuego4(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-4');

    // La respuesta correcta es 7 (es primo, < 10, y 2*7 + 1 = 15)
    if (respuestaUsuario === 7) {
        mensaje.innerHTML = "¡Exacto! 🎉 El 7 cumple con todas las pistas lógicas. ¡Gran deducción matemática!";
        mensaje.style.color = "#16a085"; 
    } else {
        mensaje.innerHTML = `La caja ${respuestaUsuario} no es correcta. ❌ Revisa las pistas: ¿Es un número primo? Haz la ecuación final.`;
        mensaje.style.color = "#e74c3c"; 
    }
}

// Juego 5: Problema de Cálculo (Fracciones)
function verificarJuego5(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-5');

    // 24 total. 1/3 comido = 8. Quedan 16. Regala la mitad = 8.
    if (respuestaUsuario === 8) {
        mensaje.innerHTML = "¡Correcto! 🎉 24 menos 8 (un tercio) son 16. Si regala la mitad, le quedan 8.";
        mensaje.style.color = "#2ecc71"; 
    } else {
        mensaje.innerHTML = "Respuesta incorrecta. ❌ Piénsalo por pasos: ¿Cuánto es un tercio de 24? ¿Cuánto queda después de eso?";
        mensaje.style.color = "#e74c3c"; 
    }
}

// Juego 6: Une las Parejas (Álgebra básica y porcentajes)
function verificarJuego6() {
    const r1 = document.getElementById('respuesta-1').value; // Respuesta: 15
    const r2 = document.getElementById('respuesta-2').value; // Respuesta: 10
    const r3 = document.getElementById('respuesta-3').value; // Respuesta: 7
    const mensaje = document.getElementById('resultado-juego-6');

    if (r1 === "" || r2 === "" || r3 === "") {
        mensaje.innerHTML = "Por favor, selecciona una respuesta para todos los problemas. ⚠️";
        mensaje.style.color = "#f39c12"; 
        return; 
    }

    if (r1 === "15" && r2 === "10" && r3 === "7") {
        mensaje.innerHTML = "¡Excelente! 🎉 Has resuelto todos los problemas correctamente.";
        mensaje.style.color = "#16a085"; 
    } else {
        mensaje.innerHTML = "Alguna respuesta no es correcta. ❌ Revisa tus cálculos e inténtalo de nuevo.";
        mensaje.style.color = "#e74c3c"; 
    }
}
