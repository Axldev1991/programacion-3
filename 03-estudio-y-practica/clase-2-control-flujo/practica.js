// ==========================================================================
// PROGRAMACIÓN 3 - UTN AVELLANEDA (DIVISIÓN 132)
// GUÍA PRÁCTICA: CLASE II - ESTRUCTURAS DE CONTROL Y FLUJO
// ==========================================================================
// 💡 Instrucciones: Resolvé cada ejercicio escribiendo tu código debajo de 
// los comentarios. Para ver los resultados, guardá el archivo, abrí el index.html
// en tu navegador y mirá las salidas en la Consola del Desarrollador (F12).
// ==========================================================================

console.log("🚀 Iniciando verificación de Práctica de Clase II...\n");

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 3)
// ==========================================

// --------------------------------------------------------------------------
// EJERCICIO 1: Calificación de Examen
// Enunciado: Crea una variable llamada 'nota' con un valor numérico decimal.
// Escribí una estructura condicional (if - else if - else) que imprima:
// - "Desaprobado ❌" si la nota es menor a 4.
// - "Aprobado 📚" si la nota está entre 4 y 6.9.
// - "Promocionado 🏆" si la nota es 7 o mayor.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 1: Calificación de Examen ---");
let nota = 8.5; // Cambiá este valor para probar diferentes caminos

// Tu código acá 👇
if (nota < 4){
    console.log("Desaprobado ❌");
}else if(nota < 7){
    console.log("Aprobado 📚");
}else{
    console.log("Promocionado 🏆");
}



console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 2: Par o Impar (Operador Ternario)
// Enunciado: Crea una variable llamada 'numero'. Usando el operador ternario,
// determiná si el número es par o impar. Imprimí el resultado en la consola.
// Ejemplo de salida esperada: "El número 14 es Par" o "El número 7 es Impar"
// --------------------------------------------------------------------------
console.log("--- Ejercicio 2: Par o Impar (Ternario) ---");
let numero = 15; // Probá cambiar este número

// Tu código acá 👇
const resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log(`El número ${numero} es ${resultado}`);



console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 3: Día de la Semana (Switch)
// Enunciado: Crea una variable 'diaId' con un valor del 1 al 7.
// Usando una estructura 'switch', asigná a una variable el nombre del día
// correspondiente (1 para "Lunes", 7 para "Domingo") e imprimilo.
// Si ingresan un número fuera del rango, debés imprimir: "Día no válido ❌"
// --------------------------------------------------------------------------
console.log("--- Ejercicio 3: Día de la Semana (Switch) ---");
let diaId = 3; // Probá números del 1 al 8

// Tu código acá 👇
switch (diaId){
    case 1:
        console.log("Hoy es lunes");
        break
    case 2:
        console.log("Hoy es martes");
        break
    case 3:
        console.log("Hoy es miércoles");
        break
    case 4:
        console.log("Hoy es jueves");
        break
    case 5:
        console.log("Hoy es viernes");
        break
    case 6:
        console.log("Hoy es sábado");
        break
    case 7:
        console.log("Hoy es domingo");
        break
    default:
        console.log("Día no válido ❌");
        break;
}


console.log("\n");


// ==========================================
// 🟡 NIVEL MEDIO (4 - 7)
// ==========================================

// --------------------------------------------------------------------------
// EJERCICIO 4: Lanzamiento de Cohete (Bucle While)
// Enunciado: Crea una variable 'cuenta' inicializada en 10.
// Usando un bucle 'while', realizá una cuenta regresiva imprimiendo cada número.
// Al finalizar el bucle, debés imprimir: "¡Despegue! 🚀"
// --------------------------------------------------------------------------
console.log("--- Ejercicio 4: Lanzamiento de Cohete ---");

// Tu código acá 👇
let i=10;
while(i>0){
    console.log(i--)
}
console.log("¡Despegue! 🚀")


console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 5: Salteando Múltiplos de 5 (Bucle For + Continue)
// Enunciado: Escribí un bucle 'for' que recorra los números del 1 al 25.
// Usando la sentencia 'continue', hacé que el bucle se saltee (no imprima)
// todos los números que sean múltiplos de 5.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 5: Salteando Múltiplos de 5 ---");

// Tu código acá 👇
for (let i = 1; i <= 25; i++){
    if (i % 5 === 0){
        continue;
    }
    console.log(i);
}


console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 6: Encontrando el Tesoro (Bucle For + Break)
// Enunciado: Dado el siguiente array de objetos 'cofres', escribí un bucle 'for'
// para buscar el cofre que tenga la propiedad 'tesoro: true'.
// Una vez que lo encuentres, imprimí un mensaje con su 'id' y usá 'break'
// para interrumpir el bucle inmediatamente. El bucle NO debe seguir buscando
// una vez hallado el tesoro.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 6: Encontrando el Tesoro ---");
const cofres = [
    { id: "Cofre de madera", tesoro: false },
    { id: "Cofre oxidado", tesoro: false },
    { id: "Cofre de plata", tesoro: true }, // <-- El tesoro está acá
    { id: "Cofre dorado", tesoro: false },
    { id: "Cofre maldito", tesoro: false }
];

