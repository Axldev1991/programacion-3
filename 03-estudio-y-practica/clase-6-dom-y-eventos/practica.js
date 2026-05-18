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





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
