/**
 * 🚀 CLASE VI: Manipulación del DOM y Gestión de Eventos
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 6)
// ==========================================

/**
 * 01. LECTURA POR ID
 * -----------------------------------------------------------------
 * Seleccioná y retorná el nodo HTML que tiene el ID único "titulo-principal".
 */
function obtenerElementoPorId() {
    // Tu código aquí
}


/**
 * 02. MODIFICAR TEXTO DE NODO
 * -----------------------------------------------------------------
 * Recibís un 'elemento' (nodo DOM) y un 'texto' (string).
 * Modificá de forma segura su contenido de texto interno asignándole el 'texto' recibido
 * (usá textContent). No retornes nada.
 */
function modificarTextoElemento(elemento, texto) {
    // Tu código aquí
}


/**
 * 03. SELECCIONAR MÚLTIPLES ELEMENTOS (CLASES)
 * -----------------------------------------------------------------
 * Seleccioná y retorná todos los elementos del documento que posean la clase CSS
 * "parrafo-estudio" (usá document.querySelectorAll).
 */
function obtenerParrafosClase() {
    // Tu código aquí
}


/**
 * 04. MUTAR ESTILOS EN LÍNEA
 * -----------------------------------------------------------------
 * Seleccioná el elemento con ID "boton-estilo".
 * Modificá su color de fondo (backgroundColor) en línea asignándole el valor exacto:
 * "rgb(0, 230, 118)".
 */
function cambiarColorBoton() {
    // Tu código aquí
}


/**
 * 05. CREACIÓN Y ANEXADO DE NODOS
 * -----------------------------------------------------------------
 * Recibís un string 'texto'.
 * 1. Instanciá un nuevo elemento de párrafo `<p>` (usá document.createElement).
 * 2. Asignale el 'texto' a su propiedad textContent.
 * 3. Seleccioná el contenedor con ID "contenedor-dinamico" y agregale el párrafo
 *    nuevo como un hijo al final (usá appendChild).
 */
function crearParrafoDinamico(texto) {
    // Tu código aquí
}


/**
 * 06. ASIGNACIÓN DINÁMICA DE CLASES CSS
 * -----------------------------------------------------------------
 * Seleccioná el elemento con ID "titulo-principal" y agregale la clase CSS
 * llamada "destacado" usando classList.add.
 */
