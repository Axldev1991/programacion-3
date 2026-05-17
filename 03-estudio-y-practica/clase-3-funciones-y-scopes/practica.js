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
const celsiusAFahrenheit = null; // Reemplazá 'null' por la función expresada
celsiusAFahrenheit = function(celsius){
    return celsius * 1.8 + 32;
}

/**
 * 03. SALUDO PERSONALIZADO (Arrow Functions)
 * -----------------------------------------------------------------
 * Escribí una ARROW FUNCTION llamada 'saludarUsuario' que reciba el parámetro 'nombre'.
 * Debe retornar una cadena: "¡Hola, [nombre]! Bienvenido." de forma implícita (una sola línea).
 */
// ¡Completá acá! Declará la arrow function:
const saludarUsuario = null; // Reemplazá 'null' por la arrow function
saludarUsuario = (nombre) => console.log(`¡Hola, ${nombre}! Bienvenido.`)


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
}


/**
 * 05. EL LABERINTO DE HOISTING (Comportamiento y Teoría)
 * -----------------------------------------------------------------
 * Para demostrar que entendés el hoisting sin romper el programa, completá los valores
 * que retornará este objeto basándote en la teoría de JavaScript.
 */
function demostrarHoisting() {
    // ¿Qué valor tiene una variable declarada con 'var' antes de su inicialización?
    const valorAntesDeDeclararVar = null; // Reemplazá por el valor correspondiente

    // ¿Qué tipo de Error (en string) lanza JS si intentamos usar una variable de tipo 'let' 
    // antes de declararla en el código? (Ejemplo: "ReferenceError", "TypeError", "SyntaxError")
    const errorLetAntesDeDeclarar = ""; // Reemplazá por el nombre exacto de la clase del error

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
function calcularPromedio() {
    // Tu código aquí (acordate de declarar los parámetros rest en la firma de la función)
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
    // Tu código aquí
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================
// (No modifiques esta sección, es la encargada de validar tus soluciones)

(function ejecutarTests() {
    // Esperar a que la página cargue en navegador
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE III - SCOPES Y FUNCIONES 🧪", "color: #7c4dff; font-weight: 800; font-size: 1.2rem;");
        console.log("%cPara resolver la guía, editá el archivo 'practica.js'.", "color: #a3a8b4; font-style: italic;");
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

        // 1. Calculadora de Área
        try {
            if (typeof calcularAreaRectangulo !== 'function') {
                printResult(1, "Calculadora de Área (Funcion Declarada)", false, "La función 'calcularAreaRectangulo' no está declarada.");
            } else {
                // Test hoisting check
                let testHoistingVal = false;
                try {
                    // Si se puede invocar, evaluamos
                    const area = calcularAreaRectangulo(5, 4);
                    if (area === 20) {
                        testHoistingVal = true;
                    }
                } catch(e) {}
                
                const areaNormal = calcularAreaRectangulo(10, 5);
                if (areaNormal === 50) {
                    printResult(1, "Calculadora de Área (Funcion Declarada)", true, "La función calcula correctamente el área.");
                } else {
                    printResult(1, "Calculadora de Área (Funcion Declarada)", false, `Se esperaba 50 pero retornó ${areaNormal}.`);
                }
            }
        } catch (e) {
            printResult(1, "Calculadora de Área (Funcion Declarada)", false, "Error en la ejecución.", e);
        }

        // 2. Conversor de Temperatura
        try {
            if (typeof celsiusAFahrenheit !== 'function') {
                printResult(2, "Conversor de Temperatura (Funcion Expresada)", false, "La constante/función 'celsiusAFahrenheit' no está asignada o definida.");
            } else {
                const fahr = celsiusAFahrenheit(20);
                const fahrZero = celsiusAFahrenheit(0);
                if (fahr === 68 && fahrZero === 32) {
                    printResult(2, "Conversor de Temperatura (Funcion Expresada)", true, "Conversiones a Fahrenheit impecables (20°C -> 68°F y 0°C -> 32°F).");
                } else {
                    printResult(2, "Conversor de Temperatura (Funcion Expresada)", false, `Cálculos erróneos. Retornó ${fahr} para 20°C.`);
                }
            }
        } catch (e) {
            printResult(2, "Conversor de Temperatura (Funcion Expresada)", false, "Error en la ejecución. Asegurate de declararla como constante con una función.", e);
        }

        // 3. Saludo Personalizado
        try {
            if (typeof saludarUsuario !== 'function') {
                printResult(3, "Saludo Personalizado (Arrow Function)", false, "La función 'saludarUsuario' no está definida.");
            } else {
                const saludo = saludarUsuario("Axel");
                if (saludo && saludo.includes("¡Hola, Axel! Bienvenido.")) {
                    // Check if it's an arrow function (typically doesn't have prototype)
                    const esFlecha = !saludarUsuario.hasOwnProperty('prototype');
                    if (esFlecha) {
                        printResult(3, "Saludo Personalizado (Arrow Function)", true, "Saludo perfecto y cumple sintaxis moderna de Arrow Function.");
                    } else {
                        printResult(3, "Saludo Personalizado (Arrow Function)", false, "La función retorna el saludo, pero no fue declarada como una Arrow Function (flecha).");
                    }
                } else {
                    printResult(3, "Saludo Personalizado (Arrow Function)", false, `Se esperaba '¡Hola, Axel! Bienvenido.' pero retornó '${saludo}'.`);
                }
            }
        } catch (e) {
            printResult(3, "Saludo Personalizado (Arrow Function)", false, "Error en la ejecución.", e);
        }

        // 4. Contador Privado
        try {
            if (typeof crearContador !== 'function') {
                printResult(4, "Contador Privado (Closures)", false, "La función 'crearContador' no está definida.");
            } else {
                const miContador = crearContador();
                if (typeof miContador !== 'function') {
                    printResult(4, "Contador Privado (Closures)", false, "crearContador() debe retornar otra función.");
                } else {
                    const v1 = miContador();
                    const v2 = miContador();
                    const v3 = miContador();
                    if (v1 === 1 && v2 === 2 && v3 === 3) {
                        printResult(4, "Contador Privado (Closures)", true, "El contador mantiene el estado privado de forma impecable entre ejecuciones.");
                    } else {
                        printResult(4, "Contador Privado (Closures)", false, `Se esperaba la secuencia 1, 2, 3 pero se obtuvo: ${v1}, ${v2}, ${v3}.`);
                    }
                }
            }
        } catch (e) {
            printResult(4, "Contador Privado (Closures)", false, "Error en la ejecución.", e);
        }

        // 5. El Laberinto de Hoisting
        try {
            const r = demostrarHoisting();
            if (!r || typeof r !== 'object') {
                printResult(5, "Laberinto de Hoisting (Conceptos)", false, "demostrarHoisting() debe retornar un objeto.");
            } else {
                const okVar = r.antesDeDeclararVar === undefined;
                const okLet = typeof r.errorLetAntesDeDeclarar === 'string' && r.errorLetAntesDeDeclarar.toLowerCase().includes('reference');
                
                if (okVar && okLet) {
                    printResult(5, "Laberinto de Hoisting (Conceptos)", true, "¡Excelente comprensión teórica del comportamiento de variables!");
                } else {
                    let fallas = [];
                    if (!okVar) fallas.push(`antesDeDeclararVar valía ${r.antesDeDeclararVar} (esperado: undefined)`);
                    if (!okLet) fallas.push(`errorLetAntesDeDeclarar valía '${r.errorLetAntesDeDeclarar}' (esperado: 'ReferenceError')`);
                    printResult(5, "Laberinto de Hoisting (Conceptos)", false, "Fallas teóricas: " + fallas.join(" y "));
                }
            }
        } catch (e) {
            printResult(5, "Laberinto de Hoisting (Conceptos)", false, "Error en la ejecución.", e);
        }

        // 6. Promedio con Parámetros Rest
        try {
            if (typeof calcularPromedio !== 'function') {
                printResult(6, "Promedio con Parámetros Rest", false, "La función 'calcularPromedio' no está definida.");
            } else {
                const prom1 = calcularPromedio(10, 8, 6);
                const prom2 = calcularPromedio(5, 5);
                const promVacio = calcularPromedio();
                
                if (prom1 === 8 && prom2 === 5 && promVacio === 0) {
                    printResult(6, "Promedio con Parámetros Rest", true, "Cálculo de promedios impecable. Maneja parámetros indeterminados y caso vacío.");
                } else {
                    printResult(6, "Promedio con Parámetros Rest", false, `Valores obtenidos: prom(10,8,6)=${prom1}, prom(5,5)=${prom2}, prom()=${promVacio}.`);
                }
            }
        } catch (e) {
            printResult(6, "Promedio con Parámetros Rest", false, "Error en la ejecución.", e);
        }

        // 7. Procesador de Compra con Callbacks
        try {
            if (typeof procesarCompra !== 'function') {
                printResult(7, "Procesador de Compra (Callbacks)", false, "La función 'procesarCompra' no está definida.");
            } else {
                let callbackLlamado = false;
                const callbackDummy = (p) => {
                    callbackLlamado = true;
                    return p * 0.9; // 10% descuento
                };

                const compraChica = procesarCompra(800, callbackDummy);
                const llamadoChica = callbackLlamado;
                
                callbackLlamado = false; // Reset
                const compraGrande = procesarCompra(1500, callbackDummy);
                const llamadoGrande = callbackLlamado;

                if (compraChica === 800 && !llamadoChica && compraGrande === 1350 && llamadoGrande) {
                    printResult(7, "Procesador de Compra (Callbacks)", true, "Callbacks controlados perfectamente. Solo se aplican si corresponde.");
                } else {
                    printResult(7, "Procesador de Compra (Callbacks)", false, `Comportamiento incorrecto. Compra chica: $${compraChica} (Callback: ${llamadoChica}). Compra grande: $${compraGrande} (Callback: ${llamadoGrande}).`);
                }
            }
        } catch (e) {
            printResult(7, "Procesador de Compra (Callbacks)", false, "Error en la ejecución.", e);
        }

        // 8. Creador de Perfiles Privados
        try {
            if (typeof crearUsuario !== 'function') {
                printResult(8, "Creador de Perfiles Privados (Factory + Closure)", false, "La función 'crearUsuario' no está definida.");
            } else {
                const user = crearUsuario("Axel", "Estudiante");
                if (!user || typeof user.getNombre !== 'function' || typeof user.getRol !== 'function' || typeof user.setRol !== 'function') {
                    printResult(8, "Creador de Perfiles Privados (Factory + Closure)", false, "El objeto devuelto no contiene los métodos requeridos.");
                } else {
                    const n1 = user.getNombre();
                    const r1 = user.getRol();
                    user.setRol("Desarrollador");
                    const r2 = user.getRol();
                    
                    // Comprobación de encapsulamiento estricto
                    const propiedades = Object.keys(user);
                    const tienePropiedadesPrivadas = propiedades.includes("nombreInicial") || propiedades.includes("rolInicial") || user.nombre || user.rol;
                    
                    if (n1 === "Axel" && r1 === "Estudiante" && r2 === "Desarrollador" && !tienePropiedadesPrivadas) {
                        printResult(8, "Creador de Perfiles Privados (Factory + Closure)", true, "Encapsulamiento perfecto. Ninguna propiedad quedó expuesta directamente en el objeto.");
                    } else {
                        printResult(8, "Creador de Perfiles Privados (Factory + Closure)", false, `Falla en consistencia o violación de privacidad. Propiedades públicas expuestas: [${propiedades.join(", ")}].`);
                    }
                }
            }
        } catch (e) {
            printResult(8, "Creador de Perfiles Privados (Factory + Closure)", false, "Error en la ejecución.", e);
        }

        // 9. Saludo Retrasado Asincrónico
        try {
            if (typeof saludoRetrasado !== 'function') {
                printResult(9, "Saludo Retrasado Asincrónico (setTimeout)", false, "La función 'saludoRetrasado' no está definida.");
            } else {
                let mensajeRecibido = null;
                const inicio = Date.now();
                
                saludoRetrasado("Matias", (msg) => {
                    mensajeRecibido = msg;
                    const delta = Date.now() - inicio;
                    const esMensajeOk = msg === "¡Hola, Matias tras la espera!";
                    const esTiempoOk = delta >= 80 && delta <= 300; // Margen de holgura de setTimeout de 100ms
                    
                    if (esMensajeOk && esTiempoOk) {
                        printResult(9, "Saludo Retrasado Asincrónico (setTimeout)", true, `Saludo asincrónico recibido tras ${delta}ms de forma impecable.`);
                    } else {
                        printResult(9, "Saludo Retrasado Asincrónico (setTimeout)", false, `Fallo en el callback asincrónico. Mensaje: "${msg}" (Esperado: "¡Hola, Matias tras la espera!"). Tiempo transcurrido: ${delta}ms.`);
                    }
                });
            }
        } catch (e) {
            printResult(9, "Saludo Retrasado Asincrónico (setTimeout)", false, "Error en la ejecución.", e);
        }

        // 10. Generador Incremental de IDs
        try {
            // Verificar si es generador buscando generator constructor
            const esGenerador = generadorIds && generadorIds.constructor && generadorIds.constructor.name === 'GeneratorFunction';
            if (!esGenerador) {
                printResult(10, "Generador Incremental de IDs", false, "La función 'generadorIds' no fue declarada como una función generadora (function*).");
            } else {
                const iterador = generadorIds("USER");
                const id1 = iterador.next();
                const id2 = iterador.next();
                const id3 = iterador.next();

                if (id1.value === "USER-1" && id2.value === "USER-2" && id3.value === "USER-3" && !id1.done) {
                    printResult(10, "Generador Incremental de IDs", true, "Generador de IDs secuenciales infinitos funcionando a la perfección.");
                } else {
                    printResult(10, "Generador Incremental de IDs", false, `Secuencia incorrecta. Valores: [${id1.value}, ${id2.value}, ${id3.value}].`);
                }
            }
        } catch (e) {
            printResult(10, "Generador Incremental de IDs", false, "Error en la ejecución.", e);
        }

        // Resumen Final
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡EXCELENTE! Aprobaste todos los desafíos del módulo de Funciones y Scopes. Escribís código de primer nivel. 🏆", "color: #00e676; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Guía en desarrollo: ${aprobados}/${totalTests} aprobados. ¡A no aflojar! ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
