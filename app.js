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

// Juego 1: Ecuación Visual
function verificarJuego1(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-1');
    const respuestaCorrecta = 20;

    if (respuestaUsuario === respuestaCorrecta) {
        // Respuesta correcta
        mensaje.innerHTML = "¡Correcto! 🎉 La regla vale 20, porque 20 + 5 = 25.";
        mensaje.style.color = "#16a085"; // Verde
    } else {
        // Respuesta incorrecta
        mensaje.innerHTML = "Incorrecto. ❌ Piénsalo bien: ¿Qué número sumado a 5 da como resultado 25?";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}
// Juego 2: Comparación de Productos
function verificarJuego2(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-2');

    // La respuesta correcta es que B (24) es mayor que A (20) por 4.
    if (respuestaUsuario === 'B_4') {
        mensaje.innerHTML = "¡Excelente! 🎉 B (24) es mayor que A (20) exactamente por 4.";
        mensaje.style.color = "#2ecc71"; // Verde brillante para fondo oscuro
    } else {
        mensaje.innerHTML = "Piénsalo un poco más. ❌ Recuerda: 5x4 es 20, y 6x4 es 24. ¿Cuál es la diferencia?";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}
// Juego 3: Suma Visual de Tijeras
function verificarJuego3(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-3');

    // La respuesta correcta es 4 tijeras + 2 tijeras = 6
    if (respuestaUsuario === 6) {
        mensaje.innerHTML = "¡Correcto! 🎉 4 tijeras + 2 tijeras equivalen a 6.";
        mensaje.style.color = "#2ecc71"; // Verde brillante
    } else {
        mensaje.innerHTML = "Incorrecto. ❌ Cuenta con cuidado: ¿Cuántas tijeras hay a la izquierda y cuántas a la derecha?";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}
// Juego 4: Abrecajas Deductivo
function verificarJuego4(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-4');

    // La respuesta correcta es 9 (es impar, múltiplo de 3, y 9+2=11)
    if (respuestaUsuario === 9) {
        mensaje.innerHTML = "¡Exacto! 🎉 El 9 cumple con todas las pistas. ¡Gran deducción!";
        mensaje.style.color = "#16a085"; // Verde
    } else {
        mensaje.innerHTML = `La caja ${respuestaUsuario} no es correcta. ❌ Revisa las pistas: ¿Es impar? ¿Múltiplo de 3?`;
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}

// Juego 5: Problema de Cálculo (Lechugas)
function verificarJuego5(respuestaUsuario) {
    const mensaje = document.getElementById('resultado-juego-5');

    // La respuesta correcta es 19 - 8 = 11
    if (respuestaUsuario === 11) {
        mensaje.innerHTML = "¡Correcto! 🎉 19 lechugas menos 8 que se comieron las gallinas, quedan 11.";
        mensaje.style.color = "#2ecc71"; // Verde
    } else {
        mensaje.innerHTML = "Respuesta incorrecta. ❌ Piénsalo bien: si tienes 19 y te quitan 8, ¿cuánto te queda?";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}

// Juego 6: Une las Parejas
function verificarJuego6() {
    // Obtenemos los valores que seleccionó el usuario
    const r1 = document.getElementById('respuesta-1').value; // Respuesta correcta: 5
    const r2 = document.getElementById('respuesta-2').value; // Respuesta correcta: 10
    const r3 = document.getElementById('respuesta-3').value; // Respuesta correcta: 7
    const mensaje = document.getElementById('resultado-juego-6');

    // Verificamos si completó todos los campos primero
    if (r1 === "" || r2 === "" || r3 === "") {
        mensaje.innerHTML = "Por favor, selecciona una respuesta para todos los problemas. ⚠️";
        mensaje.style.color = "#f39c12"; // Naranja
        return; // Detenemos la función aquí
    }

    // Verificamos si las respuestas son correctas
    if (r1 === "5" && r2 === "10" && r3 === "7") {
        mensaje.innerHTML = "¡Excelente! 🎉 Has unido todas las parejas correctamente.";
        mensaje.style.color = "#16a085"; // Verde
    } else {
        mensaje.innerHTML = "Alguna respuesta no es correcta. ❌ Revisa tus cálculos e inténtalo de nuevo.";
        mensaje.style.color = "#e74c3c"; // Rojo
    }
}
let preguntas = [];

// Cargar JSON
fetch("preguntas.json")
  .then(res => res.json())
  .then(data => {
    preguntas = data.preguntas;
    mostrarPreguntas();
  });

// Mostrar preguntas en HTML
function mostrarPreguntas() {
    const form = document.getElementById("quizForm");
  
    preguntas.forEach((p, index) => {
      let html = `<div id="bloque${index}">
          <p><strong>${index + 1}. ${p.pregunta}</strong></p>`;
  
      p.opciones.forEach((op, i) => {
        html += `
          <label>
            <input type="radio" name="pregunta${index}" value="${i}">
            ${op}
          </label><br>`;
      });
  
      // 👇 espacio para feedback
      html += `<div id="feedback${index}"></div>`;
  
      html += `</div><hr>`;
      form.innerHTML += html;
    });
  }

// Calificar
function calificar() {
    let puntaje = 0;
  
    preguntas.forEach((p, index) => {
      const opciones = document.querySelectorAll(`input[name="pregunta${index}"]`);
      const bloque = document.getElementById(`bloque${index}`);
      const feedback = document.getElementById(`feedback${index}`);
  
      let correctaSeleccionada = false;
      let respuestaUsuario = null;
  
      opciones.forEach((op) => {
        const label = op.parentElement;
  
        label.classList.remove("incorrecta");
  
        if (op.checked) {
          respuestaUsuario = parseInt(op.value);
  
          // si eligió mal → rojo
          if (respuestaUsuario !== p.correcta) {
            label.classList.add("incorrecta");
          }
  
          if (respuestaUsuario === p.correcta) {
            correctaSeleccionada = true;
            puntaje++;
          }
        }
  
        op.disabled = true;
      });
  
      // ❌ si falla
      if (!correctaSeleccionada) {
        bloque.classList.add("pregunta-incorrecta");
  
        feedback.innerHTML = `
          Respuesta correcta: <strong>${p.opciones[p.correcta]}</strong>
        `;
        feedback.classList.add("feedback");
      }
    });
  
    document.getElementById("resultado").innerText =
      `Tu calificación es: ${puntaje} / ${preguntas.length}`;
    document.getElementById("botonReintentar").style.display = "inline-block";
    document.getElementById("botonEnviar").disabled = true;
  }
  function reiniciarTest() {
    const form = document.getElementById("quizForm");
  
    // limpiar todo el formulario
    form.innerHTML = "";
  
    // limpiar resultado
    document.getElementById("resultado").innerText = "";
  
    // ocultar botón reintentar
    document.getElementById("botonReintentar").style.display = "none";
  
    // activar botón enviar
    document.getElementById("botonEnviar").disabled = false;
  
    // volver a generar preguntas
    mostrarPreguntas();
  }