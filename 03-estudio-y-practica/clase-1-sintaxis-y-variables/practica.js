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





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE I - SINTAXIS Y VARIABLES 🧪", "color: #00bfa5; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #00bfa5; color: #000;" : "background: #ff1744; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #00bfa5; font-weight: 500;");
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

        // 1. crearVariable
        try {
            const res = crearVariable();
            if (res === 25) {
                printResult(1, "Creación de Variables (let)", true, "Variable declarada e inicializada en 25 perfectamente.");
            } else {
                printResult(1, "Creación de Variables (let)", false, `Se esperaba 25 pero retornó ${res}.`);
            }
        } catch (e) {
            printResult(1, "Creación de Variables (let)", false, "Error en la ejecución.", e);
        }

        // 2. crearConstante
        try {
            const res = crearConstante();
            if (res === "Argentina") {
                printResult(2, "Asignación de Constantes (const)", true, "Constante inmutable asignada correctamente.");
            } else {
                printResult(2, "Asignación de Constantes (const)", false, `Se esperaba "Argentina" pero retornó ${res}.`);
            }
        } catch (e) {
            printResult(2, "Asignación de Constantes (const)", false, "Error en la ejecución.", e);
        }

        // 3. calcularMatematica
        try {
            const res = calcularMatematica(10, 5);
            if (res && res.suma === 15 && res.resta === 5 && res.multiplicacion === 50) {
                printResult(3, "Operaciones Aritméticas", true, "Operaciones de suma, resta y multiplicación impecables.");
            } else {
                printResult(3, "Operaciones Aritméticas", false, `Resultado incorrecto: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(3, "Operaciones Aritméticas", false, "Error en la ejecución.", e);
        }

        // 4. unirMensaje
        try {
            const res = unirMensaje("Axel", "Programacion III");
            if (res === "El alumno Axel está inscripto en Programacion III.") {
                printResult(4, "Template Literals", true, "Mensaje dinámico concatenado de forma excelente.");
            } else {
                printResult(4, "Template Literals", false, `Se esperaba "El alumno Axel está inscripto en Programacion III." pero retornó "${res}".`);
            }
        } catch (e) {
            printResult(4, "Template Literals", false, "Error en la ejecución.", e);
        }

        // 5. evaluarIgualdades
        try {
            const res = evaluarIgualdades(5, "5");
            if (res && res.simple === true && res.estricta === false) {
                printResult(5, "Igualdad Simple vs Estricta", true, "Análisis de coerción correcto. Capturás la debilidad del ==.");
            } else {
                printResult(5, "Igualdad Simple vs Estricta", false, `Se esperaba {simple: true, estricta: false} pero retornó ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(5, "Igualdad Simple vs Estricta", false, "Error en la ejecución.", e);
        }

        // 6. obtenerTipo
        try {
            const t1 = obtenerTipo(42);
            const t2 = obtenerTipo("texto");
            const t3 = obtenerTipo(true);
            if (t1 === "number" && t2 === "string" && t3 === "boolean") {
                printResult(6, "Operador Typeof", true, "Lecturas de tipo de dato exactas en primitivos.");
            } else {
                printResult(6, "Operador Typeof", false, `Obtenido: [${t1}, ${t2}, ${t3}].`);
            }
        } catch (e) {
            printResult(6, "Operador Typeof", false, "Error en la ejecución.", e);
        }

        // 7. verificarPermisoAcceso
        try {
            const r1 = verificarPermisoAcceso(20, true);
            const r2 = verificarPermisoAcceso(16, true);
            const r3 = verificarPermisoAcceso(25, false);
            if (r1 === true && r2 === false && r3 === false) {
                printResult(7, "Operadores Lógicos (AND)", true, "Comprobación de condiciones lógicas excelente.");
            } else {
                printResult(7, "Operadores Lógicos (AND)", false, `Obtenido para (20, true): ${r1}, (16, true): ${r2}, (25, false): ${r3}.`);
            }
        } catch (e) {
            printResult(7, "Operadores Lógicos (AND)", false, "Error en la ejecución.", e);
        }

        // 8. identificarVacio
        try {
            const rNull = identificarVacio("vaciar");
            const rUndef = identificarVacio("declarar");
            if (rNull === null && rUndef === undefined) {
                printResult(8, "Diferencia Null y Undefined", true, "Manejo de variables vacías y no inicializadas impecable.");
            } else {
                printResult(8, "Diferencia Null y Undefined", false, `Para vaciar: ${rNull}, para declarar: ${rUndef}.`);
            }
        } catch (e) {
            printResult(8, "Diferencia Null y Undefined", false, "Error en la ejecución.", e);
        }

        // 9. parsearSeguro
        try {
            const res = parsearSeguro("45", "3.1415");
            if (res && res.entero === 45 && res.decimal === 3.1415) {
                printResult(9, "Conversión Numérica", true, "Parseos exitosos a enteros y números con coma.");
            } else {
                printResult(9, "Conversión Numérica", false, `Obtenido: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(9, "Conversión Numérica", false, "Error en la ejecución.", e);
        }

        // 10. desafioPrecedencia
        try {
            const res = desafioPrecedencia(2, 3, 5); // (2+3)*5 = 25. Si no hay paréntesis da 2 + 15 = 17.
            if (res === 25) {
                printResult(10, "Prioridad de Operadores", true, "Paréntesis estratégicos aplicados a la perfección.");
            } else {
                printResult(10, "Prioridad de Operadores", false, `Se esperaba 25 pero retornó ${res}. Cuidado con la jerarquía.`);
            }
        } catch (e) {
            printResult(10, "Prioridad de Operadores", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡EXCELENTE! Dominás la sintaxis y operadores iniciales al 100%. 🏆", "color: #00bfa5; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo I en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
