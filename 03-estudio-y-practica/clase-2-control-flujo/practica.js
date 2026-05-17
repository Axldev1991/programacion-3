/**
 * 🚀 CLASE II: Estructuras de Control y Bucle en JS
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 3)
// ==========================================

/**
 * 01. CALIFICACIÓN DE EXAMEN
 * -----------------------------------------------------------------
 * Recibís 'nota' (número decimal). Retorná la cadena correspondiente:
 * - "Desaprobado ❌" si la nota es menor a 4.
 * - "Aprobado 📚" si la nota está entre 4 y 6.9.
 * - "Promocionado 🏆" si la nota es 7 o mayor.
 */
function evaluarNota(nota) {
    if (nota < 4) {
        return "Desaprobado ❌";
    } else if (nota < 7) {
        return "Aprobado 📚";
    } else {
        return "Promocionado 🏆";
    }
}


/**
 * 02. PAR O IMPAR (OPERADOR TERNARIO)
 * -----------------------------------------------------------------
 * Recibís 'numero' (entero).
 * Retorná la cadena exacta usando el operador ternario:
 * - "El número [numero] es Par"
 * - "El número [numero] es Impar"
 */
function evaluarParImpar(numero) {
    const res = (numero % 2 === 0) ? "Par" : "Impar";
    return `El número ${numero} es ${res}`;
}


/**
 * 03. DÍA DE LA SEMANA (SWITCH)
 * -----------------------------------------------------------------
 * Recibís 'diaId' (número del 1 al 7).
 * Retorná el nombre del día ("Lunes" para 1, "Domingo" para 7).
 * Si ingresan un número fuera del rango de 1 a 7, debés retornar: "Día no válido ❌"
 */
function obtenerDiaSemana(diaId) {
    switch (diaId) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Día no válido ❌";
    }
}



// ==========================================
// 🟡 NIVEL MEDIO (4 - 7)
// ==========================================

/**
 * 04. LANZAMIENTO DE COHETE (BUCLE WHILE)
 * -----------------------------------------------------------------
 * Retorná un array conteniendo la cuenta regresiva desde 10 hasta 1,
 * y como último elemento el string "¡Despegue! 🚀".
 * Usá obligatoriamente un bucle 'while'.
 */
function cuentaRegresiva() {
    let cuenta = 10;
    const reg = [];
    while (cuenta > 0) {
        reg.push(cuenta);
        cuenta--;
    }
    reg.push("¡Despegue! 🚀");
    return reg;
}


/**
 * 05. SALTEANDO MÚLTIPLOS DE 5 (FOR + CONTINUE)
 * -----------------------------------------------------------------
 * Recorré los números del 1 al 25 usando un bucle 'for'.
 * Acumulá en un array y retorná únicamente los números que NO sean múltiplos de 5.
 * Usá la sentencia 'continue' para saltear los múltiplos de 5.
 */
function saltearMultiplosDeCinco() {
    const resultado = [];
    for (let i = 1; i <= 25; i++) {
        if (i % 5 === 0) {
            continue;
        }
        resultado.push(i);
    }
    return resultado;
}


/**
 * 06. ENCONTRANDO EL TESORO (FOR + BREAK)
 * -----------------------------------------------------------------
 * Recibís un array 'cofres' donde cada elemento es `{ id: string, tesoro: boolean }`.
 * Recorré el array usando un bucle 'for' buscando el cofre que tenga 'tesoro: true'.
 * Una vez que lo encuentres, retorná su 'id' e interrumpí el bucle de inmediato con 'break'.
 */
function buscarTesoro(cofres) {
    let encontradoId = null;
    for (let i = 0; i < cofres.length; i++) {
        if (cofres[i].tesoro === true) {
            encontradoId = cofres[i].id;
            break;
        }
    }
    return encontradoId;
}


/**
 * 07. MENÚ INTERACTIVO SIMULADO (DO-WHILE)
 * -----------------------------------------------------------------
 * Simulá el menú interactivo con do-while.
 * Recibís 'opcionSeleccionada' (que empieza en 1).
 * Acumulá las acciones en un array y retornalo al finalizar:
 * - Si opcionSeleccionada es 1: agregá "Jugando partida... 🎮" e incrementá a 2.
 * - Si opcionSeleccionada es 2: agregá "Mostrando configuraciones... ⚙️" e incrementá a 3.
 * - Si opcionSeleccionada es 3: agregá "Saliendo del juego... 👋" e incrementá a 4.
 * El bucle termina cuando opcionSeleccionada sea mayor a 3.
 */
