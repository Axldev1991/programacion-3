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





// Fin de la guía. ¡Escribí tus soluciones arriba y corré los tests desde el Playground!
