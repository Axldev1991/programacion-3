/**
 * 🚀 CLASE IV: Arrays, Objetos Literales y Métodos Nativos
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 6)
// ==========================================

/**
 * 01. CREACIÓN Y ACCESO A ARRAYS
 * -----------------------------------------------------------------
 * 1. Declará una variable llamada 'colores' que contenga un array con:
 *    "rojo", "verde", "azul", "amarillo".
 * 2. Retorná un objeto que contenga:
 *    - lista: el array completo de colores.
 *    - segundo: el color en la segunda posición del array ("verde").
 */
function crearAccederArray() {
    // Tu código aquí
}


/**
 * 02. MUTAR BORDES DE UN ARRAY (PUSH Y SHIFT)
 * -----------------------------------------------------------------
 * Recibís un 'array' por parámetro. Debés:
 * 1. Insertar el string "NUEVO" al final del array usando el método 'push'.
 * 2. Remover el primer elemento del array usando el método 'shift'.
 * 3. Retornar el array resultante (ya mutado).
 */
function mutarBordes(array) {
    // Tu código aquí
}


/**
 * 03. EXTRACCIÓN SUPERFICIAL (SLICE)
 * -----------------------------------------------------------------
 * Recibís un 'array'. Retorná una porción nueva (una copia parcial)
 * que contenga los elementos desde el índice 1 hasta el índice 3 inclusive
 * (es decir, posiciones 1, 2 y 3).
 * IMPORTANTE: No debés modificar el array original.
 */
function copiarPorcion(array) {
    // Tu código aquí
}


/**
 * 04. TROZADO Y BÚSQUEDA (SPLIT E INCLUDES)
 * -----------------------------------------------------------------
 * Recibís 'frase' (un string largo) y 'buscado' (una palabra).
 * Debés:
 * 1. Trozar 'frase' en palabras individuales usando el método 'split' con separador de espacio (" ").
 * 2. Comprobar si 'buscado' está incluido en el array resultante usando 'includes'.
 * 3. Retornar un objeto con:
 *    - palabras: el array de palabras trozadas.
 *    - existe: el booleano resultado del paso 2.
 */
function analizarTexto(frase, buscado) {
    // Tu código aquí
}


/**
 * 05. MODIFICACIÓN QUIRÚRGICA (SPLICE)
 * -----------------------------------------------------------------
 * Recibís un 'array'. Usando el método 'splice', debés:
 * 1. Remover 1 solo elemento en la posición de índice 2.
 * 2. Insertar el string "REEMPLAZO" exactamente en esa misma posición (índice 2).
 * 3. Retornar el array modificado.
 */
function reemplazarSplice(array) {
    // Tu código aquí
}


/**
 * 06. CREACIÓN DE OBJETOS LITERALES
 * -----------------------------------------------------------------
 * Creá y retorná un objeto literal que represente un 'libro' con:
 * - titulo: "El Aleph" (string)
 * - autor: "Jorge Luis Borges" (string)
 * - paginas: 150 (número)
 */
function crearObjeto() {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (7 - 10)
// ==========================================

/**
 * 07. NOTACIÓN POR CORCHETES DINÁMICOS
 * -----------------------------------------------------------------
 * Recibís un 'objeto' (con varios campos) y una 'clave' (que es un String
 * que contiene el nombre de alguna propiedad).
 * Retorná el valor correspondiente a esa propiedad del objeto
 * usando acceso por corchetes [clave].
 */
function obtenerClaveDinamica(objeto, clave) {
    // Tu código aquí
}


/**
 * 08. EDICIÓN Y ELIMINACIÓN DINÁMICA
 * -----------------------------------------------------------------
 * Recibís un 'usuario' (objeto). Debés:
 * 1. Modificar o agregar la propiedad 'rol' asignándole el valor "admin".
 * 2. Eliminar de forma permanente la propiedad 'password' usando la palabra clave 'delete'.
 * 3. Retornar el objeto mutado.
 */
function mutarPropiedades(usuario) {
    // Tu código aquí
}


/**
 * 09. COMPORTAMIENTOS Y CONTEXTO (THIS)
 * -----------------------------------------------------------------
 * Recibís un string 'apodo'. Creá y retorná un objeto que contenga:
 * - apodo: el valor de la variable 'apodo'.
 * - presentarse: una función (método) que al ser ejecutada retorne el texto exacto:
 *   "Hola, mi nombre de usuario es [apodo]" (utilizando 'this.apodo' dentro de backticks).
 */
function crearMetodoContexto(apodo) {
    // Tu código aquí
}


/**
 * 10. LABORATORIO DE DATOS COMPLEJOS
 * -----------------------------------------------------------------
 * Recibís 'usuarios' (un array de objetos, donde cada objeto tiene { nombre: string, activo: boolean }).
 * Debés:
 * 1. Recorrer la lista y filtrar únicamente aquellos usuarios que tengan 'activo: true'.
 * 2. Extraer solo sus nombres y colocarlos en un nuevo array de strings.
 * 3. Retornar dicho array de nombres activos.
 * (Ejemplo de salida esperada si recibe [{nombre: "Ana", activo: true}, {nombre: "Sol", activo: false}] -> ["Ana"])
 */
function filtrarUsuariosActivos(usuarios) {
    // Tu código aquí
}





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