function simularMenu(opcionSeleccionada = 1) {
    const acciones = [];
    do {
        if (opcionSeleccionada === 1) {
            acciones.push("Jugando partida... 🎮");
            opcionSeleccionada++;
        } else if (opcionSeleccionada === 2) {
            acciones.push("Mostrando configuraciones... ⚙️");
            opcionSeleccionada++;
        } else if (opcionSeleccionada === 3) {
            acciones.push("Saliendo del juego... 👋");
            opcionSeleccionada++;
        }
    } while (opcionSeleccionada <= 3);
    return acciones;
}



// ==========================================
// 🔴 NIVEL DIFÍCIL (8 - 10)
// ==========================================

/**
 * 08. GENERADOR DE PIRÁMIDE DE ASTERISCOS (BUCLES ANIDADOS)
 * -----------------------------------------------------------------
 * Recibís 'altura' (número entero).
 * Retorná un array donde cada elemento sea una línea de la pirámide construida con asteriscos.
 * Ejemplo para altura = 3: ["*", "**", "***"]
 * Usá bucles para construir los renglones.
 */
function generarPiramide(altura) {
    const lineas = [];
    for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += "*";
        }
        lineas.push(linea);
    }
    return lineas;
}


/**
 * 09. SECUENCIA DE FIBONACCI
 * -----------------------------------------------------------------
 * Recibís 'terminos' (número entero).
 * Retorná un array conteniendo los primeros 'terminos' de la secuencia Fibonacci.
 * Ejemplo para terminos = 5: [0, 1, 1, 2, 3]
 */
function generarFibonacci(terminos) {
    const seq = [];
    let aux1 = 0;
    let aux2 = 1;
    for (let i = 0; i < terminos; i++) {
        seq.push(aux1);
        let sig = aux1 + aux2;
        aux1 = aux2;
        aux2 = sig;
    }
    return seq;
}


/**
 * 10. VALIDADOR DE NÚMEROS PRIMOS
 * -----------------------------------------------------------------
 * Recibís 'candidato' (número entero).
 * Retorná 'true' si es primo, y 'false' de lo contrario.
 * Recordá que los primos son mayores que 1 y solo divisibles por sí mismos y por 1.
 */
