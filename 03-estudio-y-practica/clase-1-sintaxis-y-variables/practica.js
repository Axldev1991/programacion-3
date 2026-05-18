/**
 * 🚀 CLASE I: Sintaxis Básica, Variables y Operadores
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 6)
// ==========================================

/**
 * 01. CREACIÓN DE VARIABLES
 * -----------------------------------------------------------------
 * Declará una variable mutable llamada 'edad' usando la palabra clave 'let'
 * y asignale el número 25. Luego, retorná dicha variable.
 */
function crearVariable() {
    // Tu código aquí
}


/**
 * 02. ASIGNACIÓN DE CONSTANTES
 * -----------------------------------------------------------------
 * Declará una constante llamada 'PAIS' usando la palabra clave 'const'
 * y asignale el string "Argentina". Luego, retorná dicha constante.
 */
function crearConstante() {
    // Tu código aquí
}


/**
 * 03. OPERACIONES ARITMÉTICAS
 * -----------------------------------------------------------------
 * Recibís dos números 'a' y 'b' por parámetro. Retorná un objeto con:
 * - suma: la suma de 'a' y 'b'.
 * - resta: la resta de 'a' menos 'b'.
 * - multiplicacion: el producto de 'a' por 'b'.
 */
function calcularMatematica(a, b) {
    // Tu código aquí
}


/**
 * 04. CONCATENACIÓN CON TEMPLATE LITERALS
 * -----------------------------------------------------------------
 * Recibís 'nombre' y 'curso'. Retorná la cadena exacta usando backticks (``):
 * "El alumno [nombre] está inscripto en [curso]."
 */
function unirMensaje(nombre, curso) {
    // Tu código aquí
}


/**
 * 05. IGUALDAD SIMPLE VS ESTRICTA
 * -----------------------------------------------------------------
 * Recibís dos variables 'a' y 'b'. Retorná un objeto con:
 * - simple: el resultado de la comparación de igualdad simple (==).
 * - estricta: el resultado de la comparación de igualdad estricta (===).
 */
function evaluarIgualdades(a, b) {
    // Tu código aquí
}


/**
 * 06. INSPECCIÓN CON TYPEOF
 * -----------------------------------------------------------------
 * Recibís un 'valor' indeterminado. Retorná la cadena de texto con su tipo de dato
 * usando el operador 'typeof'.
 */
function obtenerTipo(valor) {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (7 - 10)
// ==========================================

/**
 * 07. OPERADORES LÓGICOS
 * -----------------------------------------------------------------
 * Recibís 'edad' (número) y 'tieneEntrada' (booleano).
 * Retorná 'true' únicamente si el usuario es mayor o igual a 18 años
 * Y además posee entrada. De lo contrario, retorna 'false'.
 */
function verificarPermisoAcceso(edad, tieneEntrada) {
    // Tu código aquí
}


/**
 * 08. DIFERENCIA ENTRE NULL Y UNDEFINED
 * -----------------------------------------------------------------
 * Escribí una función que reciba una 'opcion'.
 * - Si opcion es "vaciar", debe retornar 'null'.
 * - Si opcion es "declarar", debe retornar una variable declarada con let pero sin inicializar (undefined).
 */
function identificarVacio(opcion) {
    // Tu código aquí
}


/**
 * 09. CONVERSIÓN NUMÉRICA EXPLICITA
 * -----------------------------------------------------------------
 * Recibís 'strEntero' y 'strDecimal' (ambos son Strings con números).
 * Retorná un objeto que contenga:
 * - entero: el número entero obtenido de 'strEntero' (usá parseInt).
 * - decimal: el número flotante obtenido de 'strDecimal' (usá parseFloat).
 */
function parsearSeguro(strEntero, strDecimal) {
    // Tu código aquí
}


/**
 * 10. DESAFÍO DE PRIORIDAD DE OPERADORES
 * -----------------------------------------------------------------
 * Recibís tres números 'a', 'b' y 'c'.
 * Escribí una expresión que primero sume 'a' y 'b', y a ese resultado
 * lo multiplique por 'c'. Retorná el resultado final garantizando la prioridad
 * matemática usando paréntesis.
 */
function desafioPrecedencia(a, b, c) {
    // Tu código aquí
}





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
