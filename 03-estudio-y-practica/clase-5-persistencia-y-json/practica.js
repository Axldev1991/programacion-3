/**
 * 🚀 CLASE V: Objetos Globales, Persistencia y Serialización JSON
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 7)
// ==========================================

/**
 * 01. INSPECCIONAR WINDOW
 * -----------------------------------------------------------------
 * Retorná un objeto que contenga las dimensiones internas actuales de la pantalla
 * del navegador de forma dinámica:
 * - ancho: utilizando window.innerWidth
 * - alto: utilizando window.innerHeight
 */
function obtenerDimensionesPantalla() {
    // Tu código aquí
}


/**
 * 02. TEMPORIZADOR DIFERIDO (SETTIMEOUT)
 * -----------------------------------------------------------------
 * Recibís un 'callback' y un retraso en 'ms' (milisegundos).
 * Programá la ejecución de 'callback' para que se dispare tras el retraso exacto.
 * Usá explícitamente el objeto global 'window.setTimeout'.
 */
function programarAlerta(callback, ms) {
    // Tu código aquí
}


/**
 * 03. ESCRIBIR EN LOCALSTORAGE
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string) y un 'valor' (string).
 * Guardalos de forma persistente en 'localStorage'. No retornes nada.
 */
function guardarTexto(clave, valor) {
    // Tu código aquí
}


/**
 * 04. LEER DESDE LOCALSTORAGE
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string).
 * Recuperá el valor previamente guardado desde 'localStorage' y retornalo.
 */
function obtenerTexto(clave) {
    // Tu código aquí
}


/**
 * 05. REMOCIÓN DE CLAVES PERSISTENTES
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string).
 * Remové dicha clave y su valor asociado del almacén de 'localStorage'.
 */
function eliminarDato(clave) {
    // Tu código aquí
}


/**
 * 06. SERIALIZACIÓN JSON
 * -----------------------------------------------------------------
 * Recibís un 'objeto' de JavaScript.
 * Convertilo a formato de texto plano string JSON y retorná ese texto (usá JSON.stringify).
 */
function serializarObjeto(objeto) {
    // Tu código aquí
}


/**
 * 07. DESERIALIZACIÓN JSON
 * -----------------------------------------------------------------
 * Recibís una cadena de texto 'stringJSON'.
 * Decodificala de vuelta a su tipo de dato original en JavaScript (Objeto/Array) y retornala.
 */
function deserializarObjeto(stringJSON) {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (8 - 10)
// ==========================================

/**
 * 08. PERSISTENCIA DE DATOS COMPLEJOS
 * -----------------------------------------------------------------
 * Recibís un 'carrito' (que es un Array con objetos adentro).
 * Serializá ese array usando stringify y guardalo en 'localStorage'
 * bajo la clave exacta "miCarrito".
 */
function guardarCarrito(carrito) {
    // Tu código aquí
}


/**
 * 09. CARGA DE DATOS SEGURA CON FALLBACK
 * -----------------------------------------------------------------
 * Cargá y decodificá el carrito previamente guardado bajo la clave "miCarrito"
 * desde 'localStorage'.
 * - Si "miCarrito" existe en localStorage, retorná el array/objeto JS deserializado.
 * - Si NO existe (retorna null), debés retornar un array vacío [] como fallback.
 */
function cargarCarrito() {
    // Tu código aquí
}


/**
 * 10. LIMPIEZA COMPLETA DE SESIÓN
 * -----------------------------------------------------------------
 * Escribí una función que vacíe/limpie por completo TODOS los almacenes del navegador:
 * - Vaciá 'localStorage'.
 * - Vaciá 'sessionStorage'.
 */
function limpiarPersistencia() {
    // Tu código aquí
}





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
