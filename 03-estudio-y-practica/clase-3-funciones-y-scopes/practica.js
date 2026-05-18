/**
 * 🚀 CLASE III: Scopes, Hoisting y Arquitectura de Funciones
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 3)
// ==========================================

/**
 * 01. CALCULADORA DE ÁREA (Funciones Declaradas y Hoisting)
 * -----------------------------------------------------------------
 * Escribí una función DECLARADA llamada 'calcularAreaRectangulo' que reciba
 * 'base' y 'altura' por parámetro y retorne el área (base * altura).
 * TIP: Al ser declarada, debe admitir hoisting (poder ser llamada antes de su línea de definición).
 */
// ¡Completá acá! Escribí la función declarada completa:
function calcularAreaRectangulo(base, altura) {
    // Tu código aquí
    return base * altura;
}


/**
 * 02. CONVERSOR DE TEMPERATURA (Funciones Expresadas)
 * -----------------------------------------------------------------
 * Escribí una función EXPRESADA asignada a una constante llamada 'celsiusAFahrenheit'
 * que reciba los grados celsius y retorne su equivalente en fahrenheit (celsius * 1.8 + 32).
 * TIP: Al ser una función expresada asignada a 'const', no admitirá hoisting.
 */
// ¡Completá acá! Declará la constante y asignale la función expresada:
const celsiusAFahrenheit = function (celsius) {
    return celsius * 1.8 + 32;
}; // Reemplazá 'null' por la función expresada


/**
 * 03. SALUDO PERSONALIZADO (Arrow Functions)
 * -----------------------------------------------------------------
 * Escribí una ARROW FUNCTION llamada 'saludarUsuario' que reciba el parámetro 'nombre'.
 * Debe retornar una cadena: "¡Hola, [nombre]! Bienvenido." de forma implícita (una sola línea).
 */
// ¡Completá acá! Declará la arrow function:
const saludarUsuario = (nombre) => `¡Hola, ${nombre}! Bienvenido.` // Reemplazá 'null' por la arrow function



// ==========================================
// 🟡 NIVEL MEDIO (4 - 7)
// ==========================================

/**
 * 04. CONTADOR PRIVADO (Closures)
 * -----------------------------------------------------------------
 * Escribí una función 'crearContador' que retorne otra función interna.
 * La función interna debe incrementar en 1 una variable local privada 'contador'
 * (inicializada en 0 en la función padre) y retornar su valor actualizado.
 */
function crearContador() {
    // Tu código aquí (declará la variable privada y retorná la función interna)
    let contador = 0;
    return function () {
        return ++contador;
    }
}


/**
 * 05. EL LABERINTO DE HOISTING (Comportamiento y Teoría)
 * -----------------------------------------------------------------
 * Para demostrar que entendés el hoisting sin romper el programa, completá los valores
 * que retornará este objeto basándote en la teoría de JavaScript.
 */
function demostrarHoisting() {
    // ¿Qué valor tiene una variable declarada con 'var' antes de su inicialización?
    const valorAntesDeDeclararVar = undefined; // Reemplazá por el valor correspondiente

    // ¿Qué tipo de Error (en string) lanza JS si intentamos usar una variable de tipo 'let' 
    // antes de declararla en el código? (Ejemplo: "ReferenceError", "TypeError", "SyntaxError")
    const errorLetAntesDeDeclarar = "ReferenceError"; // Reemplazá por el nombre exacto de la clase del error

    return {
        antesDeDeclararVar: valorAntesDeDeclararVar,
        errorLetAntesDeDeclarar: errorLetAntesDeDeclarar
    };
}


/**
 * 06. PROMEDIO CON PARÁMETROS REST (Parámetros Variables)
 * -----------------------------------------------------------------
 * Escribí una función 'calcularPromedio' que reciba una cantidad indefinida de notas
 * usando Parámetros Rest (...). Debe calcular y retornar el promedio.
 * - Si no recibe ninguna nota, debe retornar 0.
 */
function calcularPromedio(...notas) {
    // Tu código aquí (acordate de declarar los parámetros rest en la firma de la función)
    if (notas.length === 0) {
        return 0;
    }
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}


/**
 * 07. PROCESADOR DE COMPRA (Callbacks)
 * -----------------------------------------------------------------
 * Escribí una función 'procesarCompra' que reciba 'precio' y una función callback 'aplicarDescuento'.
 * - Si el 'precio' es mayor o igual a 1000, debe llamar al callback 'aplicarDescuento(precio)'
 *   y retornar el precio final con el descuento aplicado.
 * - Si el 'precio' es menor a 1000, retorna el precio original sin descuento (y sin llamar al callback).
 */
function procesarCompra(precio, aplicarDescuento) {
    // Tu código aquí
    if (precio >= 1000) {
        return aplicarDescuento(precio);
    } else {
        return precio;
    }
}



// ==========================================
// 🔴 NIVEL DIFICIL (8 - 10)
// ==========================================

/**
 * 08. CREADOR DE PERFILES PRIVADOS (Factory Functions + Closures)
 * -----------------------------------------------------------------
 * Escribí una función 'crearUsuario' que reciba 'nombreInicial' y 'rolInicial'.
 * Debe retornar un objeto que permita interactuar con estas variables a través de métodos,
 * pero cuidando que las variables NUNCA queden expuestas directamente como propiedades del objeto.
 * 
 * El objeto retornado debe tener exactamente:
 * - getNombre(): retorna el nombre.
 * - getRol(): retorna el rol.
 * - setRol(nuevoRol): actualiza el rol privado del usuario.
 */
function crearUsuario(nombreInicial, rolInicial) {
    // Tu código aquí
    let nombre = nombreInicial;
    let rol = rolInicial;
    return{
        getNombre: function(){
            return nombre;
        },
        getRol: function(){
            return rol;
        },
        setRol: function(nuevoRol){
            rol = nuevoRol;
        }
    }

}


/**
 * 09. SALUDO RETRASADO ASINCRÓNICO (Scopes y Timers)
 * -----------------------------------------------------------------
 * Escribí una función 'saludoRetrasado' que reciba 'nombre' y una función 'callback'.
 * Debe programar un temporizador (setTimeout) para ejecutarse después de 100ms.
 * Cuando el temporizador se cumpla, debe ejecutar el callback pasándole la cadena:
 * "¡Hola, [nombre] tras la espera!"
 */
function saludoRetrasado(nombre, callback) {
    // Tu código aquí
    setTimeout(() => {
        callback(`¡Hola, ${nombre} tras la espera!`);
    }, 100);
}


/**
 * 10. GENERADOR INCREMENTAL DE IDS (Generators y Yield)
 * -----------------------------------------------------------------
 * Escribí una función generadora (function*) llamada 'generadorIds' que reciba un 'prefijo'.
 * En cada iteración (cuando se llame a .next()), debe retornar un ID incremental
 * de tipo string: "[prefijo]-1", "[prefijo]-2", "[prefijo]-3", etc.
 * Debe ser infinita (usar un bucle infinito que ceda el control en cada yield).
 */
// ¡Completá acá la firma de la función generadora y su lógica!
function* generadorIds(prefijo) {
    let contador = 1;
    while (true) {
        yield `${prefijo}-${contador}`;
        contador++;
    }
}





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