function esNumeroPrimo(candidato) {
    if (candidato <= 1) return false;
    let esPrimo = true;
    for (let i = 2; i < candidato; i++) {
        if (candidato % i === 0) {
            esPrimo = false;
            break;
        }
    }
    return esPrimo;
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE II - CONTROL DE FLUJO 🧪", "color: #e040fb; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #e040fb; color: #fff;" : "background: #ff1744; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #e040fb; font-weight: 500;");
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

        // 1. evaluarNota
        try {
            const r1 = evaluarNota(3);
            const r2 = evaluarNota(5.5);
            const r3 = evaluarNota(8);
            if (r1.includes("Desaprobado") && r2.includes("Aprobado") && r3.includes("Promocionado")) {
                printResult(1, "Condicionales (Notas)", true, "Estructuras condicionales evaluadas correctamente.");
            } else {
                printResult(1, "Condicionales (Notas)", false, `Valores inesperados.`);
            }
        } catch (e) {
            printResult(1, "Condicionales (Notas)", false, "Error en la ejecución.", e);
        }

        // 2. evaluarParImpar
        try {
            const r1 = evaluarParImpar(14);
            const r2 = evaluarParImpar(7);
            if (r1.includes("Par") && r2.includes("Impar")) {
                printResult(2, "Operador Ternario", true, "Par/Impar determinado con ternario con éxito.");
            } else {
                printResult(2, "Operador Ternario", false, "Salida con formato incorrecto.");
            }
        } catch (e) {
            printResult(2, "Operador Ternario", false, "Error en la ejecución.", e);
        }

        // 3. obtenerDiaSemana
        try {
            const r1 = obtenerDiaSemana(1);
            const r2 = obtenerDiaSemana(7);
            const r3 = obtenerDiaSemana(8);
            if (r1 === "Lunes" && r2 === "Domingo" && r3.includes("no válido")) {
                printResult(3, "Estructura Switch", true, "Control de flujo de días de la semana y default completado.");
            } else {
                printResult(3, "Estructura Switch", false, "Veredicto erróneo.");
            }
        } catch (e) {
            printResult(3, "Estructura Switch", false, "Error en la ejecución.", e);
        }

        // 4. cuentaRegresiva
        try {
            const res = cuentaRegresiva();
            if (res && res[0] === 10 && res[9] === 1 && res[10] === "¡Despegue! 🚀") {
                printResult(4, "Bucle While (Regresivo)", true, "Cuenta regresiva y despegue generados perfectamente.");
            } else {
                printResult(4, "Bucle While (Regresivo)", false, `Secuencia obtenida errónea: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(4, "Bucle While (Regresivo)", false, "Error en la ejecución.", e);
        }

        // 5. saltearMultiplosDeCinco
        try {
            const res = saltearMultiplosDeCinco();
            if (res && res.length === 20 && !res.includes(5) && !res.includes(10) && !res.includes(25)) {
                printResult(5, "For + Continue (Salteo de Múltiplos)", true, "Múltiplos de 5 omitidos usando continue de forma limpia.");
            } else {
                printResult(5, "For + Continue (Salteo de Múltiplos)", false, `Error en la secuencia: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(5, "For + Continue (Salteo de Múltiplos)", false, "Error en la ejecución.", e);
        }

        // 6. buscarTesoro
        try {
            const list = [
                { id: "Madera", tesoro: false },
                { id: "Plata", tesoro: true },
                { id: "Oro", tesoro: false }
            ];
            const res = buscarTesoro(list);
            if (res === "Plata") {
                printResult(6, "Bucle For + Break (Búsqueda)", true, "Cofre del tesoro hallado y bucle interrumpido con break.");
            } else {
                printResult(6, "Bucle For + Break (Búsqueda)", false, `Retornó: ${res}`);
            }
        } catch (e) {
            printResult(6, "Bucle For + Break (Búsqueda)", false, "Error en la ejecución.", e);
        }

        // 7. simularMenu
        try {
            const res = simularMenu(1);
            if (res && res.length === 3 && res[0].includes("partida") && res[2].includes("Saliendo")) {
                printResult(7, "Do-While (Menú Videojuego)", true, "Menu interactivo simulado secuencialmente.");
            } else {
                printResult(7, "Do-While (Menú Videojuego)", false, `Resultado: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(7, "Do-While (Menú Videojuego)", false, "Error en la ejecución.", e);
        }

        // 8. generarPiramide
        try {
            const res = generarPiramide(4);
            if (res && res[0] === "*" && res[3] === "****" && res.length === 4) {
                printResult(8, "Bucles Anidados (Pirámide)", true, "Líneas de la pirámide de asteriscos formadas con éxito.");
            } else {
                printResult(8, "Bucles Anidados (Pirámide)", false, `Pirámide generada: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(8, "Bucles Anidados (Pirámide)", false, "Error en la ejecución.", e);
        }

        // 9. generarFibonacci
        try {
            const res = generarFibonacci(10);
            if (JSON.stringify(res) === "[0,1,1,2,3,5,8,13,21,34]") {
                printResult(9, "Serie de Fibonacci", true, "Primeros 10 números de la serie calculados correctamente.");
            } else {
                printResult(9, "Serie de Fibonacci", false, `Resultado obtenido: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(9, "Serie de Fibonacci", false, "Error en la ejecución.", e);
        }

        // 10. esNumeroPrimo
        try {
            const r1 = esNumeroPrimo(29);
            const r2 = esNumeroPrimo(12);
            const r3 = esNumeroPrimo(1);
            if (r1 === true && r2 === false && r3 === false) {
                printResult(10, "Validador Primos (Algoritmo)", true, "Divisibilidad analizada perfectamente y veredicto correcto.");
            } else {
                printResult(10, "Validador Primos (Algoritmo)", false, `Erróneo. 29: ${r1}, 12: ${r2}, 1: ${r3}`);
            }
        } catch (e) {
            printResult(10, "Validador Primos (Algoritmo)", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡ESTUPENDO! Dominás el flujo y las estructuras de control al 100%. 🏆", "color: #e040fb; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo II en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