function agregarClaseElemento() {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (7 - 10)
// ==========================================

/**
 * 07. LECTURA DE VALORES EN INPUTS
 * -----------------------------------------------------------------
 * Seleccioná el campo de entrada (input) con ID "entrada-usuario"
 * y retorná el valor actual que tiene escrito (su atributo .value).
 */
function leerValorInput() {
    // Tu código aquí
}


/**
 * 08. SUSCRIPCIÓN DE EVENTOS DE CLICK
 * -----------------------------------------------------------------
 * Recibís una función 'callback'.
 * Seleccioná el botón con ID "boton-estilo" y agrégale un escuchador de eventos
 * (addEventListener) para el evento "click" que ejecute el 'callback' provisto.
 */
function escucharClickBoton(callback) {
    // Tu código aquí
}


/**
 * 09. PREVENIR COMPORTAMIENTO NATIVO (EVENTOS FORM)
 * -----------------------------------------------------------------
 * Recibís un objeto de 'evento' (producido por el submit de un formulario).
 * Detené el comportamiento nativo por defecto del navegador para ese evento
 * (usá preventDefault). Retorná 'true' al finalizar.
 */
function prevenirEnvioFormulario(evento) {
    // Tu código aquí
}


/**
 * 10. DESTRUCCIÓN DINÁMICA DE HIJOS (REMOVECHILD)
 * -----------------------------------------------------------------
 * Seleccioná el contenedor con ID "contenedor-dinamico".
 * - Si el contenedor posee elementos hijos adentro (puedes verificar si tiene firstChild),
 *   remové el primer hijo que tenga.
 * - De lo contrario, no hagas nada.
 */
function eliminarHijoContenedor() {
    // Tu código aquí
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE VI - DOM Y EVENTOS 🧪", "color: #00e676; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #00e676; color: #000;" : "background: #ff1744; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #00e676; font-weight: 500;");
                aprobados++;
            } else {
                console.log(`%c${icon} Fallido: ${details}`, "color: #ff1744; font-weight: bold;");
                if (error) {
                    console.log("%cDetalle del error:", "color: #646a78; font-style: italic;");
                    console.error(error);
                }
            }
            console.groupEnd();
        };

        // 1. obtenerElementoPorId
        try {
            const res = obtenerElementoPorId();
            if (res && res.id === "titulo-principal") {
                printResult(1, "Lectura de ID Único", true, "Nodo seleccionado exitosamente.");
            } else {
                printResult(1, "Lectura de ID Único", false, "No se retornó el nodo con ID 'titulo-principal'.");
            }
        } catch (e) {
            printResult(1, "Lectura de ID Único", false, "Error en la ejecución.", e);
        }

        // 2. modificarTextoElemento
        try {
            const temp = document.createElement("div");
            modificarTextoElemento(temp, "Texto Cambiado");
            if (temp.textContent === "Texto Cambiado") {
                printResult(2, "Modificación de Texto (textContent)", true, "Modificación limpia y segura realizada.");
            } else {
                printResult(2, "Modificación de Texto (textContent)", false, `Se esperaba 'Texto Cambiado' pero tiene '${temp.textContent}'.`);
            }
        } catch (e) {
            printResult(2, "Modificación de Texto (textContent)", false, "Error en la ejecución.", e);
        }

        // 3. obtenerParrafosClase
        try {
            const res = obtenerParrafosClase();
            if (res && res.length >= 2 && res[0].classList.contains("parrafo-estudio")) {
                printResult(3, "Selección Múltiple (querySelectorAll)", true, `Seleccionados ${res.length} párrafos correctamente.`);
            } else {
                printResult(3, "Selección Múltiple (querySelectorAll)", false, "No se seleccionaron los párrafos de la clase 'parrafo-estudio'.");
            }
        } catch (e) {
            printResult(3, "Selección Múltiple (querySelectorAll)", false, "Error en la ejecución.", e);
        }

        // 4. cambiarColorBoton
        try {
            const btn = document.getElementById("boton-estilo");
            btn.style.backgroundColor = "";
            cambiarColorBoton();
            if (btn.style.backgroundColor === "rgb(0, 230, 118)") {
                printResult(4, "Mutación de Estilos en Línea", true, "Color de fondo del botón modificado dinámicamente.");
            } else {
                printResult(4, "Mutación de Estilos en Línea", false, `Fondo obtenido: '${btn.style.backgroundColor}'.`);
            }
        } catch (e) {
            printResult(4, "Mutación de Estilos en Línea", false, "Error en la ejecución.", e);
        }

        // 5. crearParrafoDinamico
        try {
            const cont = document.getElementById("contenedor-dinamico");
            cont.innerHTML = "";
            crearParrafoDinamico("Nuevo item de prueba");
            if (cont.children.length === 1 && cont.firstChild.textContent === "Nuevo item de prueba") {
                printResult(5, "Creación y Anexado de Nodos", true, "Párrafo instanciado e inyectado correctamente en el contenedor.");
            } else {
                printResult(5, "Creación y Anexado de Nodos", false, `Hijos en contenedor: ${cont.children.length}.`);
            }
        } catch (e) {
            printResult(5, "Creación y Anexado de Nodos", false, "Error en la ejecución.", e);
        }

        // 6. agregarClaseElemento
        try {
            const tit = document.getElementById("titulo-principal");
            tit.classList.remove("destacado");
            agregarClaseElemento();
            if (tit.classList.contains("destacado")) {
                printResult(6, "Asignación de Clases CSS", true, "Clase CSS agregada dinámicamente.");
            } else {
                printResult(6, "Asignación de Clases CSS", false, "El título no contiene la clase 'destacado'.");
            }
        } catch (e) {
            printResult(6, "Asignación de Clases CSS", false, "Error en la ejecución.", e);
        }

        // 7. leerValorInput
        try {
            const input = document.getElementById("entrada-usuario");
            input.value = "AxelEstudiando";
            const res = leerValorInput();
            if (res === "AxelEstudiando") {
                printResult(7, "Lectura de Inputs (.value)", true, "Lectura exacta del string escrito en la entrada.");
            } else {
                printResult(7, "Lectura de Inputs (.value)", false, `Se esperaba 'AxelEstudiando' pero retornó '${res}'.`);
            }
        } catch (e) {
            printResult(7, "Lectura de Inputs (.value)", false, "Error en la ejecución.", e);
        }

        // 8. escucharClickBoton
        try {
            let clickeado = false;
            escucharClickBoton(() => { clickeado = true; });
            const btn = document.getElementById("boton-estilo");
            btn.click(); // Disparar click nativo sintético
            if (clickeado) {
                printResult(8, "Suscripción de Click Event", true, "Mapeo reactivo del evento de click funcional.");
            } else {
                printResult(8, "Suscripción de Click Event", false, "El callback registrado no se ejecutó tras el click.");
            }
        } catch (e) {
            printResult(8, "Suscripción de Click Event", false, "Error en la ejecución.", e);
        }

        // 9. prevenirEnvioFormulario
        try {
            let preventDefaultCalled = false;
            const mockEvent = {
                preventDefault: () => { preventDefaultCalled = true; }
            };
            const res = prevenirEnvioFormulario(mockEvent);
            if (res === true && preventDefaultCalled === true) {
                printResult(9, "Prevenir Comportamiento (preventDefault)", true, "Envío de formulario bloqueado correctamente.");
            } else {
                printResult(9, "Prevenir Comportamiento (preventDefault)", false, "No se invocó preventDefault en el evento.");
            }
        } catch (e) {
            printResult(9, "Prevenir Comportamiento (preventDefault)", false, "Error en la ejecución.", e);
        }

        // 10. eliminarHijoContenedor
        try {
            const cont = document.getElementById("contenedor-dinamico");
            cont.innerHTML = "";
            
            const p1 = document.createElement("p");
            p1.textContent = "Hijo 1";
            const p2 = document.createElement("p");
            p2.textContent = "Hijo 2";
            cont.appendChild(p1);
            cont.appendChild(p2);
            
            eliminarHijoContenedor();
            if (cont.children.length === 1 && cont.firstChild.textContent === "Hijo 2") {
                printResult(10, "Destrucción Dinámica (removeChild)", true, "Primer nodo del contenedor removido limpiamente.");
            } else {
                printResult(10, "Destrucción Dinámica (removeChild)", false, `Hijos restantes: ${cont.children.length}. Primero: ${cont.firstChild?.textContent}`);
            }
        } catch (e) {
            printResult(10, "Destrucción Dinámica (removeChild)", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡SUBLIME! Sos el monarca absoluto de la interactividad del DOM. 🏆", "color: #00e676; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo VI en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