// Tu código acá 👇
for (let cofre of cofres){
    if (cofre["tesoro"]==true){
        console.log(`El tesoro fue encontrado en ${cofre["id"]}`);
        break
    }
}


console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 7: Menú Interactivo Simulado (Bucle Do-While)
// Enunciado: Simular el flujo de un menú de un videojuego.
// Crea una variable 'opcionSeleccionada' inicializada en 1.
// Usando un bucle 'do-while', simulá que el menú se ejecuta. En cada iteración:
// 1. Si opcionSeleccionada es 1, imprimí: "Jugando partida... 🎮" e incrementá opcionSeleccionada a 2.
// 2. Si opcionSeleccionada es 2, imprimí: "Mostrando configuraciones... ⚙️" e incrementá opcionSeleccionada a 3.
// 3. El bucle debe terminar cuando la opcionSeleccionada sea igual a 3, imprimiendo: "Saliendo del juego... 👋"
// --------------------------------------------------------------------------
console.log("--- Ejercicio 7: Menú Interactivo Simulado ---");

// Tu código acá 👇
let opcionSeleccionada = 1;
do{
    console.log("[1] Jugar Partida");
    console.log("[2] Configuración");
    console.log("[3] Salir");
    if(opcionSeleccionada == 1){
        console.log("Jugando partida... 🎮");
        opcionSeleccionada++;
    }
    else if(opcionSeleccionada == 2){
        console.log("Mostrando configuraciones... ⚙️");
        opcionSeleccionada++;
    }
    else if(opcionSeleccionada == 3){
        console.log("Saliendo del juego... 👋");
        opcionSeleccionada++;
    }
    

} while(opcionSeleccionada <= 3)


console.log("\n");


// ==========================================
// 🔴 NIVEL DIFÍCIL (8 - 10)
// ==========================================

// --------------------------------------------------------------------------
// EJERCICIO 8: Generador de Pirámide de Asteriscos (Bucles Anidados)
// Enunciado: Crea una variable 'altura' con valor 5.
// Usando bucles anidados (un bucle dentro de otro), dibujá en consola una 
// pirámide que crezca línea por línea.
// Ejemplo de salida esperada para altura = 5:
// *
// **
// ***
// ****
// *****
// 💡 Ayuda: Podés ir acumulando caracteres en un string de línea antes de imprimir.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 8: Pirámide de Asteriscos ---");
let altura = 5;

// Tu código acá 👇
for (let i = 0; i < altura; i++){
    let simbolo = "*";
    console.log(simbolo.repeat(i + 1));
}


console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 9: Generador de Secuencia Fibonacci (Bucles y Variables)
// Enunciado: La secuencia de Fibonacci comienza con 0 y 1, y cada término siguiente
// es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21...).
// Crea una variable 'terminos' con valor 10.
// Escribí un bucle para calcular e imprimir los primeros 10 términos de la secuencia.
// 💡 Ayuda: Vas a necesitar llevar el registro de dos números previos.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 9: Serie de Fibonacci ---");
let terminos = 10;
let aux1 = 0;
let aux2 = 1;
// Tu código acá 👇
for (let i = 0; i < terminos; i++){
    console.log(aux1);
    let siguiente = aux1 + aux2;
    aux1 = aux2;
    aux2 = siguiente;
}



console.log("\n");

// --------------------------------------------------------------------------
// EJERCICIO 10: Validador de Números Primos (Estructura Algorítmica)
// Enunciado: Un número primo es un entero mayor que 1 que solo es divisible
// por sí mismo y por 1.
// Crea una variable 'candidato' con el valor 29.
// Escribí un algoritmo usando bucles y condicionales para verificar si 
// 'candidato' es primo o no. Imprimí el veredicto en la consola.
// 💡 Ayuda: Probá dividiendo el candidato por números desde 2 hasta su raíz cuadrada o candidato-1.
// Si encontrás un divisor exacto (resto igual a cero), ya no es primo.
// --------------------------------------------------------------------------
console.log("--- Ejercicio 10: Validador de Números Primos ---");
let candidato = 29; // Cambialo por 12, 17, 33 para probar

// Tu código acá 👇
let esPrimo = candidato > 1;
for (let i = 2; i < candidato; i++){
    if (candidato % i === 0){
        esPrimo = false;
        break;
    }
}
if (esPrimo) {
    console.log(`El número ${candidato} es primo ✅`);
} else {
    console.log(`El número ${candidato} no es primo ❌`);
}


console.log("\n");
console.log("🏁 Verificación de Práctica de Clase II completada.");
