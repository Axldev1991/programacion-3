/**
 * 🚀 CLASE VII: Callbacks, HOFs Avanzados, Destructuring y Spread Operator
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 7)
// ==========================================

/**
 * 01. CALLBACKS DIRECTOS
 * -----------------------------------------------------------------
 * Recibís un string 'valor' y una función 'cb'.
 * Ejecutá la función callback 'cb' pasándole el string 'valor' como argumento,
 * y retorná el resultado de esa ejecución.
 */
function ejecutarCallbackBasico(valor, cb) {
    // Tu código aquí
}


/**
 * 02. FILTRO DECLARATIVO (FILTER)
 * -----------------------------------------------------------------
 * Recibís un array 'numeros'.
 * Filtrá y retorná un nuevo array conteniendo únicamente los números pares
 * utilizando el método declarativo .filter(). No alteres el array original.
 */
function filtrarNumerosPares(numeros) {
    // Tu código aquí
}


/**
 * 03. MAPEAR ELEMENTOS (MAP)
 * -----------------------------------------------------------------
 * Recibís un array de strings 'nombres'.
 * Transformá y retorná un nuevo array con todos los nombres formateados en
 * mayúsculas utilizando el método declarativo .map().
 */
function mapearNombresMayusculas(nombres) {
    // Tu código aquí
}


/**
 * 04. REDUCCIÓN ACUMULATIVA (REDUCE)
 * -----------------------------------------------------------------
 * Recibís un array 'productos' donde cada elemento es `{ nombre: string, precio: number }`.
 * Calculá y retorná la suma total de los precios de todos los productos utilizando
 * el método declarativo .reduce().
 * Si la lista está vacía, debés retornar 0.
 */
function sumarPreciosProductos(productos) {
    // Tu código aquí
}


/**
 * 05. BÚSQUEDA UNITARIA (FIND)
 * -----------------------------------------------------------------
 * Recibís un array 'productos' donde cada uno es `{ nombre: string, activo: boolean }`.
 * Encontrá y retorná el PRIMER producto que tenga `activo === true` utilizando .find().
 */
function buscarProductoActivo(productos) {
    // Tu código aquí
}


/**
 * 06. DESESTRUCTURACIÓN DE OBJETOS
 * -----------------------------------------------------------------
 * Recibís un objeto 'usuario' (ej: `{ nombre: "Axel", edad: 21, rol: "admin" }`).
 * Utilizando desestructuración de objetos en una sola línea:
 * 1. Extraé las propiedades 'nombre' y 'rol'.
 * 2. Renombrá la variable 'rol' a 'puesto'.
 * 3. Retorná un nuevo objeto literal con el formato exacto: `{ nombre, puesto }`.
 */
function desestructurarObjeto(usuario) {
    // Tu código aquí
}


/**
 * 07. DESESTRUCTURACIÓN DE ARREGLOS
 * -----------------------------------------------------------------
 * Recibís un array 'numeros'.
 * Utilizando desestructuración de arrays, extraé posicionalmente el primer
 * y el segundo elemento de la lista.
 * Retorná un objeto literal con formato exacto: `{ primero: valor1, segundo: valor2 }`.
 */
function desestructurarArray(numeros) {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (8 - 10)
// ==========================================

/**
 * 08. CLONADO Y FUSIÓN SPREAD
 * -----------------------------------------------------------------
 * Recibís dos objetos: 'base' y 'personalizaciones'.
 * Utilizando el operador de propagación Spread (...), combiná inmutablemente ambos
 * objetos en uno nuevo, donde las propiedades de 'personalizaciones' sobrescriban
 * a las de 'base'. Retorná el nuevo objeto.
 */
function fusionarConfiguraciones(base, personalizaciones) {
    // Tu código aquí
}


/**
 * 09. AGRUPAMIENTO DE PARÁMETROS REST
 * -----------------------------------------------------------------
 * Usá el operador Rest (...) en los parámetros de la función para recolectar
 * una cantidad indeterminada de números.
 * Sumalos a todos y retorná el total acumulado (usá .reduce si querés brillar).
 */
function sumarTodoRest(...valores) {
    // Tu código aquí
}


/**
 * 10. LABORATORIO AVANZADO INTEGRADO
 * -----------------------------------------------------------------
 * Recibís un array de órdenes de compra: `{ id: number, cliente: string, total: number, entregado: boolean }`.
 * 1. Filtrá solo las órdenes que hayan sido entregadas (`entregado === true`) con .filter().
 * 2. Del resultado, obtené un array únicamente con los montos `total` usando .map().
 * 3. Sumalos usando .reduce() para obtener el total de la facturación.
 * 
 * Retorná un objeto literal con este formato exacto:
 * `{ totalVentas: sumaDeTotales, cantidad: totalDeOrdenesEntregadas }`
 */
function laboratorioAvanzado(ordenes) {
    // Tu código aquí
}





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
