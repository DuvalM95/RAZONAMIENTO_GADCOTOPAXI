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


// Juego 1: Sistema de Ecuaciones Visual
function verificarJuego1(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-1');
    const respuestaCorrecta = 8;

    if (respuestaUsuario === respuestaCorrecta) {
        // Respuesta correcta
        mensaje.innerHTML = "¡Impecable! 🎉 📏=9. Luego, 9 - ✏️² = 5 significa que ✏️=2. Finalmente, (2 x 9) - 🖍️ = 10, por lo tanto el crayón vale 8.";
        mensaje.style.color = "#16a085"; // Verde
    } else {
        // Respuesta incorrecta
        mensaje.innerHTML = "Incorrecto. ❌ Piénsalo por pasos: Primero halla la 📏. Luego, fíjate en la segunda ecuación: ¿qué número multiplicado por sí mismo (✏️ x ✏️) te ayuda a llegar a 5?";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}

// Juego 2: Análisis Avanzado de Potencias y Raíces
function verificarJuego2(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-2');

    // Lado A: 2^5 - √64 x 3 = 32 - (8 x 3) = 32 - 24 = 8
    // Lado B: (3^2 + 4^2) ÷ 5 = (9 + 16) ÷ 5 = 25 ÷ 5 = 5
    // La respuesta correcta es que A (8) es mayor que B (5) por 3.
    if (respuestaUsuario === 'A_3') {
        mensaje.innerHTML = "¡Excelente! 🎉 A da como resultado 8 y B es 5. Por lo tanto, A es mayor exactamente por 3. ¡Gran dominio de la jerarquía matemática!";
        mensaje.style.color = "#2ecc71"; // Verde
    } else if (respuestaUsuario === 'IGUALES') {
        mensaje.innerHTML = "Incorrecto. ❌ Fíjate bien en los detalles. No te dejes llevar solo por los números grandes.";
        mensaje.style.color = "#e74c3c"; // Rojo
    } else {
        mensaje.innerHTML = "Piénsalo un poco más. ❌ Recuerda: resuelve primero las potencias y raíces. En B, resuelve el paréntesis primero (3² + 4² = ?).";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}

// Juego 3: Suma Visual con Jerarquía de Operaciones
// Juego 3: Jerarquía Suprema (Operaciones combinadas)
function verificarJuego3(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-3');

    // Ecuación: 10 - 2 x 3 + 12 ÷ 4
    // Correcto: 10 - 6 + 3 = 7
    if (respuestaUsuario === 7) {
        mensaje.innerHTML = "¡Correcto! 🎉 Primero multiplicamos (2x3=6) y dividimos (12÷4=3). Luego resolvemos de izquierda a derecha: 10 - 6 + 3 = 7.";
        mensaje.style.color = "#2ecc71"; // Verde
    } else if (respuestaUsuario === 9) {
        mensaje.innerHTML = "Incorrecto. ❌ Caíste en la trampa de leer de izquierda a derecha. ¡Recuerda la jerarquía! Las multiplicaciones y divisiones van primero.";
        mensaje.style.color = "#e74c3c"; // Rojo
    } else if (respuestaUsuario === 1) {
        mensaje.innerHTML = "Casi... ❌ Recuerda que la suma y la resta tienen el mismo nivel y se resuelven de izquierda a derecha. No sumes (-6 + 3) antes de restar.";
        mensaje.style.color = "#e74c3c"; // Rojo
    } else {
        mensaje.innerHTML = "Incorrecto. ❌ Revisa tus cálculos. Recuerda: 1º Multiplicación/División, 2º Suma/Resta (de izquierda a derecha).";
        mensaje.style.color = "#e74c3c"; // Rojo
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
